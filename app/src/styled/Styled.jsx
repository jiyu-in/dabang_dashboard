import { styled } from '@mui/material/styles';
import {Box, Typography, Button} from '@mui/material';

export const FlexBox = styled(Box)`
    display: flex;
`;

export const FlexColumnBox = styled(FlexBox)`
    flex-direction: column;
`;

export const FlexCenterBox = styled(FlexBox)`
    align-items: center;
    justify-content: center;
`;

export const ButtonStyle = styled(Button)`
    display: flex;
    padding: 7px 10px;
    border-radius: 0;
    &.MuiButton-outlined{
        color:#888;
        border-color: #DADADA;
        &:hover{
            border-color: #c2c2c2;
        }
    }
    &.MuiButton-contained{
         background-color: #2E59A6;
         border: 0 none;
         box-shadow: none;
         &:hover{
            background-color: #1d3e79;
        }
    } 
`;


export const GridBox = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 32px;
`;

export const BoxStyled = styled(Box)`
    padding: 24px;
    border-radius: 4px;
`;

export const BorderBox = styled(BoxStyled)`
    border: 1px solid #EBEBEB;
`;

export const BoxTitle = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .MuiTypography-h4{
        color:#222;
        font-size: 1.25rem;
        font-weight: 500;
        font-family: 'Spoqa Han Sans Neo','Roboto', sans-serif !important;
        word-break: keep-all;
        letter-spacing: -0.28px;
    }
`;

export const Description = styled(Typography)`
    color:#888888;
    font-size:0.75rem;
    font-weight: 300;
    font-family: 'Spoqa Han Sans Neo','Roboto', sans-serif !important;
    letter-spacing: -0.28px;
`;
