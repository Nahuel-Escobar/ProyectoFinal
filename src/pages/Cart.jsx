import { Col, Container, Row } from "reactstrap";
import styles from "../assets/styles/cart.module.scss";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlices";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="carrito">
      <CommonSection title="Carrito de compra" />

      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2
                  className={`${styles.claseDefault} fs-3 align-items-center text-center mt-5`}
                >
                  No hay productos en el carrito 🤨
                </h2>
              ) : (
                <table
                  className={`${styles.clase} text-center table bordered mt-5`}
                >
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Titulo</th>
                      <th>Precio c/u</th>
                      <th>Cantidad</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div className={`${styles.claseDefault} mt-5`}>
                <h6>Subtotal</h6>
                <span>${totalAmount}</span>
              </div>
              <p className="text-center mt-3">
                Los impuestos y el costo del envio se sumaran al continuar con
                la compra
              </p>
              <div className={`${styles.btn}`}>
                <Link to={"/shop"} className={`${styles.text__btn}`}>
                  <button className={`${styles.buy__btn}`}>
                    Seguir comprando
                  </button>
                </Link>
                <Link to={"/checkout"} className={`${styles.text__btn}`}>
                  <button className={`${styles.buy__btn}`}>
                    Finalizar la compra
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imageUrl} alt={`producto ${item.id}`} width={60} />
      </td>
      <td>
        <Link to={`/shop/${item.id}`} className={`${styles.link}`}>
          {item.productName}
        </Link>
      </td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          className="ri-delete-bin-line"
          onClick={deleteProduct}
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
