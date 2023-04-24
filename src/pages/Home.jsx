import Helmet from "../components/Helmet/Helmet";
import styles from "../assets/styles/home.module.scss";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import { useEffect, useState } from "react";
import products from "../assets/data/products" 


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/img/hero-img.png";

function Home() {

  const [tredingProducts, setTredingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileSales, setMobileSales] = useState([])
  const [wirelessSales, setWirelessSales] = useState([])

  useEffect(() => {
    const filteredTredingProducts = products.filter (item => item.category === "chair")
    const filteredBestSalesProducts = products.filter (item => item.category === "sofa")
    const filteredMobileSales = products.filter (item => item.category === "mobile")
    const filteredWirelessSales = products.filter (item => item.category === "wireless")

    setTredingProducts(filteredTredingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileSales(filteredMobileSales)
    setWirelessSales(filteredWirelessSales)
  }, [])
  

  const year = new Date().getFullYear();
  return (
    <Helmet title="Inicio">
      <section className={styles.hero__section}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className={styles.hero__content}>
                <p className={styles.hero__subtitle}>
                  Productos de tendencia en {year}
                </p>
                <h2>Deja el interior de tu casa más minimalista</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum perferendis in animi dolores ea eius debitis,
                  repellendus ab tempora natus sed dolor fugit. Fuga libero amet
                  voluptas quod odio sint?
                </p>
                <Link to="/shop" className={styles.link__btn}>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className={styles.buy__btn}
                  >
                    ¡Compra ahora!
                  </motion.button>
                </Link>
              </div>
            </Col>
            <Col lg="6" md="6" className="d-flex align-items-center">
              <div className={styles.hero__img}>
                <img src={heroImg} alt="Banner" width={'100%'}/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>

      <section className={styles.treding__products}>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className={styles.section__title}>
                ¡Productos destacados 😶!  
              </h2>
            </Col>
            <ProductList data={tredingProducts}/>
          </Row>
        </Container>
      </section>

      <section className={`${styles.best__sales}`}>
        <Container>
        <Row>
            <Col lg='12' className="text-center">
              <h2 className={styles.section__title}>
                ¡Más Vendidos 😎!
              </h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      <section className={`${styles.mobile__sales}`}>
        <Container>
        <Row>
            <Col lg='12' className="text-center">
              <h2 className={styles.section__title}>
                ¡Celulares Imperdibles 😮!
              </h2>
            </Col>
            <ProductList data={mobileSales}/>
          </Row>
        </Container>
      </section>

      <section className={`${styles.desktop__sales}`}>
        <Container>
        <Row>
            <Col lg='12' className="text-center">
              <h2 className={styles.section__title}>
                ¿Acaso escuchas ese sonido 👀?
              </h2>
            </Col>
            <ProductList data={wirelessSales}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
