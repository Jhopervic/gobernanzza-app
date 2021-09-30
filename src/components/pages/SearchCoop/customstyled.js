import styled from "styled-components";

export const SDivMenu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width:100% !important;
  height:50px;
  background: #E8703A;
  font-family: Roboto;
  color: #FFFFFF;
  vertical-align: middle;
  padding-left:15pt;
  padding-right:15pt;
  padding-top:8pt;
  span{
        font-style: normal;
        font-weight: bold;
        font-size: 20px;        
        letter-spacing: 0.01em;
        vertical-align: middle;
  }
  nav{
    margin: 0;
    padding: 0;
    margin-top: 0;
    list-style: none;
    float: right!important;
  }
  ul{
    position: relative;
    white-space: nowrap;
    float: right;
  }
  ul > li{
    padding:0px 8px;
    position: relative;
    white-space: nowrap;
    display:inline-block;
  }
  ul > li > a{
   color:#fff !important;
   font-size:20px;
  }
  ul > li > a:hover{
    text-decoration: none !important;
    font-weight:  !important;;
   }
`;

export const SDivLB01 = styled.div`
  display: flex;
  width:100% !important;
  text-align: center;
  margin-top: 45pt;
  padding-left:15px;
  padding-right:15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: 0.0025em;
  color: #000000;
`;

export const SDivLB02 = styled.div`
  display: flex;
  width:100% !important;
  margin-top: 10pt;
  padding-left:15px;
  padding-right:15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 136.69%;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const SDivLB03 = styled.div`
  display: flex;
  width:100% !important;
  margin-top: 60pt;
  padding-left:20px;
  padding-right:20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.005em;
  color: #B0B0B0;
`;
export const SDivSearch = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 20pt;
  padding-left:15px;
  padding-right:15px;
`;
export const SDivImg = styled.div`
  display: flex;
  justify-content: center;
  width:100% !important;
  text-align: center;
  margin-top: 50pt;
  img{
    margin:auto;
    height: auto;
    width: 90%;
    margin: 0;
    border: 0;
  }
`;
