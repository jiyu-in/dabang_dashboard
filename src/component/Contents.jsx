import React from 'react';
import { styled } from '@mui/material/styles';
import {Grid, Box} from '@mui/material';
import {GridBox, FlexColumnBox} from '../styled/Styled';
import MyAssets from './MyAssets';
import AssetAnalysis from './AssetAnalysis';
import History from './History';
import Analysis from './Analysis';
import ListAnalysis from './ListAnalysis';
import Stock from './Stock';
import AssetManagement from './AssetManagement';
import Calender from './Calender';
import { useMediaQuery } from "react-responsive";
import banner from '../images/mo-banner.jpg';

const Root = styled(Grid)`
    width: 100%;
    max-width: 1280px;
    margin: 0;
    /* width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr; 
    gap: 32px;
    padding:32px;  */
    @media (min-width: 601px) {
        padding:0 32px 32px 0;
    }
    @media (max-width: 600px) {
        & >  MuiGrid-item {
        padding:0;
        }
    }
`;

const Wrap = styled(Grid)`
    gap:32px;
    @media (max-width: 600px) {
        padding-left:0!important;
    }
`;

const WrapBottom = styled(Grid)`
    gap:32px;
    min-width:380px;
    max-width:100vw;
    @media (max-width: 600px) {
        margin: 0 auto;
        padding-left:0!important;
        & > .MuiBox-root{
            padding:0 24px;
        }
    }
`;

const ImgBox = styled(Box)`
    & img{
        width: 100%;
    }
`;




function Contents( ) {

    const isMobile = useMediaQuery({ maxWidth: 600 });

    return (
        <Root container spacing={4} alignItems="stretch">
            <Wrap item md={12} lg={8}>
                <Grid container spacing={4} alignItems="stretch">  
                    <Grid item xs={12} lg={6}><MyAssets/></Grid>
                    <Grid item xs={12} lg={6}><AssetAnalysis/></Grid>
                </Grid>
                <History/>
                <Grid container spacing={4} alignItems="stretch"> 
                    <Grid item xs={12} lg={8}><Analysis/></Grid>
                    <Grid item xs={12} lg={4}><ListAnalysis/></Grid>
                </Grid>                
            </Wrap>
            <WrapBottom item md={12} lg={4}>
                {isMobile ? 
                <ImgBox><img src={banner} alt='배너이미지'/></ImgBox> 
                : <Stock/>}
                <AssetManagement/>
                <Calender/>
            </WrapBottom>
        </Root>
    );
}

export default Contents;
