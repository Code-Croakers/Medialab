import Box from '@mui/material/Box';
import { Backdrop, Button, Fab } from '@mui/material'
import { PrimaryBtn } from '../../atoms/primaryBtn/Component';
import { useEffect, useState } from 'react';

export const ConfirmationModal = (): JSX.Element => {
    let target: HTMLElement | null

    useEffect(() => {
        target = window.document.querySelector('#newSessionModal')
    }, []);

    const style = {
        'width': '300px',
        'height': 'fit-content',
        'background': '#F3F1F1',
        'margin': 'auto',
        'borderRadius': '10px',
        'position': 'absolute',
        'padding': '16px',
        '@media(min-width: 976px)': {
            'width': '411px',
            'height': 'fit-content',
        }
    }

    const styleCancelBtn = {
        'background': '#D0D0D0',
        'color': '#FFFFFF',
        '&:hover': {
            'background': '#E2E2E2'
        }
    }

    const styleBtnWrapper = {
        'display': 'flex',
        'flexFlow': 'column nowrap',
        'gap': '16px',
        'padding': '6px 8px 8px 8px',
        '@media(min-width: 976px)': {
            'justifyContent': 'space-between',
            'margin': 'auto',
            'padding': '8px 24px 16px 24px'
        }

    }

    const closeModal = (): void => {
        if (target !== null && target !== undefined) {
            target.classList.remove('displayBlock')
            target.classList.add('displayNone')
        }
    }

    return (
        <>
            <Backdrop open sx={{ zIndex: 5000 }}>
                <Box sx={style}>
                    <h2>Let op!</h2>
                    <p>U staat op het punt om een nieuwe sessie te starten! Hiermee wordt uw huidige sessie verwijderd.</p>
                    <p> Wilt u hiermee doorgaan?</p>
                    <div style={styleBtnWrapper}>
                        <PrimaryBtn children='Start nieuwe sessie' />
                        <Button
                            sx={styleCancelBtn}
                            variant='contained'
                            onClick={() => closeModal()}
                        >
                            Annuleren
                        </Button>
                    </div>

                </Box>
            </Backdrop>
        </>
    )
}