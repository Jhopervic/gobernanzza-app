import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivHome,FooterBox,SDivRight} from "./customstyled"
import { MainContainer,WorkArea } from "components/styled-components/components";
import {Col} from 'react-bootstrap';
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
function Home(props) {
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "signup" }));
 
  };

  return (
    <>
      <BaseLayout>
        <SDivHome>
          <img
              src={require("components/assets/img/gobernanzza_log.svg").default}
              alt="Gobernanzza"
            />
        </SDivHome>
        <FooterBox >
            <MainContainer>
              <WorkArea > 
                    <Col xs={12} sm={12} md={7} lg={6} xl={5} >
                      <SDivRight>
                        <i className="icon-next" onClick={onClickBtn}></i>
                      </SDivRight>
                    </Col>
                </WorkArea>
            </MainContainer>
        </FooterBox>
      </BaseLayout>
    </>
  );
}
export default Home;
