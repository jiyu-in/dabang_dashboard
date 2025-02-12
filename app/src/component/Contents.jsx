import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Typography} from '@mui/material';
import MyAssets from './MyAssets';
import {GridBox, BorderBox, BoxTitle} from '../common/Styled';

const Root = styled(Box)`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr; 
    gap: 32px;
    padding:32px; 
`;


function Contents( ) {
    return (
        <Root>
            <GridBox>
                <MyAssets/>
                <BorderBox>
                    <BoxTitle variant="h4">자산분석</BoxTitle>
                </BorderBox>
            </GridBox>
            <Box>
                2
            </Box>
        </Root>
    );
}

export default Contents;
