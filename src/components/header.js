import React from "react";
import {
  Platform,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { cssInterop } from "nativewind";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function Header({}) {
  const isWEB = Platform.OS === "web";
  const pdfName = "george-barbu.pdf";
  const pdfUrl = process.env.EXPO_PUBLIC_SITE_URL + process.env.EXPO_PUBLIC_PDF_EXPORT_PATH;
  const localUri = FileSystem.documentDirectory + pdfName;

  cssInterop(Icon, {
    className: {
      target: "style",
      nativeStyleToProp: { size: true },
    },
  });

  const downloadPDFmobile = async () => {
    try {
      // Fetch the file from the URL
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      // Read the blob as a Base64 string
      const reader = new FileReader();
      reader.onload = async () => {
        const base64data = reader.result.split(",")[1]; // Extract the Base64 data without the header

        // Write Base64 string to a file
        await FileSystem.writeAsStringAsync(localUri, base64data, {
          encoding: FileSystem.EncodingType.Base64,
        });

        console.log("File downloaded to:", localUri);
      };

      reader.onerror = (error) => {
        console.error("Error reading file as Base64:", error);
      };

      reader.readAsDataURL(blob); // Convert the blob to a Base64-encoded string
    } catch (error) {
      console.error("Error during file download:", error);
    }
  };

  const sharePDFmobile = async () => {
    try {
      // Define the local file path where the PDF will be saved
      const localFileUri = FileSystem.documentDirectory + pdfName;

      // Download the PDF to the local file system
      const { uri } = await FileSystem.downloadAsync(pdfUrl, localFileUri);
      console.log("File downloaded to:", uri);

      // Now share the local file
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri); // Share the local file
        console.log("PDF shared successfully!");
      } else {
        Alert.alert(
          "Sharing is not available",
          "The current device cannot share files."
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to download or share the document.");
      console.error("Error during sharing:", error);
    }
  };


  const downloadPDFweb = () => {
    var element = document.createElement("a");
    element.target = "_blank";
    element.setAttribute("href", process.env.EXPO_PUBLIC_PDF_EXPORT_PATH);
    element.setAttribute("download", pdfName);

    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const printPDF = () => {
    if (!document.getElementById("resumePdfIframe")) {
      const resumeIframe = document.createElement("iframe");
      resumeIframe.setAttribute("src", process.env.EXPO_PUBLIC_PDF_EXPORT_PATH);
      resumeIframe.setAttribute("id", "resumePdfIframe");
      resumeIframe.setAttribute("name", "resumePdfIframe");
      resumeIframe.style.display = "none";
      document.body.appendChild(resumeIframe);
    }

    const resumePdfIframe = window.frames["resumePdfIframe"];
    resumePdfIframe.focus();
    resumePdfIframe.print();
    document.body.removeChild(resumePdfIframe);
  };
  const downloadPDF = isWEB ? downloadPDFweb : downloadPDFmobile;


  return (
    <View
      data-exclude="true"
      className="max-w-screen-pdf relative flex-row mx-auto items-center justify-center text-center  pt-6 lg:pb-5 "
    >
      <TouchableOpacity onPress={downloadPDF} className="mr-4">
        <Icon
          name="download"
          color="#313638"
          className="text-[40px] md:!text-[25px]"
        />
      </TouchableOpacity>

      {isWEB && (
        <TouchableOpacity onPress={printPDF} className="mr-4">
          <Icon
            name="printer"
            color="#313638"
            className="text-[40px] md:!text-[25px]"
          />
        </TouchableOpacity>
      )}

      {!isWEB && (
        <TouchableOpacity onPress={sharePDFmobile} className="mr-4">
          <Icon
            name="share-variant"
            color="#313638"
            className="text-[40px] md:!text-[25px]"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
