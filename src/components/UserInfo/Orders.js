import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
// import { Skeleton } from '@material-ui/lab';
import { getMuiDateFormat } from 'utils/constants';
import { orders } from 'data';
import Chip from 'components/common/CustChipLabel';
import globalStyles from 'styles/commonStyles';
import styles from './styles';
import { globalMyOrdersSelectors } from 'store/slices/orders';
import { myOrders } from 'store/slices/orders/extraReducers';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@material-ui/lab';

const Orders = () => {
  const classes_g = globalStyles();
  const classes = styles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filteredOrders, setFilteredOrders] = useState([]);

  const { loading, orders } = useSelector((state) => ({
    loading: state.orders.loading,
    orders: globalMyOrdersSelectors.selectAll(state),
  }));

  useEffect(() => {
    if (loading) {
      dispatch(myOrders());
    }
  }, [dispatch]);

  useEffect(() => {
    setFilteredOrders(
      orders.filter((order) => order.status !== 'completed')
    );
  }, [orders]);

  // const showOrderDetails = (e) => {
  //   const { orderid } = e.currentTarget.dataset;
  //   navigate(`/customer/orders/${orderid}`);
  // };

  return (
    <Box style={{ minHeight: 745 }}>
      <Box mb={2}>
        <Typography variant='h5' className={classes_g.fontWeight600}>
          Orders
        </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeadRow}>
              <TableCell style={{ minWidth: 160 }}>Order #</TableCell>
              <TableCell align='right'>Type</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center' style={{ minWidth: 140 }}>
                Date Purchased
              </TableCell>
              <TableCell align='right'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? Array(10)
                  .fill()
                  .map((_, idx) => (
                    <TableRow>
                      {Array(5)
                        .fill()
                        .map(() => (
                          <TableCell>
                            <Skeleton />
                          </TableCell>
                        ))}
                    </TableRow>
                  ))
              : /*
              filteredAuctions
                  .slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  ) */
                filteredOrders.map((order, ind) => {
                  return (
                    <TableRow
                      hover
                      key={order._id}
                      className={classes.tableBodyRow}
                      // onClick={showOrderDetails}
                      // data-orderid={order._id}
                    >
                      <TableCell>
                        <Typography variant='subtitle2'>
                          {order._id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant='subtitle2'>
                          {order.serviceDate ? 'Service' : 'Product'}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align='center'
                        className={classes.chipCell}
                      >
                        {/* <Chip size='small' label={order.status} color='primary' /> */}
                        <Chip color='warning'>{order.status}</Chip>
                      </TableCell>

                      <TableCell align='center'>
                        <Typography variant='body2'>
                          {getMuiDateFormat(order.createdAt)}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='body2'>
                          ${order.total}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
