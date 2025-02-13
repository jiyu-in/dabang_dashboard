import React from 'react';
import { styled } from '@mui/material/styles';
import {Typography} from '@mui/material';
import {BorderBox, BoxTitle, Description} from '../styled/Styled';
import BarChartNoPadding from './chat/BarChartNoPadding';

const Root = styled(BorderBox)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:30px;
`;

function AssetAnalysis( ) {
    return (
        <Root>
            <BoxTitle>
                <Typography variant="h4">지출분석</Typography>
                <Description>최근 6개월 기준</Description>
            </BoxTitle>
            <BarChartNoPadding />
        </Root>
    );
}

export default AssetAnalysis;
