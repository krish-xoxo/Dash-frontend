import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

function Ghar() {

    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setName(res.data.name);
                    console.log(res.data.name);
                    navigate('/Dash')
                } else {
                    setAuth(false);
                    setMessage(res.data.Message);
                    console.log(res.data.Message);
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const data = [
        {
            name: 'Plum',
            2021: 4000,
            2022: 2400,
            amt: 2400,
        },
        {
            name: 'Empuls',
            2021: 3000,
            2022: 1398,
            amt: 2210,
        },
        {
            name: 'Compass',
            2021: 2000,
            2022: 9800,
            amt: 2290,
        },
    ];

    return (
        <main className="main-container">

            <div>
                {
                    auth ?
                        <div>
                            <h3 > Welcome back, {name} ..</h3>
                        </div>
                        :
                        <div>
                            <h3>{message}</h3>
                        </div>
                }
            </div>

            <div className="charts">
                <div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 20,
                                left: 20,
                                bottom: 5,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="2021" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <Bar dataKey="2022" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='boom'>
                <p className='text-center'>no. of users vs our product for the year 21'-22 </p>
            </div>
            <h5 className='text-center'> Please update your profile from Edit Profile section.</h5>
        </main>
    )
}

export default Ghar; 