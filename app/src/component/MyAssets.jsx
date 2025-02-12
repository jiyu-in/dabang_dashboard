import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, List, ListItem, Typography} from '@mui/material';
import {BorderBox, BoxTitle} from '../common/Styled';


const Root = styled(Box)`
    
`;

const ListItemStyled = styled(ListItem)`
    
`;

const ListItemTitle = styled(Typography)`
    
`;

const CountStyled = styled('span')`
    
`;

const ListItemContent = styled(Box)`
    
`;

const listItems = [
  { title: '투자계좌', count: 2, value: '1,541,840' },
  { title: '대출', count: 1, value: '2,000,000'},
];

function MyAssets() {
    return (
        <BorderBox>
            <BoxTitle variant="h4">나의 순자산</BoxTitle>
            <Box>
            2,156,215,840 원
            내 등급으로 가능한 대출 상품 확인
            </Box>
            <List>
            {listItems.map((item, index) => (
                <ListItemStyled>
                    <ListItemTitle>{item.title} <CountStyled>{item.count}</CountStyled></ListItemTitle>
                    <ListItemContent>{item.value} 원</ListItemContent>
                </ListItemStyled>
                ))}
            </List>
            
        </BorderBox>
    );
}

export default MyAssets;
