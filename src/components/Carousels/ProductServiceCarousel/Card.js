import React, { useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActionArea,
  Box,
  IconButton,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import Favorite from '@material-ui/icons/Favorite';
import UnFavorite from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SendIcon from '@material-ui/icons/Send';

import styles from './CardProp';
import useStyles from 'styles/commonStyles';

import prodImg from 'assets/prod3.jpg';
import { addToCart } from 'store/slices/cart';
import { handleFavourities } from 'store/slices/Auth/extraReducers';

const ProductCard = ({ item, wishlist = true }) => {
  const { user } = useSelector((st) => st.auth);
  const dispatch = useDispatch();
  const classes = styles();
  const classes_g = useStyles();

  const {
    isService,
    name,
    rating,
    id,
    price,
    numReviews,
    discountPrice,
    info,
    sale,
    showVendor,
    discount,
    vendor,
    images,
  } = item;

  console.log('wishlist', wishlist);

  const navigate = useNavigate();
  const location = useLocation();
  const { type } = useParams();

  const handleClick = () => {
    if (isService) navigate(`/services/${id}`);
    else navigate(`/products/${id}`);
    // navigate(`/products&services/${type}/${dummyId}`);
  };

  const handleBook = () => {
    navigate(`/services/${id}`);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const cartItem = {
      id,
      price: discountPrice,
      name,
      quantity: 1,
    };
    console.log('cartItem', cartItem);
    dispatch(addToCart({ product: item, quantity: 1 }));
  };

  const isFavourite = useMemo(() => {
    if (!user || !item) return false;
    let condition = false;
    if (isService) {
      condition = Boolean(
        user.serviceFavourites?.find((el) => el._id === item._id)
      );
    } else {
      condition = Boolean(
        user.productFavourites?.find((el) => el._id === item._id)
      );
    }

    return condition;
  }, [user, item]);

  const handleFavourite = () => {
    if (!user) navigate(`/login?redirect=${location.pathname}`);
    if (isFavourite)
      dispatch(
        handleFavourities({
          itemId: item._id,
          resource: isService ? 'services' : 'products',
          action: 'removeFromFavourites',
        })
      );
    else
      dispatch(
        handleFavourities({
          itemId: item._id,
          resource: isService ? 'services' : 'products',
          action: 'addToFavourites',
        })
      );
  };

  return (
    <Card className={classes.productCard}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={classes.cardMedia} image={images?.[0]?.url} />
      </CardActionArea>

      <CardContent>
        <div className={classes.dispFlex}>
          <Typography variant='body2' className={classes.title}>
            {name}
          </Typography>
        </div>
        <Box display='flex' flexDirection='column' gridGap={2}>
          <div className={classes.dispFlex}>
            <Rating value={rating} readOnly size='small' />
            <Typography variant='body2'>({numReviews})</Typography>
          </div>
          {!isService ? (
            sale ? (
              <div className={classes.dispFlex}>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  style={{ textDecoration: 'line-through' }}
                  className={classes_g.fontWeight600}
                >
                  S${Math.floor(price)}
                </Typography>
                <Typography
                  variant='subtitle2'
                  className={classes_g.fontWeight600}
                >
                  - S${price - discount}
                </Typography>
              </div>
            ) : (
              <Box display='flex' gridGap={10} alignItems='center'>
                <Typography
                  variant='subtitle1'
                  className={classes_g.fontWeight600}
                >
                  ${price}
                </Typography>
                <Typography variant='caption'>
                  {'  '} ({info})
                </Typography>
              </Box>
            )
          ) : sale ? (
            <>
              <Typography variant='caption'>{info}</Typography>
              <div className={classes.servPricePromo}>
                <Typography
                  variant='subtitle2'
                  className={classes_g.fontWeight600}
                >
                  From <span>${price}</span> - ${price - discount}
                </Typography>
              </div>
            </>
          ) : (
            <>
              <Typography variant='caption'>{info}</Typography>
              <Typography
                variant='subtitle2'
                className={classes_g.fontWeight600}
              >
                From ${price}
              </Typography>
            </>
          )}
          {showVendor && (
            <Typography variant='caption'>
              {isService ? 'Service from ' : 'Product from '} {vendor?.fullName}
            </Typography>
          )}
        </Box>

        <Box component='span' sx={{ textAlign: 'center', marginBlock: 5 }}>
          {!isService ? (
            <Button
              variant='contained'
              color='secondary'
              endIcon={<ShoppingCartIcon />}
              size='small'
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
          ) : (
            <Button
              color='primary'
              endIcon={<SendIcon />}
              size='small'
              onClick={handleBook}
              style={{ width: 130, padding: '3px 6px' }}
            >
              BOOK
            </Button>
          )}
        </Box>
        <IconButton className={classes.favourite} onClick={handleFavourite}>
          {isFavourite ? (
            <Favorite style={{ color: '#67000e' }} />
          ) : (
            <UnFavorite style={{ color: '#111' }} />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
