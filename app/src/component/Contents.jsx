import React from 'react';
import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import {GridBox, BorderBox, BoxTitle, FlexColumnBox} from '../styled/Styled';
import MyAssets from './MyAssets';
import AssetAnalysis from './AssetAnalysis';
import History from './History';
import Analysis from './Analysis';
import ListAnalysis from './ListAnalysis';



const Root = styled(Box)`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr; 
    gap: 32px;
    padding:32px; 
`;

const Wrap = styled(FlexColumnBox)`
    gap:32px;
`;

const GridBoxColumns = styled(GridBox)`
    grid-template-columns: 2fr 1fr; 
`;


function Contents( ) {
    return (
        <Root>
            <Wrap>
                <GridBox>
                    <MyAssets/>
                    <AssetAnalysis/>
                </GridBox>
                <History/>
                <GridBoxColumns>
                    <Analysis/>
                    <ListAnalysis/>
                </GridBoxColumns>
            </Wrap>
            <Box>
                2
            </Box>
        </Root>
    );
}

export default Contents;
