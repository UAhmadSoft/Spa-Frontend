import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  OutlinedInput,
} from '@material-ui/core';

import { useManyInputs, useToggleInput } from 'hooks';
import EditForm from './EditForm';

import globalStyles from 'styles/commonStyles';
import styles from 'styles/CartStyles';

import { dropDownNumbers } from 'data';
import { getMuiDateFormat } from 'utils/constants';

import CloseIcon from '@material-ui/icons/Close';
import PaymentIcon from '@material-ui/icons/CallToAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import clsx from 'clsx';

const shippingFields = [
  { label: 'Address', name: 'address', value: '', icon: <LocationOnIcon /> },
  {
    label: 'Phone Number',
    name: 'phoneNumber',
    value: '',
    icon: <PhoneIcon />,
  },
  {
    label: 'Email Address',
    name: 'emailAddress',
    value: '',
    icon: <EmailIcon />,
  },
];

const CartRep = ({
  validateStep,
  cart,
  removeItemFromCart,
  handleTxtChange,
  review,
  handleEdit,
  editField,
}) => {
  const classes_g = globalStyles();
  const classes = styles();
  const initialState = {
    guests: 1,
    quantity: 1,
  };

  console.log('cart', cart);

  const [state, handleChange, , , ,] = useManyInputs(initialState);

  const [isEditing, toggle] = useToggleInput(false);

  const toggleEditing = () => {
    toggle((st) => !st);
  };

  return (
    <>
      {/* // ^ Services  */}
      {cart.services && cart.services.length > 0 && (
        <TableContainer>
          <Table className={classes.tableWrapper}>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell />
                <TableCell>Service</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align='center' style={{ minWidth: 120 }}>
                  Date
                </TableCell>
                <TableCell align='center'>Guests</TableCell>
                <TableCell align='center'>Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.services.map((el) => (
                <TableRow key={el._id}>
                  <TableCell>
                    <IconButton onClick={removeItemFromCart}>
                      <CloseIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{el.title}</TableCell>
                  <TableCell>${el.price}</TableCell>
                  <TableCell align='center'>
                    {getMuiDateFormat(el.date)}
                  </TableCell>
                  <TableCell align='center'>
                    {review ? (
                      2
                    ) : (
                      <FormControl
                        variant='outlined'
                        margin='dense'
                        size='small'
                        fullWidth
                      >
                        <Select
                          name='guests'
                          value={state.guests}
                          onChange={handleChange}
                          displayEmpty
                        >
                          {dropDownNumbers.map((el) => (
                            <MenuItem value={el} key={el}>
                              {el}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    ${el.price * state.guests}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* // ^ Products in Cart  */}
      {cart.products && cart.products.length > 0 && (
        <TableContainer>
          <Table className={classes.tableWrapper}>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell />
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align='center'>Quantity</TableCell>
                <TableCell align='center'>Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map((el) => (
                <TableRow key={el._id}>
                  <TableCell>
                    <IconButton onClick={removeItemFromCart}>
                      <CloseIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{el.title}</TableCell>
                  <TableCell>${el.price}</TableCell>
                  <TableCell align='center'>
                    {review ? (
                      2
                    ) : (
                      <FormControl
                        variant='outlined'
                        margin='dense'
                        size='small'
                        fullWidth
                      >
                        <Select
                          name='quantity'
                          value={state.quantity}
                          onChange={handleChange}
                          displayEmpty
                        >
                          {dropDownNumbers.map((el) => (
                            <MenuItem value={el} key={el}>
                              {el}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    ${el.price * state.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Box mt={5}>
        <Grid container>
          <Grid item sm={6} />
          <Grid item xs={12} sm={6}>
            <div className={classes.cartTotalInfo}>
              <div className={classes_g.customGreyBack}>
                <Typography variant='h4' className={classes_g.fontWeight600}>
                  Cart Total
                </Typography>
              </div>

              {review ? (
                <>
                  {shippingFields?.map((el, index) =>
                    isEditing ? (
                      <EditForm
                        name={el.name}
                        toggleEditForm={toggle}
                        editField={editField}
                      />
                    ) : (
                      <div
                        className={clsx(classes.dispFlex, classes.listDivider)}
                      >
                        <Box display='flex' alignItems='center' gridGap={15}>
                          <Box className={classes.iconColor}>{el.icon}</Box>
                          {console.log('index', index)}
                          <Typography variant='subtitle2'>
                            {shippingFields[index].label}
                          </Typography>
                        </Box>
                        <Box>
                          <Button
                            color='primary'
                            style={{ boxShadow: 'none' }}
                            onClick={isEditing}
                          >
                            Edit
                          </Button>
                        </Box>
                      </div>
                    )
                  )}
                  <Box>
                    <Button
                      color='secondary'
                      variant='contained'
                      endIcon={<PaymentIcon />}
                      onClick={validateStep}
                    >
                      Proceed To Pay
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    display='flex'
                    gridGap={15}
                    px={2}
                    justifyContent='space-between'
                    alignItems='center'
                    className={classes.listDivider}
                  >
                    <Typography variant='h5'>Subtotal</Typography>
                    <Typography variant='h5' className={classes_g.lightText}>
                      ${cart.subtotal}
                    </Typography>
                  </Box>
                  <Box
                    mt={6}
                    display='flex'
                    gridGap={15}
                    px={2}
                    justifyContent='space-between'
                    alignItems='center'
                    className={classes_g.customGreyBack}
                  >
                    <Typography variant='h5'>Total</Typography>
                    <Typography variant='h5'>${cart.total}</Typography>
                  </Box>
                  <Box>
                    <Button
                      color='secondary'
                      variant='contained'
                      endIcon={<PaymentIcon />}
                      onClick={validateStep}
                    >
                      Proceed To Pay
                    </Button>
                  </Box>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CartRep;

// {
//   /* //^ Promo Code */
// }
// {
//   /* <Box display='flex' alignItems='center' gridGap='1em'>

//         <FormControl
//           variant='outlined'
//           size='small'
//           className={classes.customtextField}
//         >
//           <OutlinedInput
//             name='promoCode'
//             value={cart.promoCode}
//             onChange={handleTxtChange}
//             labelWidth={0}
//             placeholder='Enter Promotion Code'
//           />
//         </FormControl>
//         <Button color='primary' style={{ minWidth: 100 }}>
//           Apply
//         </Button>
//       </Box> */
// }