import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  ComposedChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const defaultData = [
  {
    gpa: 5,
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    gpa: 6,
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    gpa: 7,
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    gpa: 8,
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    gpa: 9,
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    people: 0,
  },
  {
    gpa: 10,
    people: 0,
  },
];

export default function Chart() {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    (async function () {
      let incomingData = await fetch("/api/graphData", {
        method: "GET",
      });
      // console.log(incomingData);
      let rawData = await incomingData.json();
      let total = rawData.reduce(
        (partialSum, a) => partialSum + a.numPeople,
        0
      );

      // console.log(mine);
      for (let i = 0; i < rawData.length; i++) {
        let el = {};
        if (rawData[i].bucketIndex % 5 == 0) {
          el.gpa = rawData[i].bucketIndex / 5 + 5.0;
        }
        el.people = ((rawData[i].numPeople / total) * 100).toFixed(2);

        rawData[i] = el;
      }

      let gpa = localStorage.getItem("gpa");
      let bucket = Math.round((gpa - 5.0) / 0.2);
      let mine = rawData[bucket].people;

      rawData[bucket] = { ...rawData[bucket], mine };

      setData(rawData);
    })();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorpeople" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.9} />
          </linearGradient>
          <linearGradient id="colorpeopleorange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff7300" stopOpacity={1} />
            <stop offset="95%" stopColor="#ff7300" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="gpa" />
        <YAxis />
        <Area
          type="monotone"
          dataKey="people"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorpeople)"
        />
        <Bar dataKey="mine" barSize={2} fill="url(#colorpeopleorange)" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
