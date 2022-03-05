import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loading from 'components/common/Loading';
import UserInfo from 'components/UserInfo';
import OrderHistory from 'components/UserInfo/OrderHistory';
import Orders from 'components/UserInfo/Orders';

const CommonLayout = lazy(() => import('components/layouts/CommonLayout'));
const HomePage = lazy(() => import('components/Home'));
const VendorProdServ = lazy(() =>
  import('components/ProductsServices/VendorProdServ')
);
const AllProductsServices = lazy(() =>
  import('components/ProductsServices/AllProductsServices')
);
const Login = lazy(() => import('components/common/Form/Login'));
const SingleProdServ = lazy(() => import('components/SingleProdServ'));
const Join = lazy(() => import('components/common/Form/Join'));
const Cart = lazy(() => import('components/Checkout'));
const Profile = lazy(() => import('components/UserInfo/Profile'));
const OrderDetails = lazy(() => import('components/UserInfo/OrderDetails'));
const Wishlist = lazy(() => import('components/UserInfo/Wishlist'));
// const Reviews = lazy(() => import('components/UserInfo/Reviews'));

const Router = () => {
  const { authenticating } = useSelector((st) => st.auth);

  return (
    <Routes>
      {authenticating ? (
        <Route path='*' element={<Loading />} />
      ) : (
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <CommonLayout />
            </Suspense>
          }
        >
          {/* Common Routes / Public Routes */}
          <Route
            path='/'
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path='products&services/:type/:_id'
            element={
              <Suspense fallback={<Loading />}>
                <SingleProdServ />
              </Suspense>
            }
          />
          <Route
            path='products&services/:type'
            element={
              <Suspense fallback={<Loading />}>
                <AllProductsServices />
              </Suspense>
            }
          />

          <Route
            // path='products&services'
            path='vendors/:vendorId'
            element={
              <Suspense fallback={<Loading />}>
                <VendorProdServ />
              </Suspense>
            }
          />

          <Route
            path='cart'
            element={
              <Suspense fallback={<Loading />}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path='customer'
            element={
              <Suspense fallback={<Loading />}>
                <UserInfo />
              </Suspense>
            }
          >
            <Route
              path='profile'
              element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path='orders'
              element={
                <Suspense fallback={<Loading />}>
                  <Orders />
                </Suspense>
              }
            />

            <Route
              path='orders/:orderid'
              element={
                <Suspense fallback={<Loading />}>
                  <OrderDetails />
                </Suspense>
              }
            />
            <Route
              path='orderhistory'
              element={
                <Suspense fallback={<Loading />}>
                  <OrderHistory />
                </Suspense>
              }
            />
            <Route
              path='wishlist'
              element={
                <Suspense fallback={<Loading />}>
                  <Wishlist />
                </Suspense>
              }
            />
            {/* <Route
            path='reviews'
            element={
              <Suspense fallback={<Loading />}>
                <Account />
              </Suspense>
            }
          /> */}
          </Route>
          <Route
            path='join'
            element={
              <Suspense fallback={<Loading />}>
                <Join />
              </Suspense>
            }
          />

          <Route
            path='login'
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      )}
    </Routes>
  );
};

export default Router;
