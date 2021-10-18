import styled from "styled-components";

export const SDivHome = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  height:98vh;
  img{
    margin:auto;
    height: auto;
    width: 70%;
    margin: 0;
    border: 0;
  }

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