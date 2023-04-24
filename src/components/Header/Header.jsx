import styles  from "./header.module.scss";

import { motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";

import Logo from "../../assets/img/eco-logo.png";
import userIcon from "../../assets/img/user-icon.png";
import { useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

function Header() {

  const navigate = useNavigate()

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { currentUser } = useAuth();
  const logout = ()=>{
    signOut(auth).then(()=>{
      toast.success("Cerraste la sesión con exito")
      navigate("/home")
    }).catch(error => {
      toast.error(error.message)
    })
  }

  return (
    <header className={`${styles.sticky__header} `}>
      <Container>
        <Row>
          <div className={styles.nav__wrapper}>
            <div className={styles.logo}>
              <div>
                <img src={Logo} alt="logo" />
              </div>
              <div>
                <Link to={"/"}>
                  <h1>NahuMarket</h1>
                </Link>
              </div>
            </div>
            <div className={styles.navigation}>
              <ul className={styles.menu}>
                {nav__links.map((item, index) => (
                  <li className={styles.nav__item} key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.nav__icons}>
              <span className={styles.fav__icons}>
                <i>
                  <AiOutlineHeart />
                </i>
                <span className={styles.badge}>1</span>
              </span>
              <span className={styles.cart__icon}>
                <NavLink to="cart" className={styles.nav__cart}>
                  <i>
                    <BsCart />
                  </i>
                  <span className={styles.badge}>{totalQuantity}</span>
                </NavLink>
              </span>
              <div className={`${styles.profile}`}>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="userIcon"
                  className={`${styles.icon__img}`}
                />
                <div
                  className={`${styles.profile__actions}`}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div>
                      <Link to="/signup"> Signup </Link>
                      <Link to="/login"> Login </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.mobile__menu}>
              <i>
                <AiOutlineMenu />
              </i>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
