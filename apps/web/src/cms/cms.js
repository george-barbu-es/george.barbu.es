import CMS from 'decap-cms-app';

// Define your CMS config
const config = {
  collections: [
    {
      name: 'content',
      label: 'Content',
      files: [
        {
          label: 'Resume',
          name: 'resume',
          file: 'data/profile.json',
          fields: [
            {
              label: 'Header',
              name: 'header',
              widget: 'object',
              required: true,
              fields: [
                { label: 'Full Name', name: 'fullname', widget: 'string' },
                { label: 'Role', name: 'role', widget: 'string' },
                { label: 'Slogan', name: 'slogan', widget: 'string' },
              ],
            },
            {
              label: 'PERSONAL PROFILE',
              name: 'summary',
              widget: 'object',
              fields: [
                { label: 'Label', name: 'label', widget: 'string' },
                { label: 'Text', name: 'text', widget: 'text' },
              ],
            },
            // More fields...
          ],
        },
      ],
    },
  ],
};

// Optional: Register preview style (e.g., dark theme)
CMS.registerPreviewStyle('/assets/dark-theme.css');

// Initialize CMS when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    CMS.init({ config });
  });
}
