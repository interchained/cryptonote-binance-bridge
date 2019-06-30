const styles = theme => ({
  root: {
    minWidth: '100px',
    fontWeight: 700,
    border: `1px solid ${theme.palette.primary.main}`,
    transition: 'all 0.2s ease-in-out',
    padding: '0.8rem 2.5rem',
    letterSpacing: '0.03em',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    }
  },
  secondary: {
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    }
  }
});

export default styles;
