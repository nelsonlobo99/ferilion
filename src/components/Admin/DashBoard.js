"use client";
import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { BarChart as RechartsBarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, PieChart, Pie, Label } from "recharts";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { TrendingUp } from "lucide-react";

// Sample data for bar chart
const chartData = [
  { name: "Jan", desktop: 4000 },
  { name: "Feb", desktop: 3000 },
  { name: "Mar", desktop: 2000 },
  { name: "Apr", desktop: 2780 },
  { name: "May", desktop: 1890 },
  { name: "Jun", desktop: 2390 },
];

// Sample data for donut chart
const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "#8884d8" },
  { browser: "safari", visitors: 200, fill: "#82ca9d" },
  { browser: "firefox", visitors: 287, fill: "#ffc658" },
  { browser: "edge", visitors: 173, fill: "#ff8042" },
  { browser: "other", visitors: 190, fill: "#0088fe" },
];

const Dashboard = () => {
  const totalVisitors = pieChartData.reduce((acc, curr) => acc + curr.visitors, 0);

  return (
    <div className="bg-gray-50 sm:p-6 lg:pl-8 rounded-lg shadow-lg">
      <Typography variant="h2" className="text-2xl font-bold mb-4">
        Dashboard
      </Typography>

      <div className="flex justify-between">
        {/* Bar Chart Section */}
        <Card className="w-1/2 mr-4">
          <CardHeader title="Bar Chart - Vertical" subheader="January - June 2024" />
          <CardContent>
            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer>
                <RechartsBarChart data={chartData} layout="horizontal" margin={{ left: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="desktop" fill="#8884d8" radius={5} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardContent className="flex flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUpIcon className="h-4 w-4" />
            </div>
            <Typography variant="body2" color="textSecondary">
              Showing total visitors for the last 6 months
            </Typography>
          </CardContent>
        </Card>

        {/* Donut Chart Section */}
        <Card className="w-1/2">
          <CardHeader title="Pie Chart - Donut with Text" subheader="January - June 2024" />
          <CardContent>
            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieChartData} dataKey="visitors" nameKey="browser" innerRadius={50} outerRadius={80} fill="#82ca9d">
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                              <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-2xl font-bold">
                                {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 20} className="fill-muted-foreground">
                                Visitors
                              </tspan>
                            </text>
                          );
                        }
                        return null;
                      }}
                    />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardContent className="flex flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <Typography variant="body2" color="textSecondary">
              Showing total visitors for the last 6 months
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
