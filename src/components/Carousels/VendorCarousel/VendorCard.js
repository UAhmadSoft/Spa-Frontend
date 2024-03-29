import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import spa1 from 'assets/spa1.svg';
import StarIcon from '@material-ui/icons/Star';
import { useNavigate } from 'react-router-dom';

const styles = makeStyles((theme) => ({
  vendorCard: {
    borderRadius: 8,
    '& .MuiCardActionArea-root': {
      height: '100%',
    },
    '& .MuiCardContent-root': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      rowGap: 15,
      '& svg': {
        color: theme.palette.warning.main,
      },
      '& span': {
        paddingTop: 2,
      },
      '& .MuiTypography-h5': {
        fontWeight: 500,
      },
      '& .MuiTypography-subtitle2': {
        fontWeight: 500,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      },
    },
  },
  avatar: {
    backgroundColor: 'transparent',
    '&.MuiAvatar-root': {
      width: 50,
      height: 50,
    },
  },
}));

const VendorCard = ({ fullName, bannerImages, rating, _id, history, info }) => {
  const classes = styles();
  const navigate = useNavigate();

  const vendorDetails = () => {
    navigate(`/vendors/${_id}/all`);
  };

  return (
    <Card className={classes.vendorCard}>
      <CardActionArea onClick={vendorDetails}>
        <CardContent>
          <Box
            display='flex'
            justifyContent='space-between'
            sx={{ columnGap: 15 }}
          >
            <Avatar variant='square' className={classes.avatar}>
              <img src={bannerImages[0]} height='100%' alt='' />
            </Avatar>
            {rating && (
              <Box display='flex' alignItems='center' sx={{ columnGap: 5 }}>
                <StarIcon />
                <Typography variant='subtitle1' component='span'>
                  {rating}
                </Typography>
              </Box>
            )}
          </Box>
          <Box>
            <Typography variant='h5'>{fullName}</Typography>
            <Typography
              variant='subtitle2'
              color='textSecondary'
              className={classes.titleWrap}
            >
              {info}
            </Typography>
          </Box>
          {/* <div className='overlay'>
            <Button variant='contained' color='primary'></Button>
          </div> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VendorCard;
