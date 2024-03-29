import ThemeConfig from 'theme';
import Router from 'router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from 'store/slices/Auth/extraReducers';
import { fetchVendors } from 'store/slices/vendors';
import { topProducts, flashSales } from 'store/slices/products';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
    dispatch(fetchVendors());
    dispatch(topProducts());
    dispatch(flashSales());
  }, [dispatch]);

  return (
    <>
      <ThemeConfig>
        <Router />
      </ThemeConfig>
    </>
  );
};

export default App;
