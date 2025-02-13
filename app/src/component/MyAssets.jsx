import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, List, ListItem, Typography} from '@mui/material';
import {FlexBox, FlexColumnBox, BorderBox, BoxTitle, Description} from '../styled/Styled';


const Root = styled(BorderBox)`
    /* height: 234px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FlexEndBox = styled(FlexColumnBox)`
    align-items: flex-end;
    gap:8px;
`;


export const AmountBox = styled(FlexBox)`
    align-items: flex-end;
    gap:8px;
    & .MuiTypography-root{
        color: #026CFF;
        font-size: 1.625rem;
        font-weight: 700;
        line-height: 1;
    }
`;

const ListStyled = styled(List)`
    display: flex;
    flex-direction: column;
    padding: 0;
    gap:10px;
`;

const ListItemStyled = styled(ListItem)` 
    justify-content: space-between;
    padding: 0;
`;

const ListItemTitle = styled(Box)`
    display: flex;
    align-items: center;
    font-size: 0.813rem;
    font-weight: 600;
`;

const CountStyled = styled('span')`
    width: 1.125rem;
    height: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    font-size: 0.75rem;
    background-color: #DBEAFF;
    border-radius: 1.125rem;
`;

const ListItemContent = styled(Box)`
    color: #888;
    font-size: 0.875rem;
    & > b{
        font-weight: 500;
        color: #000;
    }
`;

const listItems = [
    { title: '투자계좌', count: 2, value: '1,541,840' },
    { title: '대출', count: 1, value: '2,000,000'},
];

function MyAssets() {
    return (
        <Root>
            <BoxTitle><Typography variant="h4">나의 순자산</Typography></BoxTitle>
            <FlexEndBox>
                <AmountBox><Typography>2,156,215,840 </Typography>원</AmountBox>
                <Description>내 등급으로 가능한 대출 상품 확인</Description>
            </FlexEndBox>
            <ListStyled>
            {listItems.map((item, index) => (
                <ListItemStyled key={index}>
                    <ListItemTitle>{item.title} <CountStyled>{item.count}</CountStyled></ListItemTitle>
                    <ListItemContent><b>{item.value}</b> 원</ListItemContent>
                </ListItemStyled>
            ))}
            </ListStyled>
        </Root>
    );
}

export default MyAssets;
