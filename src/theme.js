import { createTheme} from '@mui/system'
import Avatar from '@mui/material/Avatar';

export const themeOne = createTheme ({
    palette: {
        background: {
            base: '#FFFAA7'
        },
        text: {
            primary: '#333',
            secondary: '#7021FF'
        },
        action: {
            active: '#001E3C'
        },
        success: {
            dark: '#009688'
        },
    },
})

export const themeTwo = createTheme ({
    palette: {
        background: {
            base: '#FFA4A1'
        },
        text: {
            primary: '#333',
            secondary: '#21FF6E'
        },
        action: {
            active: '#001E3C'
        },
        success: {
            dark: '#009688'
        },
    },
})
