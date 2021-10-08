import React,{useState} from "react";
import BaseLayout from "components/layout/BaseLayout";
import {SDivMenu,SDivLB01,SDivLB02,DoNotData,SDivSearch,SDivCooperativeList} from "./customstyled"
import { SInputText } from "components/styled-components/components";
function SearchCoop(props) {
  const [search, setSearch] = useState(false);
  const handleChange = (event) => {
    if(event.target.value !== ''){
      setSearch(true)
    }
    else{
      setSearch(false)
    }
  }

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
   
      <SDivLB01>Buscar cooperativa</SDivLB01>
      <SDivLB02>Para buscar cooperativas dentro de Gobernanzza puedes hacer introduciendo el nombre, CIF, actividad o localidad de la cooperativa:</SDivLB02>      
      <SDivSearch>
              <SInputText
                type="text"
                placeholder="Buscar cooperativa"
                onChange={handleChange}                
              />
       </SDivSearch>
       {search===false ? 
      (<DoNotData />)
      :<SDivCooperativeList/>
      }
      </BaseLayout>
    </>
  );
}
export default SearchCoop;