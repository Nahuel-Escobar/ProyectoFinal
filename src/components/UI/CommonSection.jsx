import { Container } from "reactstrap"
import styles from "../../assets/styles/commonSection.module.scss"

function CommonSection( {title}) {
  return <section className={`${styles.common__section}`}>
    <Container className={`${styles.clase} text-center`}>
      <h1>
        {title}
      </h1>
    </Container>
  </section>
}

export default CommonSection