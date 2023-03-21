import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

export const PrimaryBtn = ():JSX.Element => {
    const style={
        'background': '#F5C326',
        '&:hover' : {
            'background': '#EBB60C'
        }
    }
    return(
        <>
        <Button sx={style} variant="contained">help</Button>
        </>
    )
}