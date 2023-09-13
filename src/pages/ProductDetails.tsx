import { useAppDispatch } from '../hooks/redux';
import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductSlider, { ImagesSlide } from '../components/ProductSlider/ProductSlider';
import { Breadcrumbs, Button, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import { AddShoppingCart, CalendarToday, Favorite, Share } from '@mui/icons-material';
import { addProductToCart } from '../store/reducers/cart.slice';
import { Image, Product } from '@commercetools/platform-sdk';
import styles from './ProductDetails.module.scss';
import { dateConverter } from '../utils/dateConverter';
import { Link } from 'react-router-dom';
import { getProductByKey } from '../api/requests';
import { setProduct } from '../store/reducers/products.slice';
import RenderPrice from '../components/RenderPrice/RenderPrice';

const ProductDetails: FC = () => {
  const { id: key } = useParams();
  const dispatch = useAppDispatch();
  const [productRender, setProductRender] = useState<Product>();

  const getCurrentProduct = useCallback(async () => {
    if (!key) return;
    const responce = await getProductByKey(key);
    setProductRender(responce);
    dispatch(setProduct(responce));
  }, [dispatch, key]);

  useEffect(() => {
    getCurrentProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = (product: Product) => {
    dispatch(addProductToCart(product));
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
                <Button
                  size="small"
                  variant="outlined"
                  endIcon={<AddShoppingCart />}
                  onClick={() => addToCart(productRender!)}
                >
                  Add to cart
                </Button>
                <IconButton aria-label="Add to Favorites">
                  <Favorite />
                </IconButton>
                <IconButton aria-label="Share">
                  <Share />
                </IconButton>
              </div>
              <Divider />
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
