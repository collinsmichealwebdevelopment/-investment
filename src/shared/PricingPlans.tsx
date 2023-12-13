import { princingPlans } from "../constants/pricingPlans";


const PricingPlans = () => {
  return (
    <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-12 lg:gap-8 py-4 px-4 sm:px-6 lg:px-8">
      {princingPlans.map((plan) => (
        <div key={plan.title} className="border border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative"
        >
          <h3 className="text-lg font-semibold text-slate-700 leading-5">{plan.title}</h3>
          {plan.mostPopular && 
          <p className="absolute top-0 bg-blue-900 -translate-y-1/2 rounded-full px-3 py-0.5 text-sm font-semibold 
          tracking-wide shadow-md">
            Most Popular</p>}
          <p className="mt-4 text-sm leading-6 text-slate-700">{plan.description}
          </p>
          <div className="mt-4 -mx-6 rounded-lg bg-slate-200 p-6">
            <p className="flex text-sm font-semibold text-slate-500 items-center">
              <span>{plan.currency}</span>
              <span className="ml-3 text-4xl text-slate-900">${plan.price}</span>
              <span className="ml-1.5">{plan.frequency}</span>
            </p>
          </div>

          <ul className="mt-6 space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="text-sm text-slate-700 leading-6 flex">
                <img
                src="/assets/images/tick-mark-icon.svg"
                className="h-5 w-5 shrink-0"/>

                <span className="ml-3">{feature}</span></li>
            ))}
          </ul>
          </div>
      ))}
    </div>
  );
}

export default PricingPlans;
