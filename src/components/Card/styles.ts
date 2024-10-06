import styled from "styled-components";


export const CategoryCard = styled.div`
  height: 12rem;
  min-width: 18rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 16px;
  cursor: pointer;
  
  justify-content: flex-end;
  
  transition: width .15s;
  
  position: relative;

  strong {
    transition: all .15s;
  }

  &:hover {
    strong {
      padding-bottom: 2rem;
    }
  }
`;

export const CardTitle = styled.strong`
  font-weight: 600;
  font-size: 1.5rem;
  position: absolute;
  padding-bottom: 1rem;
  padding-left: 1rem;
`;