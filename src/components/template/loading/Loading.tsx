import React from 'react'
import Img from '../../base/img/Img'
import pokeball from '../../../assets/gif/pokeball-2.gif'
import styles from './loading.module.css'
import Grid from '@mui/material/Grid';

const Loading = () => {
    return (
        <Grid
            className={styles.loadingContainer}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Img
                src={pokeball}
                style={{
                    width: '100px',
                    height: '100px',
                    position: 'relative'
                }}
            />
        </Grid>
    )
}

export default Loading