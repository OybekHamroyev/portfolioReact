import { Link } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data=[
    {ism:"Sarvar", ball:78}, {ism:"Navbahor", ball:56}, {ism:"Lobar", ball:94}, {ism:"Odil", ball:81},
    {ism:"Botir", ball:34}, {ism:"Vali", ball:56}, {ism:"Ismat", ball:48}, {ism:"Akmal", ball:97},

]
const Grafik = () => {
    return (
            <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}
                  margin={{top:20, left:2, right:0, bottom:2}}
                  >
                    <YAxis/>
                    <XAxis dataKey="ism"/>
                    <Line type="monotone" dataKey="ball" activeDot={{r:6}} stroke="orange"/>
                    <CartesianGrid strokeDasharray="5 5" stroke="blue"/>
                    <Tooltip/>
                    <Legend/>11
                </LineChart>
            </ResponsiveContainer>
            <Link to="/">orqaga</Link>
            </>            
    );
};

export default Grafik