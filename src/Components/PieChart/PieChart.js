import React from 'react';
import { PieChart, Pie, Cell, Legend} from 'recharts';
const CategoryPieChart = ({categoryData}) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
    // categoryData.forEach(item => {
    //     console.log(item.category, item.value);
    //   });
  // Define custom colors for pie chart sectors
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5733'];

  const legendData = categoryData.map((entry, index) => ({
    value: entry.category, // Use category name as the legend value
    color: COLORS[index % COLORS.length],
  }));

  return (

      <PieChart width={300} height={300}>
        <Pie
          data={categoryData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          //  label={({ category, value, percent }) => `${(percent * 100).toFixed(0)}%`}
          // labelLine={false}
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {categoryData.map((entry, index) => (
            <>
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            </>
          ))}
        </Pie>
        <Legend layout="horizontal" align="bottom" payload={legendData} />
      </PieChart>

  );
};

export default CategoryPieChart;

