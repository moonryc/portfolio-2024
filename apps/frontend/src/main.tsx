import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './app/theme/theme';
import ApolloClientProvider from './app/providers/ApolloClientProvider';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <ApolloClientProvider>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </ApolloClientProvider>
  </React.StrictMode>
);
