import styled from "styled-components";
import { themes } from "../../styles/themes";

export const Card = styled.div`
  height: 12rem;
  min-width: 18rem;

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
  
  transition: background-color .15s, width .15s;
`;