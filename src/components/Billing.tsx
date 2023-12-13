import { apple, cryptoimage2, google } from "../assets";
import styles, { layout } from "../style";


const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={cryptoimage2} alt="cypto"
        className="w-[100%] h-[100%] relative z-[5] " />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full
        white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full
        pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Why choose <br className="sm:block hidden"/> Ogadi's Investment?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>By offering secured user data,
         being highly credible, and leveraging big data insights, Ogadi's investment provides clients 
         with a compelling reason to choose us for their investment needs.</p>
         <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="apple_store"
          className="w-[128px] h-[42px] object-contain  cursor-pointer"/>
         </div>
      </div>
    </section>
  );
}

export default Billing;
