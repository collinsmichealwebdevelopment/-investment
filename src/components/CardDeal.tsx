import { cryptoimage1 } from "../assets";
import styles, { layout } from "../style";
import LoginButton from "./LoginButton";


const CardDeal = () => 
   (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Introducing strong<br className="sm:block hidden"/>
        Account security
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Great! account protection against hackers
        and criminal activities. Protection and secured business flow</p>
      <LoginButton styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={cryptoimage1} alt="cryptoimage" className="w-[100%] h-[100%]"/>
      </div>

    </section>
  );


export default CardDeal;
