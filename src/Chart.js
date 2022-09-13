import "./chart.css";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data = [
  { name: "Jan", uv: 32000 },
  { name: "Feb", uv: 15000 },
  { name: "Mar", uv: 20000 },
  { name: "Apr", uv: 25000 },
  { name: "May", uv: 40000 },
  { name: "Jun", uv: 23900 },
  { name: "Jul", uv: 34900 },
  { name: "Aug", uv: 32900 },
  { name: "Sep", uv: 29900 },
  { name: "Oct", uv: 38900 },
  { name: "Nov", uv: 40000 },
  { name: "Dec", uv: 10900 },
];

export default function Chart() {
  return (
    <div className="container">
      <div className=" whole-chart row">
        <div className="col-12  col-md-12 col-lg-6">
          <div className="chart-column ">
            <div className="chart-title">Salary-Overview</div>

            <div style={{ width: "100%", height: 400 }}>
              <ResponsiveContainer>
                <LineChart
                  className="line-chart"
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 2" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    connectNulls
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-12  col-md-12 col-lg-6">
          <div className="chart-column ">
            <div className="chart-title">Salary-Resource</div>
            <div className="pie" style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    cy={100}
                    data={data1}
                    fill="#8884d8"
                    label
                  >
                    {data1.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="pie-data">
              <div>
                <CircleIcon className="a" />
                <span>Youtube</span>
              </div>
              <div>
                <CircleIcon className="b" />
                <span>IT</span>
              </div>
              <div>
                <CircleIcon className="c" />
                <span>Business</span>
              </div>
              <div>
                <CircleIcon className="d" />
                <span>Social</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
