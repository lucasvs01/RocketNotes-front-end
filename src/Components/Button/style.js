import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE };
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800 };


    padding: 0 16px;
    border: 0;
    border-radius: 10px;

    height: 56px;
    margin-top: 16px;

    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    };

`