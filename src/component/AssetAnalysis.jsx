import React from 'react';
import { styled } from '@mui/material/styles';
import {Typography, List, ListItem} from '@mui/material';
import {FlexBox, BorderBox, BoxTitle, Description} from '../styled/Styled';
import DoughnutChart from './chat/DoughnutChart';

const Root = styled(BorderBox)`
    width: 100%;
    height:234px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 600px) {
        height: 100%;
    }
    @media (min-width: 601px) and (max-width: 1199px) {
        height: 100%;
    }
`;

const BoxTitleRe = styled(BoxTitle)`
    @media (max-width: 600px) {
        display: none;
    }
`;


const ChartBox = styled(FlexBox)`
    overflow: auto;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;



const Legend = styled(List)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    & .MuiListItem-root{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:24px;
        font-size: 0.875rem;
        & > div{
            align-items: center;
        }
    }
    @media (max-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
        & .MuiListItem-root{
            width: 50%;
        }
    }
`;

const Dot = styled('span')`
    width: 10px;
    height: 10px;
    display: block;
    border-radius: 10px;
    background-color: #9E9E9E;
`;

const ListName = styled('span')`
    color:#888888;
    word-break: keep-all;
`;

const ListValue = styled('span')`
    color:#373737;
    font-weight: 500;
`;


const data = [
    { name: "계좌", value: 32, color: "#1976D2" },
    { name: "투자", value: 23, color: "#E91E63" },
    { name: "대출", value: 18, color: "#FBC02D" },
    { name: "기타", value: 27, color: "#9E9E9E" },
  ];

function AssetAnalysis( ) {
    return (
        <Root>
            <BoxTitleRe>
                <Typography variant="h4">자산분석</Typography>
                <Description>당월기준 (2025년 2월 기준)</Description>
            </BoxTitleRe>
            <ChartBox sx={{overflow:'auto'}}>
                <DoughnutChart data={data} />
                <Legend>
                    {data.map((item, index) => (
                        <ListItem key={index}>
                            <FlexBox style={{gap:8}}>
                                <Dot style={{ backgroundColor: item.color }}></Dot>
                                <ListName>{item.name}</ListName>
                            </FlexBox>
                            <ListValue>{item.value}%</ListValue>
                        </ListItem>
                    ))}
                </Legend>
            </ChartBox>
        </Root>
    );
}

export default AssetAnalysis;
