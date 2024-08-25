import styled from "styled-components";
import { themes, sidePaddings } from "../../../styles/themes";

export const HomePage = styled.main`
  ${sidePaddings}
  padding-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${themes.default.neutro_9};

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  height: 100%;
`;

export const Categorias = styled.div`
  @media screen and (min-width: 1490px) {
    display: flex;
    justify-content: center;
  }
`;

export const CenterCategorias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Slider = styled.ul`  
  list-style: none;
  display: flex;
  overflow-x: auto;
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
  margin-left: auto;
  cursor: pointer;
  padding: .3rem;
  width: 10rem;

  &:hover {
    background-color: transparent;  
    color: ${themes.default.neutro_0};
  }


  transition: all .1s;
`;