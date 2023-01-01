import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    gpa: 5,
    percentage: 56.598936287393784,
  },
  {
    percentage: 5.776240739282046,
  },
  {
    percentage: 33.462247788832514,
  },
  {
    percentage: 52.56500085534406,
  },
  {
    percentage: 74.19403115464667,
  },
  {
    gpa: 6,
    percentage: 4.006423859124597,
  },
  {
    percentage: 76.54016559816732,
  },
  {
    percentage: 94.9390915564138,
  },
  {
    percentage: 57.37672606926878,
  },
  {
    percentage: 92.35395852083951,
  },
  {
    gpa: 7,
    percentage: 37.397815342826405,
  },
  {
    percentage: 49.016962138471754,
  },
  {
    percentage: 15.522039191704561,
  },
  {
    percentage: 19.788150882088583,
  },
  {
    percentage: 16.0543708155644,
  },
  {
    gpa: 8,
    percentage: 65.20121979327769,
  },
  {
    percentage: 96.74434030188772,
  },
  {
    percentage: 85.20196133136295,
  },
  {
    percentage: 51.113506379990035,
  },
  {
    percentage: 86.87223822943295,
  },
  {
    gpa: 9,
    percentage: 78.42813229575474,
  },
  {
    percentage: 99.31173215715785,
  },
  {
    percentage: 72.59194325588867,
  },
  {
    percentage: 83.59444820842027,
  },
  {
    percentage: 86.35527727971244,
  },
  {
    gpa: 10,
    percentage: 13.022687019696132,
  },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -26,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorPercentage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.9} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="gpa" />
        <YAxis />
        {/* <Area
          type="monotone"
          dataKey="percentage"
          stroke="#8884d8"
          fill="#8884d8"
        /> */}
        <Area
          type="monotone"
          dataKey="percentage"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorPercentage)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
