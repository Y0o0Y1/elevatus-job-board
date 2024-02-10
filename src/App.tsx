import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { AppProps, ChildrenProps } from './types/root';
import './App.css';
import { RTL } from './components/rtl';
import i18n from './i18n/i18n';
import { store } from './redux/store';
import router from './routes';
import theme from './styles/GlobalTheme';
import Loader from './components/Loader/Loader';

/**
 * Main application component responsible for rendering the application layout
 * and managing application-level states.
 */

function App(): JSX.Element {
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

  // Listen for language changes and update current language state accordingly
  i18n.on('languageChanged', (lng: string) => {
    setCurrentLanguage(lng);
  });

  // Define the application context component to wrap providers
  const AppContext: React.FC<AppProps> = ({ components = [], children }) =>
    components.reduce((acc, Component) => <Component>{acc}</Component>, children);

  // Define providers array to be passed to AppContext
  const providers: React.FC<ChildrenProps>[] = [
    ({ children }: ChildrenProps) => <Provider store={store}>{children}</Provider>,
    () => <RouterProvider router={router} />,
    ({ children }: ChildrenProps) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>,
    ({ children }: ChildrenProps) => (
      <RTL direction={currentLanguage === 'en' ? 'ltr' : 'rtl'}>{children}</RTL>
    ),
    ({ children }: ChildrenProps) => <ThemeProvider theme={theme(currentLanguage)}>{children}</ThemeProvider>,
  ];

  return (
    <>
      {/* Render the main application with suspense fallback */}
      <Suspense fallback={<Loader open={true} handleClose={() => { }} />}>
        <AppContext components={providers}>
          {/* Apply global CSS baseline */}
          <CssBaseline />
        </AppContext>
      </Suspense>
    </>
  );
}

export default App;
