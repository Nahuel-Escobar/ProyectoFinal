import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import styles from "../assets/styles/login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {

  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")

  return (
    <Helmet title="login">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center mt-5">
              <h3 className={`${styles.clase} fw-bold fs-4`}>Login</h3>
              <Form className={`${styles.auth__form}`}>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="email" placeholder="Ingresa tu Email" value={email} onChange={e=> setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input type="password" placeholder="Ingresa tu contraseña" value={password} onChange={e=> setPassword(e.target.value)}/>
                </FormGroup>
                <button type="submit" className={`${styles.buy__btn} ${styles.auth__btn}`}>
                  Login
                </button>
                <p>
                  ¿No estas registrado?{" "}
                  <Link to={"/signup"}>Resistrate y crea una cuenta</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
