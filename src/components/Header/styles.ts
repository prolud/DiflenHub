import styled from "styled-components";
import { sidePaddings, themes } from "../../styles/themes";

export const HeaderComponent = styled.header`
  ${sidePaddings}

  display: flex;
  justify-content: space-between;

  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  background-color: ${themes.default.neutro_6};
  font-family: "Archivo Black";
  font-size: 3rem;
`;

export const Logo = styled.div`

`;

export const AccountSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-radius: 16px;
  height: 100%;
  transition: all .1s; 
`;

export const EntrarButton = styled(BaseButton)`
  border: solid ${themes.default.neutro_2} 2px;
  background-color: transparent;
  color: ${themes.default.neutro_0};
  
  &:hover {
    border: solid ${themes.default.neutro_0} 2px;
  }
  `;

export const RegistrarButton = styled(BaseButton)`
  color: ${themes.default.neutro_10};
  border: solid ${themes.default.neutro_0} 2px;
  &:hover {
    color: ${themes.default.neutro_0};
    background-color: transparent;
  }
`;