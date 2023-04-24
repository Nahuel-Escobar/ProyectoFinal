import styles from "./footer.module.scss";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={`${styles.footer}`}>
      <Container>
        <Row>
          <Col lg="4">
            <div className={styles.logo}>
              <div>
                <h4 className={`text-white`}>NahuMarket</h4>
              </div>
              <p className={`${styles.footer__text} mt-4`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo distinctio veritatis accusamus magni saepe, libero
                corrupti minima at, velit mollitia molestias dolorum quod rerum
                ea delectus? Dolorem minima ex laboriosam!
              </p>
            </div>
          </Col>
          <Col lg="3">
            <div className={`${styles.footer__quick__links}`}>
              <h4 className={`${styles.quick__links__title}`}>
                Top Categories
              </h4>
              <ListGroup className={`${styles.clase} mb-3`}>
                <ListGroupItem className={`${styles.clase} ps-0 border-0`}>
                  <Link to={"#"}>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className={`${styles.clase} ps-0 border-0`}>
                  <Link to={"#"}>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className={`${styles.clase} ps-0 border-0`}>
                  <Link to={"#"}>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className={`${styles.clase} ps-0 border-0`}>
                  <Link to={"#"}>Smart Wacthes</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className={`${styles.footer__quick__links}`}>
              <h4 className={`${styles.quick__links__title}`}>Links Usuales</h4>
              <ListGroup className={`${styles.clase} mb-3`}>
                <ListGroupItem className={`${styles.clase} ps-0 border-0`}>
                  <Link to={"/shop"}>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className={`${styles.clase} ps-0 border-0`}>
                  <Link to={"/cart"}>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className={`${styles.clase} ps-0 border-0`}>
                  <Link to={"/login"}>Login</Link>
                </ListGroupItem>
                <ListGroupItem className={`${styles.clase} ps-0 border-0`}>
                  <Link to={"#"}>Politica de privacidad</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className={`${styles.footer__quick__links}`}>
              <h4 className={`${styles.quick__links__title}`}>Contact</h4>
              <ListGroup className={`${styles.footer__contact} mb-3`}>
                <ListGroupItem className={`${styles.clase} ps-0 border-0 d-flex align-items-center gap-2`}>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123, calle falsa.</p>
                </ListGroupItem>
                <ListGroupItem className={`${styles.clase} ps-0 border-0 d-flex align-items-center gap-2`}>
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+123 1234-5678</p>
                </ListGroupItem>
                <ListGroupItem className={`${styles.clase} ps-0 border-0 d-flex align-items-center gap-2`}>
                <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>ejemplodeemail2@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className={`${styles.footer__copyright} text-center`}>
              ©Copyriht {year} developed by Esteban Nahuel Escobar. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
