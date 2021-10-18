import styled from "styled-components";

export const SDivLogo = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 50pt;
  img{
    margin:auto;
    height: auto;
    width: 45%;
    margin: 0;
    border: 0;
  }
`;

export const SDivLoading = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 80pt;
  img{
    margin:auto;
    height: auto;
    width: 56pt;
    margin: 0;
    border: 0;
  }
`;


export const SDivLB01 = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 60pt;
  font-family: Roboto;
  font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: 0.0125em;

color: #4E555F;
`;
export const SDivLB02 = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 30pt;
  padding-left:10pt;
  padding-right:10pt;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 153.69%;
  text-align: center;
  letter-spacing: 0.0125em;
  color: #959595;
`;
export const FooterBox = styled.div`
  position: fixed;
  display:flex;
  z-index: 1000;
  bottom: 0;
  left: 0px !important;
  right: 0px !important;
  padding-bottom:10px;
  padding-right:15px;
  vertical-align:bottom !important;
`;

export const SDivRight = styled.div`
  float:right;
  text-align:right !important;
  i{
    font-size:40px;
    color:#F48C06;
    vertical-align:middle !important;
    cursor:pointer;
  }
`;