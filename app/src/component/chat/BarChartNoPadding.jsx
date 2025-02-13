import zIndex from "@mui/material/styles/zIndex";
import { display, width } from "@mui/system";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  margin: 0;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, 0);
    width: 1px;
    height: 20px;
    background-color: #979797;
    z-index: 10;
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translate(-50%, 0);
    width: 11px;
    height: 11px;
    background-color: #fff;
    border: 3px solid #333;
    border-radius: 11px;
    box-sizing: border-box;
    z-index: 10;
  }
`;


const months = ["8월", "9월", "10월", "11월", "12월", "1월", "2월(현재)"];

const data = [
  { name: "8월", value: 307300 },
  { name: "9월", value: 563450 },
  { name: "10월", value: 263500 },
  { name: "11월", value: 7785700 },
  { name: "12월", value: 4564560 },
  { name: "1월", value: 90000 },
  { name: "2월(현재)", value: 545842 },
];

const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <text x={x} y={y + 10} textAnchor="middle" fontSize="0.75rem" fill="#888">
      {payload.value}
    </text>
  );
};

const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length) {
    const { x, y } = coordinate; // 현재 마우스 좌표 가져오기

    return (
      <div
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y - 40}px`, // Bar 위로 이동
          backgroundColor: "#333",
          color: "#fff",
          padding: "2px 3px",
          fontSize: "0.75rem",
          transform: "translateX(-50%)", 
          whiteSpace: "nowrap",
          pointerEvents: "none", // 🔥 툴팁에 마우스 이벤트 방지
        }}
      >
        <TooltipWrapper>
          {`${payload[0].value.toLocaleString()} 원`}
        </TooltipWrapper>
      </div>
    );
  }
  return null;
};

const formattedData = months.map((month) => {
  return data.find((d) => d.name === month) || { name: month, value: 0 };
});

const colors = ["#9E9E9E", "#9E9E9E", "#9E9E9E", "#9E9E9E", "#9E9E9E", "#9E9E9E", "#1673F8"];

const BarChartNoPadding = () => {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={formattedData} barCategoryGap="0%" barGap={10} barSize={20}>
          <XAxis dataKey="name" tick={<CustomXAxisTick />} axisLine={{stroke : "#C9C9C9"}} tickLine={{ stroke: "transparent" }}  />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
          <Bar 
            dataKey="value" 
            isAnimationActive={false} // 🔥 hover 효과 제거
            background={{ fill: "transparent" }} // 🔥 회색 배경 제거
          >
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartNoPadding;
