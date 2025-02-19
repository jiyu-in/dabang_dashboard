import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useMediaQuery } from "react-responsive"; // 반응형 처리

const DonutChart = ({ data }) => {
  const [selectedValue, setSelectedValue] = useState(data[0].value);

  // 화면 너비가 600px 이하인지 체크
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });

  const handleClick = (_, index) => {
    setSelectedValue(data[index].value);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: isSmallScreen ? "200px" : "400px", // 600px 이하일 때 200px로 변경
        aspectRatio: "1",
        margin: "auto",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data.slice().reverse()}
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            paddingAngle={-50}
            dataKey="value"
            onClick={handleClick}
            cornerRadius={50}
            stroke="none"
            style={{ outline: "none" }}
          >
            {data.slice().reverse().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {/* 중앙에 값 표시 */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="24px"
            fontWeight="bold"
            fill="#333"
          >
            {selectedValue}%
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
