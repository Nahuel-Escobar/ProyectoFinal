import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import styles from "../assets/styles/login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth, storage, db } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // actualizar el perfil del usuario
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            // store user data in firestore database

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setLoading(false)
      toast.success("Cuenta creada con exito")
      navigate("/login")
    } catch (error) {
      setLoading(false)
      toast.error("Revise los datos ingresados");
    }
  };

  return (
    <Helmet title="Register">
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg="12" className="text-center mt-5">
                <h5 className="fw-bold mt-5">Loading...</h5> 
              </Col> :             <Col lg="6" className="m-auto text-center mt-5">
              <h3 className={`${styles.clase} fw-bold fs-4`}>Registro</h3>
              <Form className={`${styles.auth__form}`} onSubmit={signUp}>
                <FormGroup className={`${styles.form__group}`}>
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input
                    type="email"
                    placeholder="Ingresa tu Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className={`${styles.form__group}`}>
                  <input
                    type="file"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button
                  type="submit"
                  className={`${styles.buy__btn} ${styles.auth__btn}`}
                >
                  Registrarse
                </button>
                <p>
                  ¿estas registrado?{" "}
                  <Link to={"/login"}>¡Logueate y empieza a comprar!</Link>
                </p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default SignUp;
