import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivHome} from "./customstyled"
function Home(props) {
  

  return (
    <>
      <BaseLayout>
        <SDivHome>
          <img
              src={require("components/assets/img/gobernanzza_log.svg").default}
              alt="Gobernanzza"
            />
        </SDivHome>
      </BaseLayout>
    </>
  );
}
export default Home;
