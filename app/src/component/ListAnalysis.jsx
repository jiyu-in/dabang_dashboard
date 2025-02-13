import React from 'react';
import { styled } from '@mui/material/styles';
import {Button} from '@mui/material';
import {BorderBox} from '../styled/Styled';

const Root = styled(BorderBox)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DlList = styled('dl')`
    
`;

const list = [
  { text: '다방페이', value:'482,011원' },
  { text: '카드', value:'' },
  { text: '현금', value:'' },
  { text: '신용점수', value:'158점' },
  { text: '보험', value:''},
];

function ListAnalysis( ) {
    return (
        <Root>
            {list.map((item, index) => (
                <DlList key={index}>
                    <dt>{item.text}</dt>
                    {item.value.length > 0 ? 
                    <dd>{item.value}</dd> : 
                    <dd><Button>확인하기</Button></dd>
                    }                    
                </DlList>
            ))}
        </Root>
    );
}

export default ListAnalysis;
