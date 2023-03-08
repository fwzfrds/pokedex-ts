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
import Drawer from '@mui/material/Drawer';
import { DrawerMenu } from '../drawerMenu/drawerMenu'

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Navbar() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            color: 'common.white',
                            fontWeight: 600
                        }}
                    >
                        PokeDex
                    </Typography>
                    <ButtonComp
                        onClick={toggleDrawer('right', true)}
                        styles={{
                            color: '#FFF'
                        }}
                    >
                        <MenuIcon
                        />
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

            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                <DrawerMenu />
            </Drawer>
        </Box>
    );
}