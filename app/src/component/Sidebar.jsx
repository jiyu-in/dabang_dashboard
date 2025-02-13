import React from 'react';
import { styled } from '@mui/material/styles';
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Box} from '@mui/material';
import { ReactComponent as Logo} from '../images/Logo.svg'; 


const StyledDrawer = styled(Drawer)`
    flex-shrink: 0;
    white-space: nowrap;
    & .MuiDrawer-paper {
        position: unset;
        display: flex;
        align-items: flex-start;
        width: 240px;
        min-height: 100vh;
        color: #fff;
        background-color: #2E59A6;
        gap: 84px;
        transition: width 0.3s;
        box-sizing: border-box;
    }
`;

const LogoBox = styled(Box)`
    padding: 32px 32px 0 32px;
`;

const DrawerHeader = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ListUl = styled(List)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ListItemStyled = styled(ListItem)`
    padding: 0;
    & .MuiListItemButton-root{
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 32px;
        gap:18px;
        & .MuiListItemIcon-root{
        min-width: auto;
        }
    }
    &:hover, &:focus{
        background-color: #1673F8;
    }
`;



function Sidebar({ items, open, drawerWidth }) {
    return (
        <StyledDrawer 
        variant="permanent"
        open={open}
        // sx={{width: open ? drawerWidth : '80px' }}
        >
            <DrawerHeader>
            <LogoBox><Logo/></LogoBox>
            {/* <Button onClick={toggleDrawer}>{open ? '닫기' : '열기'}</Button> */}
            </DrawerHeader>
            <ListUl>
            {items.map((item, index) => (
                <ListItemStyled key={index}>
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
                </ListItemStyled>
            ))}
            </ListUl>
        </StyledDrawer>
    );
}

export default Sidebar;
