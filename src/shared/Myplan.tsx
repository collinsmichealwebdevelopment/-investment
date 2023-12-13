import PricingPlans from "./PricingPlans";

const Myplan = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white overflow-scroll custom-scrollbar">
      <div className="mx-auto max-w-7xl px-4 pt-7 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-5xl sm:leading-tight sm:tracking-tight">
          My Plans
        </h2>
      </div>
      
      
    <PricingPlans />
    </div>
       
  );
}

export default Myplan;
