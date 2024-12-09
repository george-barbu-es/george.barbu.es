import DecapCmsApp from 'decap-cms-app';
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18

// Ensure DecapCmsApp is available globally (optional)
window.DecapCmsApp = DecapCmsApp;

// Define your CMS config
const config = {
  backend: {
    name: 'git-gateway',
    repo: 'george-barbu-es/george.barbu.es',
    branch: 'master',
  },
  local_backend: true,
  public_folder: '/assets',
  media_folder: 'static/assets',
  publish_mode: 'editorial_workflow',
  display_url: 'Resume George Barbu',
  site_url: 'https://george.barbu.es',
  logo_url: 'https://george.barbu.es/assets/logo.png',
  editor: {
    preview: true,
  },
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
DecapCmsApp.registerPreviewStyle('/assets/dark-theme.css');

// Initialize CMS when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    DecapCmsApp.init({ config });
  });
}
