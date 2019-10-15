
import React from "react";
import image1 from "./images/books.jpg";
import image2 from "./images/cooler.jpg";
import image3 from "./images/Logo.jpg";
import image4 from "./images/stationery.jpg";
import { GridList, GridListTile, ButtonBase, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       flexWrap: 'nowrap',
//       // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//       transform: 'translateZ(0)',
//     },
// }));
    const images = [
        {
          url: '/images/stationery.jpg',
          title: 'Books',
          width: '40%',
        },
        {
          url: '/images/books.jpg',
          title: 'Stationery',
          width: '30%',
        },
        {
          url: '/images/cooler.jpg',
          title: 'Others',
          width: '30%',
        },
        // {
        //     url: '/images/Logo.jpg',
        //     title: 'Logo',
        //     width: '30%',
        //   },
      ];
      
      const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            
          minWidth: 300,
          width: '100%',
            backgroundColor: theme.palette.background.paper,
          },
          gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
          },
        image: {
          position: 'relative',
          height: 200,
          [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
          },
          '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
              opacity: 0.15,
            },
            '& $imageMarked': {
              opacity: 0,
            },
            '& $imageTitle': {
              border: '4px solid currentColor',
            },
          },
        },
        focusVisible: {},
        imageButton: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.common.white,
        },
        imageSrc: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: theme.palette.common.black,
          opacity: 0.4,
          transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
          position: 'relative',
          padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageMarked: {
          height: 3,
          width: 18,
          backgroundColor: theme.palette.common.white,
          position: 'absolute',
          bottom: -2,
          left: 'calc(50% - 9px)',
          transition: theme.transitions.create('opacity'),
        },

    // title: {
    //   color: theme.palette.primary.light,
    // },
    // titleBar: {
    //   background:
    //     'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    // },
  }));
  export default function Buy() {
    const classes = useStyles();
      return(
        <div className={classes.root}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
  );
  }