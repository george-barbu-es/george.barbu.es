import { DecapCmsApp } from 'decap-cms-app';

DecapCmsApp.init({
  config: {
    backend: {
      name: 'git-gateway',
      repo: 'george-barbu-es/george.barbu.es', // Replace with your repo
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
              {
                label: 'Experience',
                name: 'experience',
                widget: 'list',
                required: false,
                fields: [
                  { label: 'Label', name: 'label', widget: 'string', required: true },
                  {
                    label: 'Items',
                    name: 'items',
                    widget: 'list',
                    fields: [
                      { label: 'Role', name: 'role', widget: 'string', required: true },
                      { label: 'Company', name: 'company', widget: 'string', required: true },
                      { label: 'Start date', name: 'startDate', widget: 'date', format: 'YYYY', required: true },
                      { label: 'End date', name: 'endDate', widget: 'date', format: 'YYYY', required: false },
                      { label: 'Present', name: 'presentDate', widget: 'select', options: ['Yes', 'No'], default: 'No', required: true },
                      {
                        label: 'Duties',
                        name: 'duties',
                        widget: 'list',
                        fields: [{ label: 'Duty', name: 'duty', widget: 'string' }],
                      },
                    ],
                  },
                ],
              },
              // Additional fields here (Skills, Contact, Education, Footer)
            ],
          },
        ],
      },
    ],
  },
});