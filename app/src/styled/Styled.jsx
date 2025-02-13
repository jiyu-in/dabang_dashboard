import { styled } from '@mui/material/styles';
import {Box, Typography} from '@mui/material';

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
    /* border: 1px solid #EBEBEB; */
    border: 1px solid #888888;
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
