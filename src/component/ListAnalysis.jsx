import React from 'react';
import { styled } from '@mui/material/styles';
import {Button} from '@mui/material';
import {BorderBox, ButtonStyle} from '../styled/Styled';

const Root = styled(BorderBox)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:20px;
    @media (max-width: 600px) {
        background-color: #026CFF;
    }
`;

const DlList = styled('dl')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    & dt{
        color: #222;
        font-size: 0.875rem;
        word-break: keep-all;
    }
    & dd{
        color: #888;
        font-size: 0.875rem;
        & b{
            color: #222;
            font-size: 1rem;
            margin-right:4px;
        }
    }
    @media (max-width: 600px) {
        & dt{
            color: #B6D4FF;
        }
        & dd{
        color: #D5DDED;
        font-size: 0.875rem;
            & b{
                color: #FFFFFF;
                font-size: 1rem;
                margin-right:4px;
            }
            & .MuiButton-root{
                background-color: #FFFFFF;
                color:#888888;
            }
        } 
    }
`;

const list = [
    { text: '다방페이', value: '482,011' },
    { text: '카드', value:'' },
    { text: '현금', value:'' },
    { text: '신용점수', value: '158' },
    { text: '보험', value:''},
];

function ListAnalysis( ) {
    return (
        <Root>
            {list.map((item, index) => (
                <DlList key={index}>
                    <dt>{item.text}</dt>
                    {item.value.length > 0 ? (
                        item.text === '다방페이' ? <dd><b>{item.value}</b>원</dd> : <dd><b>{item.value}</b>점</dd> 
                        ) : <dd><ButtonStyle variant="outlined" disableRipple>확인하기</ButtonStyle></dd>
                    }                    
                </DlList>
            ))}
        </Root>
    );
}

export default ListAnalysis;
