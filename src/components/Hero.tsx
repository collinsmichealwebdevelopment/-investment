import styles from "../style";
import { discount,  world2 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => 
   (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
          src={discount} alt="discount"
          className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}
          ml-2`}>
            <span className="text-white">20%</span> Discount For {" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]
          text-white ss:leading-[100px]
          leading-[75px]">
            The Next <br className="sm:block hidden"/> {" "}
            <span className="text-gradient">
              Generation
            </span> {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px]
          text-white ss:leading-[100px]
          leading-[75px] w-full">
            Investment website
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Ogadi's investment is an investment 
        company that helps clients achieve their financial goals through strategic and profitable investment plans </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={world2} alt="world"
        className="w-[100%] h-[100%] relative z-[5]"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
      </div>
      

      
    </section>
  );


export default Hero;
