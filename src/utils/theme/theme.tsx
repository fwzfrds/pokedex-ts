import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple, red } from '@mui/material/colors';

const base = createTheme({
    palette: {
        primary: {
            main: '#77A7C1',
        },
        text: {
            primary: '#000',
            secondary: 'gray'
        },
        secondary: {
            main: purple[500],
        },
        error: {
            main: red[400]
        },
        success: {
            main: green[500]
        },
        common: {
            white: '#FFF'
        }
    },
});

const theme = responsiveFontSizes(base)

export default theme