import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function composedChart({ expenseData }) {
  console.log(expenseData);
  const aggregatedCategoryAmount = (expenseData) => {
    const aggregatedData = {};
    expenseData.forEach(expense => {
      const category = expense.category;
      if (aggregatedData[category]) {
        aggregatedData[category] += Number(expense.amount);
      } else {
        aggregatedData[category] = Number(expense.amount);
      }
    });
    // Convert aggregatedData object into an array of objects
    const data = Object.keys(aggregatedData).map(category => ({ category: category, amount: aggregatedData[category] }));
    console.log(data);
    return data;
  }

  const categoryData = aggregatedCategoryAmount(expenseData);
  return (
    <div style={{ background: "white", color: "black", borderRadius:"10px", padding:"5px" }}>
      <ComposedChart
        width={400}
        height={300}
        data={categoryData}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis
          dataKey="category" // Show category on XAxis
          tickLine={false}
          axisLine={{ stroke: "#424242" }}
        />
        <YAxis />
        <Tooltip />
        <Bar
          radius={[10, 10, 0, 0]}
          dataKey="amount" // Corrected to use "amount" as dataKey
          barSize={20}
          fill="#424242" // Change fill color to a dark shade
          legendType="rect"
          name="amount"
        />
      </ComposedChart>
    </div>
  )
}
