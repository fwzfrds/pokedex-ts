import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonComp from '../../base/button/button';
import { Grid, InputAdornment } from '@mui/material';
import Input from '../../base/input/input';
import SearchIcon from '@mui/icons-material/Search';
import css from './navbar.module.css'

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            color: 'text.secondary',
                            fontWeight: 600
                        }}
                    >
                        PokeDex
                    </Typography>
                    <ButtonComp
                        handleClick={() => console.log('test')}
                        styles={{
                            color: '#FFF'
                        }}
                    >
                        <MenuIcon />
                    </ButtonComp>
                </Toolbar>
                <Grid
                    className={css.searchContainer}
                >
                    <Input
                        className={css.searchInput}
                        placeholder='Search pokemon...'
                        handleChange={() => console.log('test')}
                        variant='outlined'
                        size='small'
                        inputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            input: {
                                color: 'text.primary'
                            }
                        }}
                    />
                </Grid>
            </AppBar>
        </Box>
    );
}