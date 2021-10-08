import React from "react";
import {Col} from 'react-bootstrap'
import {MainContainer,WorkArea} from "components/styled-components/components"

function BaseLayout(props) {  

  const { children } = props;
  return (
    <MainContainer>
    <WorkArea className="debug-border1"> 
     <Col xs={12} sm={12} md={7} lg={6} xl={5} className="debug-border2">
         {children}
     </Col>
   </WorkArea>
   </MainContainer>
  );
}

export default BaseLayout;
