import styled from "styled-components";


export const Card = styled.div<{ $bgImg: string }>`
  background-image: url(${props => props.$bgImg});
  background-position: center;
  background-size: cover;

  height: 12rem;
  min-width: 18rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;


  border-radius: 16px;
  cursor: pointer;
  
  justify-content: flex-end;
  
  transition: width .15s;
  
  background-position: center;
  background-size: cover;
  
  position: relative;
`;

export const CardTitle = styled.strong`
  font-weight: 600;
  font-size: 1.5rem;
  position: absolute;
  padding: 1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;

  &:hover {
    padding-bottom: 2rem;
  }

  transition: all .15s;
`;

export const CardGradient = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;