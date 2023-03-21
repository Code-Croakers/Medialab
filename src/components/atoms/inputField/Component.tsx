import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const InputField = ():JSX.Element => {
    const style={
        'background': '#F5C326',
        '&:hover' : {
            'background': '#EBB60C'
        },
        'width': 500,
        'maxWidth': '100%'

    }

    return(
        <>  
            <Box sx={style}>
                <TextField fullWidth id="fullWidth" />
            </Box>
        </>
    );
}