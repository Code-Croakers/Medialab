import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const InputField = ():JSX.Element => {
    const style={
        'background': '#F3F1F1',
        'width': '100%',
        'height': 'content-fit',
        'borderRadius': '24px',
        'padding': '8px 24px',
    }

    return(
        <>  

                <TextField sx={style} multiline maxRows="5" fullWidth id="fullWidth" placeholder="Typ een bericht" variant='standard' InputProps={{ disableUnderline: true }}/>

        </>
    );
}