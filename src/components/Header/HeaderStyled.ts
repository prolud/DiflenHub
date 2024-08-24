import styled from "styled-components";
import { sidePaddings, themes } from "../../styles/themes/themes";

export const HeaderComponent = styled.header`
  ${sidePaddings}

  display: flex;
  align-items: center;
  justify-content: left;

  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  background-color: ${themes.default.neutro_6};
  font-family: "Archivo Black";
  font-size: 3rem;
`;