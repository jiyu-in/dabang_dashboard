import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Sidebar from './component/Sidebar';
import Contents from './component/Contents';
import './App.css';
import {Box, Typography, IconButton} from '@mui/material';
import { ReactComponent as DepositIcon} from './images/DepositIcon.svg'; 
import { ReactComponent as LoanIcon} from './images/LoanIcon.svg'; 
import { ReactComponent as ForexIcon} from './images/ForexIcon.svg'; 
import { ReactComponent as InsuranceIcon} from './images/InsuranceIcon.svg'; 
import { ReactComponent as CardIcon} from './images/CardIcon.svg'; 
import { ReactComponent as ServiceCenterIcon} from './images/ServiceCenterIcon.svg'; 
import { ReactComponent as MenuIcon} from './images/MenuIcon.svg'; 
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


const drawerWidth = 240;
const userName = '김다방';

const Root = styled(Box)`
  display: flex;
  & *{
    font-family: 'Spoqa Han Sans Neo','Roboto', sans-serif !important;
    letter-spacing: -0.28px;
    box-sizing: border-box;
  }
`;

const Topbar = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 40px;
    color: #666; 
    background-color: #EEEEEE;
    border-bottom: 1px solid #ddd;
    font-size: 1.125rem;
    box-sizing: border-box;
    & b{
        color: #333; 
        margin-right: 4px;
    }
    @media (max-width: 600px) {
      padding: 0 24px;
    }
`;

const items = [
  { text: '예금', icon: <DepositIcon /> },
  { text: '대출', icon: <LoanIcon /> },
  { text: '외환/환율', icon: <ForexIcon /> },
  { text: '보험', icon: <InsuranceIcon /> },
  { text: '카드', icon: <CardIcon /> },
  { text: '고객', icon: <ServiceCenterIcon /> },
];



function App() {

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md 이하인지 체크

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };



  return (
    <Root>
      <Sidebar toggleDrawer={toggleDrawer} open={open} items={items} drawerWidth={drawerWidth} isMobile={isMobile} />
      <Box sx={{flex:1}}>
        <Topbar>
          <Typography><b>{userName}</b>님 환영합니다.</Typography>
          {isMobile && (
            <IconButton disableRipple onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          )}
        </Topbar>
        <Contents />
      </Box>
      </Root>
  );
}

export default App;
