import styled from "styled-components";
import { themes, sidePaddings } from "../../../styles/themes/themes";

export const HomePage = styled.main`
  ${sidePaddings}
  padding-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${themes.default.neutro_9};
`;

export const Slider = styled.ul`  
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: .5rem 0;
`;

export const VerTodos = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${themes.default.neutro_0};
  border: 2px solid ${themes.default.neutro_0};
  border-radius: 16px;
  color: ${themes.default.neutro_10};
  padding: .5rem;
  width: 10rem;
  cursor: pointer;

  &:hover {
    background-color: transparent;  
    color: ${themes.default.neutro_0};
  }

  transition: all .15s;
`;