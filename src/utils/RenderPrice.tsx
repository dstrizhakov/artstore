import { FC } from "react"
import styles from './RenderPrice.module.scss';

interface RenderPriceProps {
  price: number;
  discount: number;
}

const RenderPrice: FC<RenderPriceProps> = ({ price, discount }) => {


if (discount) {
  return(
    <div>
      <div className={styles.price}>${price/100}</div>
      <div className={styles.discount}>${discount/100} </div>
      Discount {Math.floor((price/discount)*100 - 100)}%
    </div>
  )
} else {
  return(
    <div>
      <span>${price/100}</span>
    </div>
  )
  
}
 

}

export default RenderPrice;