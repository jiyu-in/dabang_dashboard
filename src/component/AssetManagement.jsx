import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {Typography, Tabs, Tab, Box} from '@mui/material';
import {BorderBox, BoxTitle, ButtonStyle, Description, FlexBox, FlexCenterBox, FlexColumnBox} from '../styled/Styled';
import { useMediaQuery } from "react-responsive";


const Root = styled(BorderBox)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 24px 0;
    /* gap:30px; */
    @media (max-width: 600px) {
        padding: 0;
    }
`;

const BoxTitleRe = styled(BoxTitle)`
    @media (max-width: 600px) {
        display: none;
    }
`;

const TabStyled = styled(Tab)`
    font-size:0.938rem;
    &.Mui-selected{
        color:#1673F8
    }
`;

const ButtonBox = styled(FlexCenterBox)`
    gap:24px;
    & .MuiButton-root{
        padding: 12px 21px;
    }
`;

const AmountP = styled(Typography)`
    color:#888;
    & b{
        font-size: 1.5rem;
        color: #1673F8;
    }
`;

const BoxTitleStyle = styled(FlexBox)`
    align-items: center;
    justify-content: space-between;
`;

const BoxContentsStyle = styled(FlexColumnBox)`
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`;

const GraphBox = styled(FlexColumnBox)`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-left: 60px solid #F5CD43;
    &::before {
        content: "";
        position: absolute;
        left: -35px;
        top: 50%;
        transform: translate(0, -50%);
        width: 11px;
        height: 11px;
        background-color: #fff;
        border: 3px solid #333;
        border-radius: 11px;
        box-sizing: border-box;
        z-index: 10;
    }
    &::after {
        content: "";
        position: absolute;
        left: -35px;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        height: 1px;
        background: repeating-linear-gradient( to right,#979797,#979797 4px,transparent 4px,transparent 8px); 
    }
`;

const TextBox = styled(Box)`
    position: relative;
    background-color: #fff;
    color: #888;
    text-align: right;
    z-index: 11;
    & .MuiTypography-body1{
        font-size: 0.813rem;
        & b{
            font-size: 0.938rem;
            color:#026CFF;
        }
    }
    & .MuiTypography-body2{
        font-size: 0.688rem;
    }
`;

const GraphBoxBottom = styled(GraphBox)`
    border-color: #026CFF;
`;

const BoxGap = styled(FlexColumnBox)`
    gap:24px;
`;

const Category = styled('span')`
    padding:3px 7px;
    font-size: 0.688rem;
    color: #C12424;
    border: 1px solid #C12424;
`;

const CategoryYellow = styled(Category)`
    color:#CCAF83;
    border: 1px solid #CCAF83;
`;

const CategoryContents = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const CategoryTitle = styled('p')`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 6px;
`;
const CategorySubtitle = styled('span')`
    font-size: 0.875rem;
    color:#222;
`;

const Percent = styled('span')`
    font-size: 1rem;
    color:#222;
    & b{
        font-size: 1.25rem;
    }
`;

const tabData = [
    { label: "예금", content: "예금 상품 내용" },
    { label: "적금", content: "적금 상품 내용" },
    { label: "대출", content: "대출 상품 내용" },
    { label: "펀드", content: "펀드 상품 내용" },
    { label: "청약", content: "청약 상품 내용" },
    ];

function AssetManagement( ) {
    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    const isMobile = useMediaQuery({ maxWidth: 600 });

    return (
        <Root>
            <BoxTitleRe>
                <Typography variant="h4">자산관리</Typography>
                <Description>고객님 연령대 맞는 상품 추천</Description>
            </BoxTitleRe>
            {isMobile ? 
            <BoxGap>
                <Box>
                    <Category>적금</Category> 
                    <CategoryContents>
                        <FlexColumnBox>
                            <CategoryTitle>다방 우리 적금</CategoryTitle>
                            <CategorySubtitle>복잡하지 않고 가장 간단한 적금</CategorySubtitle>
                        </FlexColumnBox>
                        <Percent>연 <b>2.10%</b></Percent>
                    </CategoryContents>
                </Box>
                <Box>
                    <CategoryYellow>적금</CategoryYellow> 
                    <CategoryContents>
                        <FlexColumnBox>
                            <CategoryTitle>다방 우리 적금</CategoryTitle>
                            <CategorySubtitle>복잡하지 않고 가장 간단한 적금</CategorySubtitle>
                        </FlexColumnBox>
                        <Percent>연 <b>2.10%</b></Percent>
                    </CategoryContents>
                </Box>
            </BoxGap>
            :
            <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 3 }}>
                <Tabs value={value} onChange={handleChange} centered>
                    {tabData.map((tab, index) => (
                    <TabStyled key={index} label={tab.label} />
                    ))}
                </Tabs>
                <Box sx={{ padding: "24px 16px" }}>
                    <BoxTitleStyle>
                        <FlexColumnBox>
                            <Typography><b>김다방</b> 고객님의 예상금리</Typography>
                            <Description>(가입기간 12개월 유지기준)</Description>
                        </FlexColumnBox>
                        <AmountP>연 <b>2.3%</b> </AmountP>
                    </BoxTitleStyle>
                    <BoxContentsStyle>
                        <GraphBox height="54px">
                            <TextBox>
                                <Typography variant="body1">연<b>1.1% P</b> 우대금리</Typography>
                                <Typography variant="body2">급여이체 충족 및 5개월 이상</Typography>
                            </TextBox>
                        </GraphBox>
                        <GraphBoxBottom height="84px">
                            <TextBox>
                                <Typography variant="body1">연<b>1.2% P</b> 우대금리</Typography>
                            </TextBox>
                        </GraphBoxBottom>
                    </BoxContentsStyle>
                    {/* {tabData[value].content} */}
                </Box>
                <ButtonBox>
                    <ButtonStyle variant="outlined" disableRipple>가입약관 확인하기</ButtonStyle>
                    <ButtonStyle variant="contained" disableRipple>바로 가입하기 </ButtonStyle>
                </ButtonBox>
                </Box>
        }
        </Root>
    );
}

export default AssetManagement;
