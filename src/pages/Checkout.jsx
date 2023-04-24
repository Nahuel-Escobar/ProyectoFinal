import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import styles from "../assets/styles/checkout.module.scss";

import {useSelector} from "react-redux"

function Checkout() {


  const totalQuantity = useSelector(state => state.cart.totalQuantity) 
  const totalAmount = useSelector(state => state.cart.totalAmount) 


  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      <section>
        <Container>
          <Row>
            <Col lg="8" className="mt-5">
              <h6 className="mb-4 fw-bold">Informacion de la factura</h6>
              <Form>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Ingrese su nombre" />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="email" placeholder="Ingrese su email" />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="number" placeholder="Su numero de celular" />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Ingrese su direccion" />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Ingrese su ciudad" />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Ingrese su codigo postal" />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="text" placeholder="Ingrese su pais" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className={`${styles.checkout__cart} mt-5`}>
                <h6>
                  Cantidad de productos: <span>{totalQuantity} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Envio: <br />
                    Envio gratis
                  </span>
                  $0 
                </h6>
                <h4>
                  Total: <span>${totalAmount}</span>
                </h4>
              <button className={`${styles.buy__btn} ${styles.auth__btn} w-100`}>
                Finalizar Compra
              </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;
