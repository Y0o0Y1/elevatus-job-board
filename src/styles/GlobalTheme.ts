import { createTheme } from '@mui/material/styles';

export const theme = (language: string) => createTheme({
    direction: language === 'ar' ? 'rtl' : 'ltr',
    typography: {
        fontFamily: "SFMono-Regular,Menlo,Monaco,Consolas ,'Liberation Mono'"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
              ::-webkit-scrollbar {
                width: 10px; 
              }
      
              ::-webkit-scrollbar-track {
                background: #f0f0f0; 
              }
      
              ::-webkit-scrollbar-thumb {
                background: #808080;
                border-radius: 5px; 
              }
            `,
        },

        MuiTypography: {
            variants: [
                {
                    props: { variant: "caption" },
                    style: {
                        fontWeight: 500,
                        fontSize: "16px",
                    },
                },
                {
                    props: { variant: "subtitle1" },
                    style: {
                        fontWeight: 600,
                        fontSize: "16px",

                    },
                }
            ]
        },
        MuiCard: {
            styleOverrides: {
                root: () => {
                    return {
                        borderRadius: "12px",
                        padding: "20px"
                    }
                }
            }
        },
    }
})

export default theme