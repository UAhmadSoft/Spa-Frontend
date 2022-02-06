import { makeStyles } from '@material-ui/core';
const bgImg =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const styles = makeStyles((theme) => ({
  linkHover: {
    '& a::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 1,
      background: theme.custom.white,
      transition: 'width .5s',
    },

    '& a:hover::after, a.active::after': {
      width: '100%',
    },
  },

  linkUnderline: {
    '& a': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },

  textWithlink: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      verticalAlign: 'unset',
      color: theme.palette.text.secondary,
      textDecoration: 'underline',

      '&:hover': {
        color: theme.palette.primary.main,
        transition: 'color 0.5s ease-out',
      },
    },
  },

  lightPinkInputField: {
    display: 'flex',
    alignItems: 'start',
    backgroundColor: `${theme.palette.secondary.main}1f`,
    color: theme.palette.primary.main,
    columnGap: '1em',
    padding: '0.5em 1em',
    borderRadius: 12,
    '& .MuiInputBase-root': {
      flex: 2,
      '&:before': {
        display: 'none',
      },
      '&.MuiInput-underline:after': {
        transform: 'scaleX(0)',
      },
    },
  },

  sectionFlex: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1em',
  },

  componentSectionGap: {
    '& > div:first-child': {
      marginTop: '1.5em',
    },

    '& > *': {
      marginBottom: '1.5em',
    },
  },

  sectionGap: {
    marginBottom: '2em',
    // paddingInline: '1em',
  },
  sectHorAlignment: {
    width: '80%',
    margin: '0 auto',

    // [theme.breakpoints.down('xs')]: {
    //   width: '90%',
    // },
  },
  subHeading: {
    maxWidth: 500,
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '55%',
    },
  },

  //  ^  Service Promo Carousel Styles
  Carousel: {
    '& img': {
      height: 180,
      objectFit: 'cover',
    },

    '& .carousel .slide .legend': {
      opacity: 1,
      top: 0,
      background: 'transparent',
      bottom: 0,
      textAlign: 'left',
      paddingBlock: 10,

      '& .MuiTypography-body2': {
        lineHeight: '1.4',
      },

      [theme.breakpoints.up('md')]: {
        maxWidth: 600,
        paddingInline: '6rem',
      },

      [theme.breakpoints.down('md')]: {
        maxWidth: 600,
        paddingInline: '6rem',
      },
      [theme.breakpoints.down('sm')]: {
        // maxWidth: 700,
        width: '50%',
        paddingInline: '1rem',
      },

      [theme.breakpoints.down('xs')]: {
        width: '90%',
        paddingInline: '1rem',
      },

      '& p': {
        fontWeight: 300,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
      },
    },

    '& .carousel .slide': {
      '& .carouselMini': {
        '&  .legend': {
          paddingBlock: 12,
          // '& > div': {
          //   justifyContent: 'unset',
          // },
          '& p': {
            WebkitLineClamp: 3,
          },
        },
        '& img': {
          height: 176,
        },
      },
      '& .rndCornCarsl .legend': {
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        overflow: 'hidden',
      },
    },
  },

  // '& .carousel .slide .carouselMini': {},
  contentContainer: {
    // width: '60%',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'baseline',

    '& h5': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
    '& .MuiBox-root': {
      '& div:last-child::before': {
        marginTop: 'auto',
      },
    },

    '& a': {
      color: '#fff',
      textDecoration: 'underline',
      fontSize: '1rem',
      cursor: 'pointer',
      '&:hover': {
        color: '#00d',
      },
    },
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `#0000007d`,
  },

  // ^ Vendors Carousel
  carouselDefaults: {
    width: '80%',
    margin: 'auto',
  },

  carouselItem: {
    display: 'block',
    padding: 10,
    height: '100%',
    '& .MuiPaper-root': {
      boxShadow: theme.custom.cardShadow,
      height: '100%',
    },
  },
  sectionLink: {
    textAlign: 'center',
    fontWeight: 500,
    '& a': {
      color: theme.palette.primary.main,
      fontSize: '1.1rem',
    },
  },
  secBackImage: {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      height: 520,
    },

    // [theme.breakpoints.down('sm')]: {},
  },

  // ^ Table Card Styles
  //not used
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1em',
    // flexWrap: 'nowrap',
    marginBottom: '2rem',
    columnGap: '2em',

    '& .MuiCard-root': {
      marginBottom: 0,
      minWidth: 200,
    },
  },
  //not used
  tableCardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: '1em',
    rowGap: '1em',
    '& .productCard': {
      minWidth: 200,
    },
  },

  gridContainer: {
    display: 'grid',
    gridGap: 15,
  },

  gridContainerFill: {
    marginBlock: '1em',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    // [theme.breakpoints.up('md')]: {
    //   gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    // },
  },

  // not used
  gridContainerFit: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },

  gridElement: {
    padding: 10,
    minWidth: 220,
  },
  tablePagination: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '1em',
    },
    '& > :first-child': {
      paddingInline: '1em',
      fontWeight: 500,
    },

    '& .MuiPagination-root': {
      width: 'fit-content',
      // '& .MuiPagination-ul button:not(.Mui-selected)':
      //   {
      //     backgroundColor: '#000',
      //   },
    },
  },
}));

export default styles;

// For line trimming after certan characters
// overflow: 'hidden',
// display: '-webkit-box',
// WebkitLineClamp: 2,
// WebkitBoxOrient: 'vertical',
