import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivLogo,SDivLB01,SDivMainTopic,SDivOptionsRow,SDivSubTopicContainer,SDivSubTopic,SDivBtn} from "./customstyled"
import Menu from "components/layout/Menu";
import { SBtnGrey } from "components/styled-components/components";


function OpenTopics(props) {

  return (
    <>
      <BaseLayout>
        <Menu  title="Temas" />
    <SDivLogo>
        <img
            src={require("components/assets/img/topics.svg").default}
            alt="Gobernanzza"
          />
      </SDivLogo>
      <SDivLB01>Fecha de cierre para debate:<br/><b>27/05/2021</b></SDivLB01>
      <SDivMainTopic>
              <h3>Nombre de cooperativa</h3>
              <span>@nombre_usuario<br/>14/05/2021</span>
              <p>“He abierto este debate para que podamos exponer en común las ideas que tengáis sobre cual debería ser el nombre de nuestra cooperativa”</p>
              <SDivOptionsRow><i className="icon-like"/><span className="mr-15">25</span><i className="icon-unlike"/><span>09</span>
                  <div><span className={"view"}>(2) Ver respuestas</span><span className={"answer ml-15"}>Responder</span></div>
              </SDivOptionsRow>
      </SDivMainTopic>
      <SDivSubTopicContainer>
            <SDivSubTopic>
              <h3>Propongo “Montaner”</h3>
              <span>@nombre_usuario<br/>14/05/2021</span>
              <p>“Desde el inicio hemos estado bajo las instrucciones de Fernando Montaner, además es nuestro mejor escudero hasta que la cooperativa ande sola”</p>
              <SDivOptionsRow><i className="icon-like"/><span className="mr-15">25</span><i className="icon-unlike"/><span>09</span>
                  <div><span className={"view-disabled"}>Ver respuestas</span><span className={"answer ml-15"}>Responder</span></div>
              </SDivOptionsRow>
           </SDivSubTopic>
           <SDivSubTopic>
              <h3>Me gusta “Ferricol”</h3>
              <span>@nombre_usuario<br/>14/05/2021</span>
              <p>“He abierto este debate para que podamos exponer en común las ideas que tengáis sobre cual debería ser el nombre de nuestra cooperativa”</p>
              <SDivOptionsRow><i className="icon-like"/><span className="mr-15">25</span><i className="icon-unlike"/><span>09</span>
                  <div><span className={"view-disabled"}>Ver respuestas</span><span className={"answer ml-15"}>Responder</span></div>
              </SDivOptionsRow>
           </SDivSubTopic>
      </SDivSubTopicContainer>
      <SDivBtn>
              <SBtnGrey >
                           <span>Volver</span> </SBtnGrey>
      </SDivBtn>
      </BaseLayout>
    </>
  );
}
export default OpenTopics;