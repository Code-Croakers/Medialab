import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const InputField = ():JSX.Element => {
    const style={
        'background': '#F3F1F1',
        'width': 'calc(100% - 40px)',
        'height': 'content-fit',
        'borderRadius': '24px',
        'padding': '8px 24px',
    }

    return(
        <>  
            <TextField 
                sx={style} 
                multiline 
                maxRows="5" 
                id="inputField" 
                placeholder="Typ een bericht" 
                variant='standard' 
                InputProps={{ disableUnderline: true }}
            />
        </>
    );
}