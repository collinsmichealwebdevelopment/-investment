import { btcdashboard, robotbtc } from "@/assets";
import Featured from "@/components/Featured";
import SparkLine from "@/components/SparkLine";
import Stacked from "@/components/Stacked";
import { Button } from "@/components/ui/button";
import { SparklineAreaData, earningData } from "@/dummydata/dummy";
import styles, { layout } from "@/style";
import { GoDotFill } from "react-icons/go"

const Home = () => {
  return (
    <div className="sticky top-0 z-50 w-full  overflow-scroll custom-scrollbar">
      <div className="mt-1">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="border border-blue-900 bg-dark-2 dark:text-gray-200 dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
            <p className="font-bold text-slate-400 text-3xl" >
              Your Earnings
            </p>
            <div>
              <p className="text-3xl text-slate-100">$6,980,000.00</p>
            </div>
            </div>
            </div>
          </div>
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {earningData.map((items) => (
          <div
          key={items.title}
          className="border border-blue-900  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4
          pt-9 rounded-xl">
            <button type="button"
            style={{ color: items.iconColor,
            backgroundColor: items.iconBg}}
            className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">{items.icon}</button>
            <p className="mt-3">
              <span className="text-lg font-semibold">
                {items.amount}
              </span>
              <span className={`text-sm text-${items.pcColor} ml-2`}>
                {items.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-1">{items.title}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="flex gap-10 flex-wrap  justify-center">
        <div className=" dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">
              Revenue Updates
            </p>
            <div className="flex items-center gap-4 "
            ><p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
              <span className="text-red"><GoDotFill /></span>
              <span>Expense</span>
            </p>
            <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
              <span><GoDotFill /></span>
              <span>Budget</span>
            </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="boder-r-1 border-blue-950 m-4 pr-10 ">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,436</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-600 ml-3"
                  >23%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,436</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5 ">
                <SparkLine
                currentColor="blue"
                id="line-sparkline"
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color="blue"
                />
              </div>
              <div className="mt-10">
                <Button>Reports</Button>
              </div>
            </div>
            <div>
              <Stacked
              width="320px"
              height="360px"/>
            </div>
          </div>
        </div>
      </div>

      <section id="product" className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} ml-2`}>
        <img src={robotbtc} alt="cypto"
        className="w-[100%] h-[100%] relative z-[5] " />
      </div>

      <div className={`${layout.sectionInfo} ml-2`}>
        <h2 className={styles.heading2}>
          Will bitcoin <br className="sm:block hidden"/> Rule the world?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Bitcoin has been growing fast ever since it was
         invented. Bitcoin was the first cryptocurrency created and is now the most valuable and well known. 
         It was first launched in January 2009 by a computer programmer or group of programmers under the
          pseudonym Satoshi Nakamoto, whose actual identity has never been verified.</p>
      </div>
      </section>

      <section className={layout.section}>
      <div className={`${layout.sectionInfo} ml-2`}>
        <p className={styles.heading2}>Why Should <br className="sm:block hidden"/>
        I Invest In Bitcoin?
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>A lot of people who did not invest in bitcoin years back,
        have a lot of regrets now!
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img src={btcdashboard} alt="btc" className="w-[100%] h-[100%]"/>
      </div>

    </section>
    
  <Featured/>
    </div>
  );
}

export default Home;
