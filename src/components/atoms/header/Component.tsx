import AppBar from '@mui/material/AppBar';

export const Header = ():JSX.Element => {
    const styleHeader={
        'background': '#F5C326',
        'height': '64px',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'padding': '0 24px 0 24px',
        '@media(min-width : 976px)':{
            'alignItems': 'flex-start',
        }
    }

    const styleLogo={
        'height': '42px',
        'width':'72px'
    }

    return(
        <>
        <AppBar 
            position='static' 
            sx={styleHeader}
            elevation={0}
        > 
            <img src='/logoPrimary.png' style={styleLogo} alt='logo Virtuele Helden'/></AppBar>
        </>
    )
}