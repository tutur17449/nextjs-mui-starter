import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import styles from '@assets/jss/navbarStyle';

const useStyles = makeStyles(styles, { name: 'MuiCustomNavbar' });

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Next.js MUI starter
        </Typography>
        <nav>
          <Link href="/">
            <MuiLink variant="button" color="textPrimary" className={classes.link}>
              Home
            </MuiLink>
          </Link>
          <Link href="/page1">
            <MuiLink variant="button" color="textPrimary" className={classes.link}>
              Page 1
            </MuiLink>
          </Link>
          <Link href="/page2">
            <MuiLink variant="button" color="textPrimary" className={classes.link}>
              Page 2
            </MuiLink>
          </Link>
        </nav>
        <Link href="/login">
          <MuiLink variant="button" color="primary" className={classes.link}>
            Login
          </MuiLink>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
