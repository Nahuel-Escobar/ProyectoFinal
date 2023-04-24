import styles from "../assets/styles/productDetail.module.scss";
import "remixicon/fonts/remixicon.css";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch} from "react-redux"
import { cartActions } from "../redux/slices/cartSlices"
import { toast } from "react-toastify"

const ProductDetail = () => {
  const [tab, setTab] = useState("");

  const dispatch = useDispatch()

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,
    }))

    toast.success("Producto agregado al carrito")
  }

  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <section className={`${styles.clase} pt-0`}>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="Producto" width={"100%"} />
            </Col>
            <Col lg="6">
              <div className={`${styles.product__details} mt-5`}>
                <h2>{productName}</h2>
                <div className={`${styles.product__raiting} d-flex gap-5 mt-4`}>
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <span className={`${styles.product__price}`}>${price}</span>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className={`${styles.buy__btn}`}
                  onClick={addToCart}
                >
                  Agregar al carrito
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className={`${styles.tab__wrapper} d-flex align-items-center gap-5`}>
                <h6
                  className={`${tab === "desc" ? "active__tab" : " "}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : " "}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className={`${styles.tab__content} mt-4`}>
                  <p className="mt-3">{description}</p>
                </div>
              ) : (
                <div className={`${styles.product__review}`}> 
                  <div className={`${styles.review__wrapper}`}>
                    <ul>
                      {
                        reviews?.map((item, index) => (
                          <li key={index} className="mt-4 pt-3">
                            <h6>Jhon Doe</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetail;
