import styled from "styled-components";
export const SDivMenu = styled.div`
  position: relative;
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

export const SDivCooperativeItem = styled.div`
  display: flex;
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  padding-top:15px;
  padding-bottom:15px;  
  img{
    width: 64px;
    height: 64px;
    top: 0px;
    left: 0px;
    margin-right:15px;
  }
  h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.0025em;
    color: #000000;
    margin-bottom:-5px;
    }
  span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 136.69%;
    letter-spacing: 0.01em;
    color: #000000;
    
  }
`;
export const SDivBadges = styled.div`
margin-top:10px;
display:inline-block;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 10pt !important;
line-height: 136.69%;
text-align: center;
letter-spacing: 0.01em;
color: #9E8117 !important;
background: #FFEFB5;
border-radius: 5px;
padding:3pt 20pt;
`;
export const SDivInformation = styled.div`
  display:flex;
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:10px;
  line-height: 1em;
  h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;    
    color: #E8703A;
    margin-bottom:-1px;
    }
  span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;       
    color: #000000;
    line-height: 136.69%;
    }
`;

export const SDivColLeft= styled.div`
   flex: 1 0;
   with:50%;
    `;
   export const SDivColRight= styled.div`
   flex: 1 0;
   with:50%;   
   `;

   export const SDivAnnouncementBtn = styled.div`
  display:flex;
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:10px;
  
`;
export const SDivAnnouncement = styled.div`
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:10px;
  line-height: 1em;
  h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;  
    letter-spacing: 0.0025em;
    color: #737373;
    margin-bottom:-1px;
    }
  span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px; 
    letter-spacing: 0.01em;
    color: #000000;
    }
    div{
      padding-top:10px;
      padding-bottom:10px;
      margin-right: 0;
      margin-left:0;
    }
    &.invisible{
      display:none !important;
    }
`;

export const SDivGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100% !important;
  margin-bottom:10px;
  margin-top:30px;
`;

export const SDivOption = styled.div` 
  width: 109px !important;
  height: 96px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  margin:10px 5px;
  img{
    margin-top:15px !important;
    border:0;
  }
  span{
    display:block;
    margin-top:10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.0025em;
    color: #000000;
  }
`;

export const SDivBtnHome= styled.div`
  display:flex;
  width:100% !important;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:20px;
  text-align: center;
  justify-content: center;
  div{     
    width:70%;
  }
`;