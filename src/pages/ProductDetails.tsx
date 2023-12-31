import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductSlider, { ImagesSlide } from '../components/ProductSlider/ProductSlider';
import { Breadcrumbs, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { AddShoppingCart, CalendarToday } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Image, Product } from '@commercetools/platform-sdk';
import styles from './ProductDetails.module.scss';
import { dateConverter } from '../utils/dateConverter';
import { Link } from 'react-router-dom';
import { decrementLineItem, getProductByKey, incrementLineItem } from '../api/requests';
import { setError, setProduct } from '../store/reducers/products.slice';
import RenderPrice from '../components/RenderPrice/RenderPrice';
import { createStoreCart } from '../store/reducers/commerceCart.slice';

const ProductDetails: FC = () => {
  const { id: key } = useParams();

  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.storeCart.cart);

  const [productRender, setProductRender] = useState<Product>();

  const getCurrentProduct = useCallback(async () => {
    if (!key) return;
    try {
      const responce = await getProductByKey(key);
      setProductRender(responce);
      dispatch(setProduct(responce));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  }, [dispatch, key]);

  useEffect(() => {
    getCurrentProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = async (product: Product) => {
    if (!product.key) return;
    try {
      const response = await incrementLineItem(cart.id, cart.version, product.id, 1);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };

  const getSlides = (imagesArr: Image[]): ImagesSlide[] => {
    return imagesArr.map((item: Image, index: number) => {
      return {
        id: index.toString(),
        img: item!.url || '',
        title: item!.label || '',
      };
    });
  };

  const deleteItem = async (product: Product) => {
    const lineItem = cart.lineItems.find((item) => item.productId === product.id);
    if (!lineItem?.id) return;
    try {
      const response = await decrementLineItem(cart.id, cart.version, lineItem?.id, lineItem?.quantity);
      dispatch(createStoreCart(response.body));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };

  if (productRender) {
    return (
      <div>
        <Grid container padding={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Typography color="text.primary">
              {productRender!.masterData.staged.name['en-US'].slice(0, 22).concat('...')}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Paper className={styles.root}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} padding={2}>
              {productRender!.masterData.staged.masterVariant?.images && (
                <ProductSlider slides={getSlides(productRender!.masterData.staged.masterVariant?.images)} />
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} padding={2} className={styles.productInfo}>
              <Typography variant="h4" gutterBottom>
                {productRender!.masterData.staged.name['en-US']}
              </Typography>
              <Typography variant="body2" color="textSecondary" className={styles.data}>
                {<CalendarToday />} {dateConverter(productRender!.createdAt)}
              </Typography>
              {productRender!.masterData.staged.description &&
                productRender!.masterData.staged.description['en-US'].split('\n').filter((elem) => elem !== '') &&
                productRender!.masterData.staged.description &&
                productRender!.masterData.staged.description['en-US']
                  .split('\n')
                  .filter((elem) => elem !== '')
                  .map((item, index) => (
                    <Typography key={index} variant="body1" gutterBottom>
                      {item}
                    </Typography>
                  ))}
              <Typography variant="h5" gutterBottom>
                <RenderPrice
                  price={productRender!.masterData?.staged?.masterVariant?.prices?.[0]?.value?.centAmount ?? 0}
                  discount={
                    productRender!.masterData?.staged?.masterVariant?.prices?.[0]?.discounted?.value?.centAmount ?? 0
                  }
                />
              </Typography>
              <div className={styles.buttons}>
                <Stack direction="row" spacing={2}>
                  <Button
                    size="small"
                    variant="outlined"
                    endIcon={<AddShoppingCart />}
                    onClick={() => addToCart(productRender!)}
                  >
                    Add to cart
                  </Button>
                  {Array.isArray(cart.lineItems) &&
                    cart.lineItems.findIndex((item) => item.productId === productRender.id) !== -1 && (
                      <Button
                        size="small"
                        variant="outlined"
                        color="warning"
                        endIcon={<DeleteIcon />}
                        onClick={() => deleteItem(productRender!)}
                      >
                        Remove
                      </Button>
                    )}
                </Stack>

                {/* <IconButton aria-label="Add to Favorites">
                  <Favorite />
                </IconButton>
                <IconButton aria-label="Share">
                  <Share />
                </IconButton> */}
              </div>
              <Divider sx={{ mt: 2 }} />
              <Typography variant="body2" color="textSecondary" className={styles.productInfo}>
                Additional information about the product can be displayed here.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
};

export default ProductDetails;
