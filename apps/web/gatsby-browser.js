import "@fontsource/norwester"; // Font import

import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 import

// Wrap React root element in Gatsby 5 using React 18's createRoot
export const wrapRootElement = ({ element }) => {
  const root = document.getElementById('___gatsby');
  const rootElement = ReactDOM.createRoot(root);

  // Render the application using React 18's `createRoot` method
  rootElement.render(element);

  return null;
};

// Ensure Buffer is defined in the browser (for use with certain libraries)
window.Buffer = window.Buffer || require("buffer").Buffer;

// Gatsby client-side entry
export const onClientEntry = () => {
  window.onload = () => {
    console.log('© 2021 | Developed by George Barbu');
  };
};
