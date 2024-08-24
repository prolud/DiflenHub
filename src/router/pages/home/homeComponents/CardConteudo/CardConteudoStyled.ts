import styled from "styled-components";
import { themes } from "../../../../../styles/themes/themes";

export const Card = styled.div`
  height: 12rem;
  width: 18rem;

  background-color: ${themes.default.neutro_6};
  border-radius: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: ${themes.default.neutro_3};
  }
  
  &.loading {
    cursor: progress;
    
    @keyframes loadingBackground {
      0% {
        background-color: ${themes.default.neutro_6};
      }
      50% {
        background-color: ${themes.default.neutro_3};
      }
      100% {
        background-color: ${themes.default.neutro_6};
      }
    }
    
    animation: loadingBackground .8s infinite linear;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  
  transition: background-color .15s, width .15s;
`;