import styles from "./header.module.scss";

import { motion } from "framer-motion"
import { Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux"

import Logo from "../../assets/img/eco-logo.png";
import userIcon from "../../assets/img/user-icon.png";

const nav__links = [
  {
    path: "home",
    display: "Home"
  },
  {
    path: "shop",
    display: "Shop"
  },
  {
    path: "cart",
    display: "Cart"
  },

]

function Header() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity) 

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
                {
                  nav__links.map((item, index) => (
                    <li className={styles.nav__item} key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}> 
                      {item.display}
                    </NavLink>
                  </li>
                  ))
                }

              </ul>
            </div>
            <div className={styles.nav__icons}>
              <span className={styles.fav__icons}>
                <i>
                  <AiOutlineHeart />
                </i>
                <span className={styles.badge}>
                  1
                </span>
              </span>
              <span className={styles.cart__icon}>
                <NavLink to="cart" className={styles.nav__cart}>
                  <i>
                    <BsCart />
                  </i>
                  <span className={styles.badge}>
                  {totalQuantity}
                </span>
                </NavLink>
              </span>
              <span>
                <motion.img whileTap={{scale:1.2}}src={userIcon} alt="userIcon" />
              </span>
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
