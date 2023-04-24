import styles from "../assets/styles/login.module.scss";
import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const userCredential = await signInWithEmailAndPassword(auth, email,password);
      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      toast.success("¡Iniciaste sesion con exito!");
      navigate("/checkout");

    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center mt-5">
                <h5 className="mt-5">Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center mt-5">
                <h3 className={`${styles.clase} fw-bold fs-4`}>Login</h3>
                <Form className={`${styles.auth__form}`} onSubmit={signIn}>
                  <FormGroup className={`${styles.form__group}`}>
                    <input
                      type="email"
                      placeholder="Ingresa tu Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className={`${styles.form__group}`}>
                    <input
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button
                    type="submit"
                    className={`${styles.buy__btn} ${styles.auth__btn}`}
                  >
                    Login
                  </button>
                  <p>
                    ¿No estas registrado?{" "}
                    <Link to={"/signup"}>Resistrate y crea una cuenta</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
