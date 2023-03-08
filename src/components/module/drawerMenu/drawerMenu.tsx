import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export const DrawerMenu = () => {

  const navigate = useNavigate()

  const handleLogout = (): void => {

    swal({
      title: "Are you sure?",
      text: `Want to logout?`,
      icon: "warning",
      dangerMode: true
    }).then(async (isOkay: boolean) => {
      if (isOkay) {
        localStorage.removeItem('pokeAccessToken')
        localStorage.removeItem('pokeRefreshToken')
        localStorage.removeItem('dexUser')

        navigate('/login')
      }
    })


  }

  return (
    <Box
      sx={{
        width: 250,
        padding: 2,
        position: 'relative'
      }}
      role="presentation"
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="John" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              onClick={() => handleLogout()}
            >
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}