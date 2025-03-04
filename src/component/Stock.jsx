import React from 'react';
import { styled } from '@mui/material/styles';
import {Typography} from '@mui/material';
import {BorderBox, FlexColumnBox, FlexBox} from '../styled/Styled';
import { ReactComponent as TriangleIcon} from '../images/TriangleIcon.svg';

const Root = styled(BorderBox)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
        display: none;
    }
`;

const Date = styled('span')`
    color: #888;
    font-size: 0.688rem;
`;

const Name = styled('p')`
    color: #333;
    font-size: 1.375rem;
    font-weight: 600;
    margin: 3px 0 0 0;
`;

const Price = styled('p')`
    text-align: right;
    font-size: 1.375rem;
    font-weight: 700;
    color:#C12424;
    margin: 0 0 6px 0;
`;
const Rate = styled(FlexBox)`
    align-items: center;
    gap:3px;
    text-align: right;
    color:#C12424;
`;

function Stock( ) {
    return (
        <Root>
            <FlexColumnBox>
                <Date>02.01 00:00</Date>
                <Name>KOSPI</Name>
            </FlexColumnBox>
            <FlexColumnBox>
                <Price>3130.98</Price>
                <Rate><TriangleIcon/> 24.17(+1.10%)</Rate>
            </FlexColumnBox>
        </Root>
    );
}

export default Stock;
