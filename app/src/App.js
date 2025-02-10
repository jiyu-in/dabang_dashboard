import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Box} from '@mui/material';
import { ReactComponent as Logo} from './images/Logo.svg'; 
import { ReactComponent as DepositIcon} from './images/DepositIcon.svg'; 
import { ReactComponent as LoanIcon} from './images/LoanIcon.svg'; 
import { ReactComponent as ForexIcon} from './images/ForexIcon.svg'; 
import { ReactComponent as InsuranceIcon} from './images/InsuranceIcon.svg'; 
import { ReactComponent as CardIcon} from './images/CardIcon.svg'; 
import { ReactComponent as ServiceCenterIcon} from './images/ServiceCenterIcon.svg'; 

const Root = styled(Box)`
  & *{
    font-family: 'Spoqa Han Sans Neo','Roboto', sans-serif !important;
  }
`;

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: ${(props) => (props.open ? '240px' : '80px')};
    color: #fff;
    background-color: #2E59A6;
    transition: width 0.3s;
  }
`;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const items = [
  { text: '예금', icon: <DepositIcon /> },
  { text: '대출', icon: <LoanIcon /> },
  { text: '외환/환율', icon: <ForexIcon /> },
  { text: '보험', icon: <InsuranceIcon /> },
  { text: '카드', icon: <CardIcon /> },
  { text: '고객', icon: <ServiceCenterIcon /> },
];


function App() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Root>
      <Button onClick={toggleDrawer}>
            닫기
          {/* {theme.direction === 'rtl' ? '닫기' : '열기'} */}
          </Button>
    <StyledDrawer 
      variant="permanent"
      open={open}
      >
        <DrawerHeader>
        <Box><Logo/></Box>
        <Button onClick={toggleDrawer}>
          {open ? '닫기' : '열기'}
          </Button>
        </DrawerHeader>
        
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? { opacity: 1 }
                      : { opacity: 0 },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
      <Box component="main" sx={{flexGrow:1}}>ddd</Box>
      </Root>
  );
}

export default App;
