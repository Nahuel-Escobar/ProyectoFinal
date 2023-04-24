import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import styles from "../assets/styles/shop.module.scss";
import products from "../assets/data/products";
import { useState } from "react";
import ProductsList from "../components/UI/ProductList";

function Shop() {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    } else if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    } else if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    } else if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    } else if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = e => {
    const searchItem = e.target.value

    const searchedProducts = products.filter(item=> item.productName.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()))

    setProductsData(searchedProducts)
  }
  return (
    <Helmet title="Tienda">
      <CommonSection title="Productos" />
      <section>
        <Container>
          <Row className="m-5">
            <Col lg="3" md="3">
              <div className={`${styles.filter__widget}`}>
                <select onChange={handleFilter}>
                  <option selected="true" disabled>
                    Filtrar por categorias
                  </option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Celular</option>
                  <option value="chair">Sillas</option>
                  <option value="watch">Relojes</option>
                  <option value="wireless">Auriculares</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className={`${styles.filter__widget}`}>
                <select>
                  <option selected="true" disabled>
                    Filtrar por
                  </option>
                  <option value="ascending">Mayor</option>
                  <option value="descending">Menor</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={`${styles.search__box}`}>
                <input type="text" placeholder="Buscar....." onChange={handleSearch}/>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No hay productos encontrados</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Shop;
