import styled from "styled-components";
import { sidePaddings, themes } from "../../styles/themes";

export const HeaderComponent = styled.header`
  ${sidePaddings}

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5rem;

  background-color: ${themes.default.neutro_6};
  font-family: "Archivo Black";
  font-size: 3rem;
`;

export const Logo = styled.div`

`;