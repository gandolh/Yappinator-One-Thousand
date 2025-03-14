import React, { useState, useEffect } from "react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"

export function MessagesPerMonthChart() {
    // State to track if component is mounted
    const [mounted, setMounted] = useState(false)

    // Set mounted to true after component mounts
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    // Mock data for messages per month
    const mockData = {
        months: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        you: [78, 85, 102, 110, 125, 115, 90, 105, 118, 130, 145, 160],
        other: [92, 88, 95, 120, 132, 105, 88, 115, 125, 140, 138, 152],
    }

    // Series data for the chart
    const series = [
        {
            name: "You",
            data: mockData.you,
        },
        {
            name: "Other",
            data: mockData.other,
        },
    ]

    // ApexCharts options
    const options: ApexOptions = {
        chart: {
            type: "line",
            toolbar: {
                show: false,
            },
            fontFamily: "inherit",
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            },
        },
        colors: ["#3b82f6", "#a855f7"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 3,
            curve: "smooth",
        },
        grid: {
            borderColor: "#e5e7eb",
            row: {
                colors: ["#f8fafc", "transparent"],
                opacity: 0.5,
            },
        },
        markers: {
            size: 6,
            colors: ["#ffffff"],
            strokeColors: ["#3b82f6", "#a855f7"],
            strokeWidth: 3,
        },
        xaxis: {
            categories: mockData.months,
            labels: {
                style: {
                    colors: "#64748b",
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            title: {
                text: "Message Count",
                style: {
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#64748b",
                },
            },
            min: 0,
            max: 200,
            tickAmount: 5,
            labels: {
                style: {
                    colors: "#64748b",
                    fontSize: "12px",
                },
            },
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            fontSize: "14px",
            markers: {
                width: 10,
                height: 10,
                radius: 50,
            },
            itemMargin: {
                horizontal: 15,
                vertical: 5,
            },
        },
        tooltip: {
            theme: "light",
            y: {
                formatter: function (val: number) {
                    return val + " messages";
                },
            },
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    markers: {
                        size: 4,
                    },
                },
            },
        ],
    }

    // Only render the chart after component has mounted
    if (!mounted) {
        return <div className="w-full h-[300px] flex items-center justify-center">Loading chart...</div>
    }

    return (
        <div className="w-full h-[300px]">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height="100%"
                width="100%"
            />
        </div>
    )
}
