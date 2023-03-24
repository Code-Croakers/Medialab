import { Button, Fab } from '@mui/material'

interface Props {
    children?: string
}

export const PrimaryBtn = (props: Props): JSX.Element => {
    const style = {
        'background': '#F5C326',
        'color': '#FFFFFF',
        '&:hover': {
            'background': '#EBB60C'
        }
    }

    const startNewSession = (): void => {
        window.location.reload()
        console.log('reload page')
    }

    return (
        <>
            <Button
                sx={style}
                variant='contained'
                onClick={() => startNewSession()}
            >
                {props.children}
            </Button>
        </>
    )
}