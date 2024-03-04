import styled from "styled-components";

export const Container = styled.div`

    > header {
        width: 100%;
        height: 144px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 124px;

         svg {
            font-size: 24px;

            color: ${({ theme }) => theme.COLORS.GRAY_100};
            
         }

         button {
            background-color: transparent;
            border: none;
         }
    }
    
`;

export const Form = styled.form`
    max-width: 340px;

    margin: 30px auto 0;

    > div:nth-child(3){
        margin-top: 24px;
    }

`;

export const Avatar = styled.div`
    width: 186px;
    height: 186px;

    position: relative;

    margin: -90px auto 32px;

    > img {
        width: 186px;
        height: 186px;

        border-radius: 50%;


    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.ORANGE};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            width: 20px;
            height: 20px;

        }
    }
`;