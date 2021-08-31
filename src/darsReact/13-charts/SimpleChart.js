import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar} from 'recharts';
const data=[
    {name:"Page A",
     uv:4000,
     pv:2400,
     amt:2400},
     {name:"Page B",
     uv:3000,
     pv:1398,
     amt:2210},
     {name:"Page C",
     uv:2000,
     pv:3800,
     amt:2500},
     {name:"Page D",
     uv:2000,
     pv:9800,
     amt:2000},
     {name:"Page E",
     uv:1890,
     pv:4800,
     amt:2181},
     {name:"Page F",
     uv:2390,
     pv:3800,
     amt:2500},
     {name:"Page G",
     uv:3490,
     pv:4300,
     amt:2100}
]
// const data=[
//     {name:"A", uv:-1405, pv:-4563, amt:-3500},
//     {name:"B", uv:5605, pv:-5263, amt:-4500},
//     {name:"C", uv:4505, pv:1633, amt:3562},
//     {name:"D", uv:1200, pv:4223, amt:1562},
//     {name:"E", uv:2325, pv:2113, amt:5560},
//     {name:"F", uv:4400, pv:1233, amt:6511},
//     {name:"G", uv:4300, pv:3563, amt:1562},
// ]
// class SimpleRe extends PureComponent {
//     state = {  }
//     render() { 
//         return ( 
//             <ResponsiveContainer
            
//             >
//                 <LineChart
//                 data={data}
//                 margin={{top:20, left:20}}
//                 >
//                     <CartesianGrid strokeDasharray="4 4"/>
//                     <XAxis dataKey="name"/>
//                     <YAxis/>
//                     <Tooltip/>
//                     <Line type="monotone" dataKey="uv" activeDot={{r:7}}/>
//                     <Line type="monotone" stroke="green" dataKey="pv"/>
//                 </LineChart>
//             </ResponsiveContainer>
//          );
//     }
// }
 
// export default SimpleRe;

class SimpleChart extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top:5, right:30, left:20, bottom:5
                }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r:8}}/>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                    
                </LineChart>
            </ResponsiveContainer>
            <Link to="/grafik">Grafik</Link>
            </>
         );
    }
}
 
export default SimpleChart;