
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import HeadphonesIcon from '@mui/icons-material/Headphones';
import Greeting from './Greeting';

const Header = () => {

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar disableGutters sx={{ paddingX: '20px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HeadphonesIcon sx={{ fontSize: 32, mr: 1, color: 'white' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Musix App
          </Typography>
        </Box>
        <Greeting sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'right', color: 'white' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// //import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// //import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import HeadphonesIcon from '@mui/icons-material/Headphones';
// import Greeting from './Greeting';

// const pages = [];
// //const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


 
// const Header=()=> {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//  // const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   // const handleOpenUserMenu = (event) => {
//   //   setAnchorElUser(event.currentTarget);
//   // };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   // const handleCloseUserMenu = () => {
//   //   setAnchorElUser(null);
//   // };

//   return (
//     <AppBar position="static" sx={{backgroundColor:'black'}}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <HeadphonesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none'
//             }}
//           >
//               Musix App
//           </Typography>
//           <Box sx={{ flexGrow: 1 }} />
//           <Greeting style={{ textAlign: 'right', padding: '10px' }}/>
//           {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton> */}
//             {/* <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu> */}
//           {/* </Box> */}
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//           MUSIX APP
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

         
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Header;


// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import HeadphonesIcon from '@mui/icons-material/Headphones';
// import Greeting from './Greeting';

// const Header = () => {
//   // const [anchorElNav, setAnchorElNav] = useState(null);

//   // const handleOpenNavMenu = (event) => {
//   //   setAnchorElNav(event.currentTarget);
//   // };

//   // const handleCloseNavMenu = () => {
//   //   setAnchorElNav(null);
//   // };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'black' }}>
//       <Toolbar disableGutters>
//         <HeadphonesIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
//         <Typography
//           variant="h6"
//           noWrap
//           component="a"
//           href="/"
//           sx={{
//             mr: 2,
//             fontFamily: 'monospace',
//             fontWeight: 700,
//             letterSpacing: '.3rem',
//             color: 'inherit',
//             textDecoration: 'none',
//           }}
//         >
//           Musix App
//          </Typography>
//         <Box sx={{ flexGrow: 1 }} />
//         <Greeting sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'right', padding: '30px' }} />
//         {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//               display: { xs: 'flex', md: 'none' },
//             }}
//           >
//             Musix App
//           </Typography> */}
//         {/* </Box> */}
//         {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//           {pages.map((page) => (
//             <Button
//               key={page}
//               onClick={handleCloseNavMenu}
//               sx={{ my: 2, color: 'white', display: 'block' }}
//             >
//               {page}
//             </Button>
//           ))}
//         </Box> */}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


