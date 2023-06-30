import React, { useEffect, useState } from "react";
import {
  Area,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  ComposedChart,
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
  const [mx, setMx] = useState(10);
  const [showMyScore, setShowMyScore] = useState(false);

  useEffect(() => {
    let rawData = [
      {
        bucketIndex: 0,
        numPeople: 203,
      },
      {
        bucketIndex: 1,
        numPeople: 137,
      },
      {
        bucketIndex: 2,
        numPeople: 132,
      },
      {
        bucketIndex: 3,
        numPeople: 252,
      },
      {
        bucketIndex: 4,
        numPeople: 284,
      },
      {
        bucketIndex: 5,
        numPeople: 523,
      },
      {
        bucketIndex: 6,
        numPeople: 513,
      },
      {
        bucketIndex: 7,
        numPeople: 566,
      },
      {
        bucketIndex: 8,
        numPeople: 893,
      },
      {
        bucketIndex: 9,
        numPeople: 950,
      },
      {
        bucketIndex: 10,
        numPeople: 1644,
      },
      {
        bucketIndex: 11,
        numPeople: 1575,
      },
      {
        bucketIndex: 12,
        numPeople: 1683,
      },
      {
        bucketIndex: 13,
        numPeople: 2466,
      },
      {
        bucketIndex: 14,
        numPeople: 2779,
      },
      {
        bucketIndex: 15,
        numPeople: 4593,
      },
      {
        bucketIndex: 16,
        numPeople: 3774,
      },
      {
        bucketIndex: 17,
        numPeople: 4093,
      },
      {
        bucketIndex: 18,
        numPeople: 4977,
      },
      {
        bucketIndex: 19,
        numPeople: 4779,
      },
      {
        bucketIndex: 20,
        numPeople: 6999,
      },
      {
        bucketIndex: 21,
        numPeople: 4356,
      },
      {
        bucketIndex: 22,
        numPeople: 3790,
      },
      {
        bucketIndex: 23,
        numPeople: 3793,
      },
      {
        bucketIndex: 24,
        numPeople: 2380,
      },
      {
        bucketIndex: 25,
        numPeople: 1247,
      },
    ];
    let total = rawData.reduce((partialSum, a) => partialSum + a.numPeople, 0);

    let maximum = 0;
    for (let i = 0; i < rawData.length; i++) {
      let el = {};
      if (rawData[i].bucketIndex % 5 == 0) {
        el.gpa = rawData[i].bucketIndex / 5 + 5.0;
      }
      el.people = ((rawData[i].numPeople / total) * 100).toFixed(2);
      maximum = Math.max(maximum, el.people);
      rawData[i] = el;
    }

    let gpa = localStorage.getItem("gpa");
    if (gpa) {
      let bucket = Math.round((gpa - 5.0) / 0.2);
      if (bucket >= 0) {
        let mine = rawData[bucket].people;

        rawData[bucket] = { ...rawData[bucket], mine };
        setShowMyScore(true);
      }
    }

    //putting maximum to something evenly divisible by 5
    maximum += 5.0 - (maximum % 5.0);

    setMx(maximum);
    setData(rawData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={800}
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
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="gpa" />
        <YAxis
          domain={[0, mx]}
          tickCount={5}
          interval={0}
          tickFormatter={(s) => `${s}%`}
        />

        <Area
          type="monotone"
          dataKey="people"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorpeople)"
        />

        {showMyScore && <Bar dataKey="mine" barSize={2} fill="#f10" />}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
