import { Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Stats, Testimonials } from '../components';
import Featured from '../components/Featured';
import styles from '../style'

const Homepage = () => {
  return (
    <div className="bg-primary w-full overflow-scroll custom-scrollbar">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> 
          <Featured />   
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
        </div>
      </div>
    
    </div>
  );
}

export default Homepage;
