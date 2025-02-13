import React from 'react';
import { styled } from '@mui/material/styles';
import {Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import {BorderBox, BoxTitle, Description} from '../styled/Styled';


const Root = styled(BorderBox)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:30px;
    & .MuiTableContainer-root{
        box-shadow: none;
    }
    & .MuiTableHead-root{
        background-color: #F0F0F0;
        & .MuiTableCell-head{
            font-size:0.875rem;
            font-weight: 400;
            color:#888;
            word-break: keep-all;
        }
    }
    & .MuiTableBody-root{
        & .MuiTableRow-root:hover{
            background-color: #e4e9f2;
            /* cursor: pointer; */
        }
        & .MuiTableCell-root{
            padding: 13.5px 16px;
            color:#888;
            border-color: #EBEBEB;
        }
    }
`;

function data(date, detail, used, remain, type) {
    return { date, detail, used, remain, type };
  }
  
  const rows = [
    data('2025.01.26 10:24:45', '다방포차', '35,000', '2,156,215,840', '출금'),
    data('2025.01.26 10:24:45', '스테이션3지원금', '1,235,000', '2,156,215,840', '입금'),
    data('2025.01.26 10:24:45', '다방커피', '4,500', '2,156,215,840', '출금'),
    data('2025.01.26 10:24:45', '먹자골목', '10,500', '2,156,215,840', '출금'),
  ];


function History( ) {
    return (
        <Root>
            <BoxTitle>
                <Typography variant="h4">최근 거래내역</Typography>
                <Description>총 내역확인</Description>
            </BoxTitle>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>일시</TableCell>
                            <TableCell>내역</TableCell>
                            <TableCell align="right">금액</TableCell>
                            <TableCell align="right">잔액</TableCell>
                            <TableCell align="center">유형</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.date}
                        </TableCell>
                        <TableCell>{row.detail}</TableCell>
                        <TableCell align="right">
                            <span style={{color:'#373737', fontWeight:400}}>{row.used}</span>
                        </TableCell>
                        <TableCell align="right">{row.remain}</TableCell>
                        <TableCell align="center"
                            style={{ color: row.type === '출금' ? '#C12424' : '#316DF8' }}
                        >{row.type}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </Root>
    );
}

export default History;
