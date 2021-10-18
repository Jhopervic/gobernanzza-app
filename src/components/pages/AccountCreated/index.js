import React from "react";
import BaseLayout from "components/layout/BaseLayout"
import {SDivLogo,SDivLoading,SDivLB01,SDivLB02,FooterBox,SDivRight} from "./customstyled"
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
import { MainContainer,WorkArea } from "components/styled-components/components";
import {Col} from 'react-bootstrap';
function AccountCreated(props) {
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "homewithoutcoop" }));
 
  };

  return (
    <>
      <BaseLayout>
      <SDivLogo>
        <img
            src={require("components/assets/img/gobernanzza_log.svg").default}
            alt="VacunApp"
          />
      </SDivLogo>
      <SDivLoading>
        <img
            src={require("components/assets/img/loading.svg").default}
            alt="VacunApp"
          />
      </SDivLoading>
     
      <SDivLB01>Hemos enviado un correo al email anteriormente indicado</SDivLB01>
      <SDivLB02>Para continuar debes verificar tu cuenta de email, para ello hemos enviado un email a la dirección anterioromente indicada</SDivLB02>
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
export default AccountCreated;
