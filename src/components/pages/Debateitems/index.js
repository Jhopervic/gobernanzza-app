import React,{useState} from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivDebates,
        SDivBadges,       
        SDivColLeft,
        SDivColRight,
        SDivRowBtn,
        SDivDiscussionList,
        SDivDiscussionItem,
        Stars,
        SDivBtnView,
        FooterBox,
        SDivLeft,
        SDivRight
} from "./customstyled"
import { SBtnPrimarySm,SBtnDangerSm } from "components/styled-components/components";
import Menu from "components/layout/Menu";
import { useHistory } from "react-router-dom";
import { reverseURL } from "components/app/Router/utils";
import { MainContainer,WorkArea } from "components/styled-components/components";
import {Col} from 'react-bootstrap'

function DebateItems(props) {
  const [discussion, setDiscussion] = useState(true);
  const history = useHistory();
  const onClickBtn = (value) => {
     if (value==='Abiertos'){
      setDiscussion(true)
    }
    else{
      setDiscussion(false)
    }
    };
    const onClickBtnView = (value) => {
      if (value===1){
          history.push(reverseURL({ name: "opentopics" }));
      }
    };
  return (
    <>
      <BaseLayout>
        <Menu title="Debates" />
        <SDivDebates>
              <h3>{(discussion===true?"Debates propuestos":"Temas de debate")}</h3>
              <span>A continuación puedes ver los debates abiertos y cerrados de Ferramar S.C.</span>             
        </SDivDebates>
        <SDivRowBtn>
                     <SDivColLeft>
                          <SBtnPrimarySm onClick={() => {onClickBtn('Abiertos')}} className={(discussion===true?"":"inactive")}>
                             <span>ABIERTOS</span> 
                          </SBtnPrimarySm>
                     </SDivColLeft>
                     <SDivColRight>
                          <SBtnPrimarySm onClick={() => {onClickBtn('Finalizados')}} className={(discussion===true?"inactive":"")}>
                             <span>FINALIZADOS</span> 
                          </SBtnPrimarySm>
                     </SDivColRight>
      </SDivRowBtn>

      <SDivDiscussionList className={(discussion===true?"":"invisible")}>
            <SDivDiscussionItem>
              <SDivBadges green>20 días</SDivBadges>
              <h3>Nombre de cooperativa</h3>
              <span>@nombre_usuario  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={3}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(1)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
            <SDivDiscussionItem>
              <SDivBadges yellow>05 días</SDivBadges>
              <h3>Decidir domicilio social</h3>
              <span>@nombre_usuario  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={4}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
        </SDivDiscussionList>
        <SDivDiscussionList className={(discussion===true?"invisible":"")}>
            <SDivDiscussionItem>
              <SDivBadges >Finalizado</SDivBadges>
              <h3>Decidir domicilio social</h3>
              <span>@nombre_usuario  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={4}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
            <SDivDiscussionItem>
              <SDivBadges >Finalizado</SDivBadges>
              <h3>Nombre de cooperativa</h3>
              <span>@nombre_usuario  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={2}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
            <SDivDiscussionItem>
              <SDivBadges >Finalizado</SDivBadges>
              <h3>Elegir proveedor de transporte</h3>
              <span>@nombre_usuario  <br/>
                  Creado el 14/05/2021
              </span>
              <Stars score={4}/>
              <SDivBtnView>
                    <SBtnDangerSm onClick={() => {onClickBtnView(0)}}>
                                  <span>ver debate</span> 
                    </SBtnDangerSm>
              </SDivBtnView>             
            </SDivDiscussionItem>
            
        </SDivDiscussionList>
        <FooterBox >
            <MainContainer>
              <WorkArea > 
                    <Col xs={12} sm={12} md={7} lg={6} xl={5} >
                      <SDivLeft>
                        <i className="icon-arrow"></i>
                      </SDivLeft>
                      <SDivRight>
                        {discussion===true &&
                            <div><span>PROPONER DEBATE</span><i className="icon-add"/></div>
                        }
                        <i className={(discussion===true?" icon-minus icon-special":"icon-add")}></i>
                      </SDivRight>
                    </Col>
                </WorkArea>
            </MainContainer>
        </FooterBox>
      </BaseLayout>
    </>
  );
}
export default DebateItems;