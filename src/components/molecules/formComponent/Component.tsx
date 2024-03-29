import { InputField } from '../../atoms/inputField/Component'
import { SubmitBtn } from '../../atoms/submitBtn/Component'
import Box from '@mui/material/Box';

export const FormComponent = (): JSX.Element => {
    const style = {
        'width': '100vw',
        'display': 'flex',
        'flexFlow': 'row nowrap',
        'justifyContent': 'center',
        'gap': '8px',
        'alignItems': 'center',
        'padding': '8px',
        'position': 'fixed',
        'bottom': 0,
        'background': 'white',
        '@media(min-width: 976px)': {
            'gap': '24px',
            'padding': '16px 24px',
        }

    }
    return (
        <>
            <Box sx={style}>
                <InputField />
                <SubmitBtn />
            </Box>
        </>
    )

}