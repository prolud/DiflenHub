import styled from "styled-components";
import { themes } from "../../styles/themes";


export const CategoryCard = styled.div`
  @keyframes backgroundChanding {
    from {
      background-color: ${themes.default.neutro_6};
    }
    
    to {
      background-color: ${themes.default.neutro_3};
    }
  }
  
  height: 12rem;
  min-width: 18rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  
  justify-content: flex-end;
  
  transition: width .15s, opacity .3s;
  
  position: relative;
  strong {
    transition: all .15s;
  }
  
  &:not(.loading) {
    > * {
      opacity: 1;
    }
    
    &:hover {
      strong {
        padding-bottom: 2rem;
      }
    }
  }

  &.loading {
    > * {
      opacity: .2;
    }

    animation: backgroundChanding infinite .5s alternate-reverse;
    cursor: default;
  }
`;

export const CardTitle = styled.strong`
  font-weight: 600;
  font-size: 1.5rem;
  position: absolute;
  padding-bottom: 1rem;
  padding-left: 1rem;
`;