import styled from "styled-components";
import { themes } from "../../../styles/themes";

export const NotFoundPage = styled.main`
    height: calc(100vh - 5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;

    img {
        height: 15rem;
    }

    button {
        height: 4rem;
        gap: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        align-items: center;
        padding: 1rem;
        border-radius: 16px;
        background-color: transparent;
        border: 1px solid ${themes.default.neutro_0};
        color: ${themes.default.neutro_0};
        cursor: pointer;

        &:hover {
            color: ${themes.default.neutro_10};
            background-color: ${themes.default.neutro_0};
        }

        transition: all .15s;
    }
`;