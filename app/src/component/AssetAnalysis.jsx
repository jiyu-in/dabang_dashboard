import React from 'react';
import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import {BorderBox, BoxTitle} from '../common/Styled';


const Root = styled(Box)`
    
`;


function AssetAnalysis( ) {
    return (
        <BorderBox>
            <BoxTitle variant="h4">자산분석</BoxTitle>
        </BorderBox>
    );
}

export default AssetAnalysis;
