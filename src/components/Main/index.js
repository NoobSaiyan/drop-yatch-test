import ReactApexChart from "react-apexcharts";
import data from "../../utils/data";
import KpiCard from "./components/KpiCard";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

const Main = () => {
  const [startDate, setStartDate] = useState(new Date("9/27/2021"));
  const [endDate, setEndDate] = useState(new Date());
  const [totalClickData, setTotalClickData] = useState(0);
  const [totalImpressionsData, setTotalImpressionsData] = useState(0);
  const [finalData, setFinalData] = useState([]);
  //   console.log(startDate, endDate);

  useEffect(() => {
    const filteredData = data.filter((a) => {
      const date = new Date(a.date);
      let obj = date >= startDate && date <= endDate;
      console.log(obj);
      return date >= startDate && date <= endDate;
    });
    const sortedData = filteredData.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    if (sortedData.length > 0) {
      setFinalData(sortedData);
      setTotalClickData(
        sortedData
          .map((item) => item.clicks)
          .reduce((prev, next) => parseFloat(prev) + parseFloat(next))
      );
      setTotalImpressionsData(
        sortedData
          .map((item) => item.impressions)
          .reduce((prev, next) => parseFloat(prev) + parseFloat(next))
      );
    }
  }, [startDate, endDate]);

  const series = [
    {
      name: "Total Clicks",
      data: finalData?.map((obj) => parseFloat(obj.clicks)),
    },
    {
      name: "Total Impressions",
      data: finalData?.map((obj) => parseFloat(obj.impressions)),
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#2569cf", "#25cf8e"],
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends By Month",
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: finalData?.map((obj) => obj.date),
      title: {
        text: "",
      },
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      floating: true,
      offsetY: 10,
      offsetX: -5,
    },
  };

  return (
    <div className="flex flex-col gap-6 px-8 py-10">
      <div className="flex h-10 w-[400px] gap-5">
        <DatePicker
          style={{ width: "100px" }}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/dd/yyyy"
        />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        <KpiCard label="Total Clicks" value={totalClickData} />
        <KpiCard label="Total Impressions" value={totalImpressionsData} />
      </div>
      <div className="h-[360px]">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={450}
        />
      </div>
    </div>
  );
};
export default Main;
