require("dotenv").config({
  path: `.env.production`,
});

const puppeteer = require("puppeteer");
const fs = require("fs");
const shell = require("shelljs");

const contentHtml = fs.readFileSync(
  process.env.EXPO_PUBLIC_PUBLIC_PATH + process.env.EXPO_PUBLIC_INDEX_HTML_PATH,
  "utf8"
);

shell.mkdir("-p", "./dist/exports");

(async () => {
  try {
    const content = `
      <style>
        html {
          -webkit-print-color-adjust: exact;
        }
        #header, #footer { padding: 0 !important; }
      </style>
      <aside style="width: 237.5px; background: #313638; height: 1080px;"></aside>
    `;

    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      ignoreDefaultArgs: ["--disable-extensions"],
    });

    const page = await browser.newPage();

    // Use manual delay instead of waitForTimeout
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await page.setCacheEnabled(false);
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    await page.setContent(contentHtml);

    // Wait to ensure content loads
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // Remove unwanted elements
    const removeSelector = '[data-exclude="true"]';
    await page.evaluate((sel) => {
      const elements = document.querySelectorAll(sel);
      elements.forEach((el) => el.remove());
    }, removeSelector);

    // Export to PDF
    const pdfPath =
      process.env.EXPO_PUBLIC_PUBLIC_PATH +
      process.env.EXPO_PUBLIC_PDF_EXPORT_PATH;

    await page.pdf({
      path: pdfPath,
      format: "A4",
      headerTemplate: content,
      footerTemplate: content,
      margin: { top: "30px", bottom: "30px" },
      printBackground: true,
      displayHeaderFooter: true,
    });

    console.log(`PDF exported successfully to ${pdfPath}`);
    await browser.close();
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
