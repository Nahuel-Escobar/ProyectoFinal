import styles from "../../assets/styles/productCard.module.scss";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlices";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }));

    toast.success('Producto Agregado al carrito')
  };

  return (
    <Col lg="3" md="4" className={`${styles.clase} mb-2`}>
      <div className={styles.product__item}>
        <div className={styles.product__img}>
          <motion.img
            whileHover={{ scale: 1.07 }}
            src={item.imgUrl}
            alt="Productos"
          />
        </div>
        <div className={`${styles.product__info} p-2`}>
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className={`${styles.product__card__bottom} ${styles.price} d-flex align-items-center justify-content-between p-2`}>
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.05 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
