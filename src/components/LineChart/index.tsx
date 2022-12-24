import React, { useEffect } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { XAxis, YAxis, AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'
import { formatAmount } from '../../utils/formatInfoNumbers'

export type LineChartProps = {
  data: any[]
  setHoverValue: Dispatch<SetStateAction<number | undefined>> // used for value on hover
  setHoverDate: Dispatch<SetStateAction<string | undefined>> // used for label of value
} & React.HTMLAttributes<HTMLDivElement>

// Calls setHoverValue and setHoverDate when part of chart is hovered
// Note: this NEEDs to be wrapped inside component and useEffect, if you plug it as is it will create big render problems (try and see console)
const HoverUpdater = ({ payload, setHoverValue, setHoverDate }  : {payload:any, setHoverValue:any, setHoverDate:any} ) => {
  useEffect(() => {
    setHoverValue(payload.value)
    setHoverDate(payload.time.toLocaleString("en-US", { year: 'numeric', day: 'numeric', month: 'short' }))
  }, [payload.value, payload.time, setHoverValue, setHoverDate])
  return null
}

/**
 * Note: remember that it needs to be mounted inside the container with fixed height
 */
const LineChart = ({ data, setHoverValue, setHoverDate }: LineChartProps) => {
  if (!data || data.length === 0) {
    return <></>
  }

  // return (
  //         <AreaChart
  //         width={300}
  //         height={300}

  //                 data={dat}
  //                 margin={{
  //                   top: 10,
  //                   right: 30,
  //                   left: 0,
  //                   bottom: 0,
  //                 }}
  //               >
  //                 <XAxis dataKey="name" />
  //                 <YAxis />
  //                 <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  //       </AreaChart>) 
  return (
    <ResponsiveContainer width="95%" height={350}>
      <AreaChart
        data={data}
        onMouseLeave={() => {
          if (setHoverDate) setHoverDate(undefined)
          if (setHoverValue) setHoverValue(undefined)
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={"#7f49e4a1"} stopOpacity={0.5} />
            <stop offset="100%" stopColor={"#FFFFFF"} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tickFormatter={(time) => time.toLocaleDateString(undefined, { day: '2-digit' })}
          minTickGap={10}
        />
        <YAxis
          dataKey="value"
          tickCount={6}
          scale="linear"
          axisLine={false}
          tickLine={false}
          fontSize="12px"
          tickFormatter={(val) => `$${formatAmount(val)}`}
          orientation="right"
          tick={{ dx: 10, fill: "#7f49e4a1" }}
        />
        <Tooltip
          cursor={{ stroke: "#FFFFFF" }}
          contentStyle={{ display: 'none' }}
          formatter={(tooltipValue: any, name: any, props: { payload: any }) => (
            <HoverUpdater
              payload={props.payload}
              setHoverValue={setHoverValue}
              setHoverDate={setHoverDate}
            />
          )}
        />
        <Area dataKey="value" type="monotone" stroke={"#7f49e4a1"} fill="url(#gradient)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default LineChart
