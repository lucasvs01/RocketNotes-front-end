import styled from "styled-components";

export const Container = styled.button`

    background-color: transparent;
    font-size: 16px;
    border: none;
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};



`;