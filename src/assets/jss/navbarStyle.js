/* eslint-disable object-shorthand */

const navbarStyle = (theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    fontWeight: '600',
    margin: theme.spacing(1, 1.5),
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default navbarStyle;
