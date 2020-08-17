import Head from "next/head";
import { motion, AnimateSharedLayout } from "framer-motion";
import Form from "../components/form";

import MoreInfo from "../components/moreinfo";

export default function Home(props) {
  const [tab, setCurrentTab] = React.useState(1);

  console.log(tab);
  return (
    <div className="container">
      <Head>
        <title>Loading component generator</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Loading component generator</h1>

        <ul>
          <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <motion.li onClick={() => setCurrentTab(1)}>
              Generator
              {tab === 1 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #fecf44 0%, #FCA967 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li onClick={() => setCurrentTab(2)}>
              Examples{" "}
              {tab === 2 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(270deg, #F87F84 0%, #FCA967 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li onClick={() => setCurrentTab(3)}>
              More info{" "}
              {tab === 3 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #F78282 0%, #F45B99 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
          </AnimateSharedLayout>
        </ul>
        {/*                                               */}
        {/* display components if certain state is active */}
        {/*                                               */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          {tab == 1 && <Form></Form>}
        </div>
      </main>
    </div>
  );
}
