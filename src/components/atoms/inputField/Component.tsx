import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const InputField = ():JSX.Element => {
    const style={
        'background': '#F3F1F1',
        'width': 1240,
        'maxWidth': '100%',
        'borderRadius': 200,
        'padding': '8px 24px'

    }

    return(
        <>  
            <Box >
                <TextField sx={style}  fullWidth id="fullWidth" placeholder="Placeholder" variant='standard' InputProps={{ disableUnderline: true }}/>
            </Box>
        </>
    );
}