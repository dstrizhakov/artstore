import { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { getProducts } from '../api/getProducts';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

export interface IArtwork {}
export interface IResponce {}

const Shop: FC = () => {
  const [products, setProducts] = useState([]);

  const get = async () => {
    try {
      const items = await getProducts();
      console.log(JSON.stringify(items));
      setProducts(items.results || []);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    get();
  }, []);

  // console.log(products.results);
  return (
    <div>
      <h1>Shop Page</h1>
      <div className="flex">
        {products &&
          products.map((product) => (
            <Card key={product.id} variant="outlined">
              <CardHeader title={product.masterData.current.name['en-US']} subheader={product.createdAt}></CardHeader>
              <CardMedia
                component="img"
                height="200"
                image={product.masterData.staged.masterVariant.images[0].url}
                alt={product.masterData.current.name['en-US']}
              />
              {product.masterData.current.name['en-US']}
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.masterData.current.description['en-US']}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Shop;
