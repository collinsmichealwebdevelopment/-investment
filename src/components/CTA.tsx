import styles from "../style";
import Button from "./Button";


const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY}
    ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px]
    box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph}`}>At Ogadi's investment, we leverage the power of big data analytics to gain
           valuable insights into market trends and investment opportunities.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 sm:mt-0 mt-10`}>
        <Button styles=""/>
      </div>
      
    </section>
  );
}

export default CTA;
