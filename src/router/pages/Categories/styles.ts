import styled from "styled-components";
import { sidePaddings } from "../../../styles/themes";

export const CategoriesPage = styled.main`
    ${sidePaddings}
    padding-top: 3rem;
    padding-bottom: 3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Category = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

export const CategoryBanner = styled.div<{ $Img: string }>`
    height: 10rem;
    width: 18rem;
    border-radius: 16px;

    background:
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
        url(${props => props.$Img});
        
    background-size: cover;
    background-position: center;
`;

export const CategoryText = styled.p`
    white-space: pre-wrap;
`;