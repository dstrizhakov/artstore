import { FC } from 'react';
import { useParams } from 'react-router';

const ProductDetails: FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details {id}</h2>
    </div>
  );
};

export default ProductDetails;
