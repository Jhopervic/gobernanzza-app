import React from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivMenu,SDivCooperative,SDivParagraph,SDivAnnouncement,SDivBtn} from "./customstyled"
import {Col} from 'react-bootstrap'
import { SBtnPrimary } from "components/styled-components/components";
import { reverseURL } from "components/app/Router/utils";
import { useHistory } from "react-router-dom";
function SearchCoop3(props) {
  const history = useHistory();
  const onClickBtn = () => {
       history.push(reverseURL({ name: "jointocoop" }));
 
  };
   return (
    <>
      <BaseLayout>
        <SDivMenu><span>Buscar</span>
        <nav>
          <ul>
            <li><a href="/buscador-de-coop"><i className="icon-mail"></i></a></li>
            <li><a href="/buscador-de-coop"><i className="icon-scan"></i></a></li>
            <li><a href="/buscador-de-coop"><i className="icon-menu"></i></a></li>
          </ul>
        </nav>
    </SDivMenu>
   
      <SDivCooperative>
        <Col xs={8} sm={8} md={9} lg={9} xl={9}>
          <h3>Nombre Coop. S.C.</h3>
          </Col>
          <Col xs={4} sm={4} md={3} lg={3} xl={3}>
              <div className={"registerlabel"}>Registrada</div>
          </Col>   
      </SDivCooperative> 
      <SDivParagraph>
        <h3>Domicilio social</h3>
        <p>Carretera Madrid, 61, 37900, Santa Marta Tormes Salamanca, Salamanca</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>CIF</h3>
        <p>F37341120</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Objeto social</h3>
        <p>Construccion y reformas.</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Forma jurídica</h3>
        <p>Construccion y reformas.</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Actividad</h3>
        <p>Albañilería y pequeños trabajos de construcción en general</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Actividad CNAE</h3>
        <p>4399 - Otras actividades de construcción especializada n.c.o.p.</p>
      </SDivParagraph>
      <SDivParagraph>
        <h3>Grupo Sector</h3>
        <p>Construcción y actividades inmobiliarias</p>
      </SDivParagraph>
      <SDivAnnouncement>
        <div></div>
          <span>Próxima fecha del Órgano de Admisión: </span>
          <h3>23 de Julio, 2021</h3>           
        </SDivAnnouncement>
        <SDivBtn>
              <SBtnPrimary onClick={onClickBtn}>
                           <span>Unirme a esta cooperativa</span> </SBtnPrimary>
        </SDivBtn> 
      </BaseLayout>
    </>
  );
}
export default SearchCoop3;