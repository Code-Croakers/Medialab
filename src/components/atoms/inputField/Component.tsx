import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const InputField = ():JSX.Element => {
    const style={
        'background': '#F3F1F1',
        // '&:hover' : {
        //     'background': '#E2E2E2'
        // },
        'width': 500,
        'maxWidth': '100%',
        'borderradius': 200,

    }

    return(
        <>  
            <Box sx={style}>
                <TextField fullWidth id="fullWidth" />
            </Box>
        </>
    );
}