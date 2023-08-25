import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/reducers/user.slice';
import { Avatar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import style from './PrimaryAppBar.module.scss';
import { clear } from '../../store/reducers/address.slice';

interface IActive {
  isActive: boolean;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: 'shop' },
  { title: 'About', path: 'about' },
];

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const user = useAppSelector((state) => state.user.customer);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const cartTotal = useAppSelector((state) => state.cart.total);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const setActive = ({ isActive }: IActive) => (isActive ? style.active : style.link);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleOpenProfile = () => {
    handleMenuClose();
    navigate('/profile');
  };

  const handleLogout = () => {
    handleMenuClose();
    dispatch(logout());
    dispatch(clear());
    navigate('/');
  };

  const handleLogin = () => {
    handleMenuClose();
    navigate('/login');
  };

  const handleRegister = () => {
    handleMenuClose();
    navigate('/register');
  };

  const handleOpenCart = () => {
    handleMenuClose();
    navigate('/cart');
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAuth ? (
        <div>
          <MenuItem onClick={handleOpenProfile}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleLogin}>Login</MenuItem>
          <MenuItem onClick={handleRegister}>Register</MenuItem>
        </div>
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleOpenCart}>
        <IconButton size="medium" color="inherit">
          <Badge badgeContent={cartTotal} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        {/* <p>Cart</p> */}
        <Typography textAlign="center">Cart</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="medium" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>User</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#282828' }}>
        <Container maxWidth="xl">
          <Toolbar style={{ margin: 0, padding: 0 }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Link to={page.path}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link to="/">
              <Typography
                data-testid="logo"
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                FINEART
              </Typography>
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page.title} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                  <NavLink data-testid={`link-${page.title}`} to={page.path} className={setActive}>
                    {page.title}
                  </NavLink>
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show cart" color="inherit" onClick={handleOpenCart}>
                <Badge badgeContent={cartTotal} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              {isAuth ? (
                <IconButton size="large" edge="end" onClick={handleProfileMenuOpen} color="inherit">
                  <Avatar sx={{ bgcolor: '#298377' }}>{user.firstName && user.firstName.charAt(0)}</Avatar>
                </IconButton>
              ) : (
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to="login">Login</Link>
                  </Button>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to="register">Register</Link>
                  </Button>
                </Box>
              )}
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
