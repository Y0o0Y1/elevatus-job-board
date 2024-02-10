import { CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import "./app.css"
import { RTL } from './components/rtl'
import i18n from './i18n/i18n'
import { store } from './redux/store'
import router from './routes'
import theme from './styles/GlobalTheme'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => {
    setCurrentLanguage(lng);
  });

  //todo provider context

  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <RTL direction={currentLanguage === "en" ? "ltr" : "rtl"}>
            <ThemeProvider theme={theme(currentLanguage)}>
              <CssBaseline />
              <RouterProvider router={router} />
            </ThemeProvider>
          </RTL>
        </I18nextProvider >
      </Provider>
    </>
  )
}

export default App
