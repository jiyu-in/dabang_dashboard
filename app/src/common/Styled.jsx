import { styled } from '@mui/material/styles';
import {Box, Typography} from '@mui/material';

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

export const BoxTitle = styled(Typography)`
    color:#222;
    font-weight: 500;
    font-family: 'Spoqa Han Sans Neo','Roboto', sans-serif !important;
    letter-spacing: -0.28px;
    &.MuiTypography-h4{
        font-size: 1.25rem;
    }
`;