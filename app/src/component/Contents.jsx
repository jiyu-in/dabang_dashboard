import React from 'react';
import { styled } from '@mui/material/styles';
import {Grid} from '@mui/material';
import {GridBox, FlexColumnBox} from '../styled/Styled';
import MyAssets from './MyAssets';
import AssetAnalysis from './AssetAnalysis';
import History from './History';
import Analysis from './Analysis';
import ListAnalysis from './ListAnalysis';
import Stock from './Stock';
import AssetManagement from './AssetManagement';
import Calender from './Calender';



const Root = styled(Grid)`
    width: 100%;
    max-width: 1280px;
    padding:0 32px 32px 0;
    margin: 0;
    /* width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr; 
    gap: 32px;
    padding:32px;  */
`;

const Wrap = styled(Grid)`
    gap:32px;
`;



function Contents( ) {
    return (
        <Root container spacing={4} alignItems="stretch">
            <Wrap item sm={12} md={8}>
                <Grid container spacing={4} alignItems="stretch">  
                    <Grid item sm={12} lg={6}><MyAssets/></Grid>
                    <Grid item sm={12} lg={6}><AssetAnalysis/></Grid>
                </Grid>
                <History/>
                <Grid container spacing={4} alignItems="stretch"> 
                    <Grid item sm={12} lg={8}><Analysis/></Grid>
                    <Grid item sm={12} lg={4}><ListAnalysis/></Grid>
                </Grid>                
            </Wrap>
            <Wrap item sm={12} md={4} style={{minWidth:'380px'}}>
                <Stock/>
                <AssetManagement/>
                <Calender/>
            </Wrap>
        </Root>
    );
}

export default Contents;
