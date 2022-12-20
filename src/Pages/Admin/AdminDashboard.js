import React from 'react'
import {
    // main component
    Chart,
    // graphs
    Bars, Ticks,
    // wrappers
    Layer,
  } from 'rumble-charts';
  
  
function AdminDashboard() {
  return (
    <div>
       {/* <!-- Page content here --> */}
          
       <h1 className='text-center font-bold text-4xl py-4 text-orange-400'>DashBoard</h1>
          <div className='flex flex-col md:flex-row my-4 mx-auto'>
            <div className='bg-white p-5 mx-auto my-2 md:mx-8 border shadow-lg rounded-lg w-56'>
              <div className='text-center '>
                <h2 className='text-center text-xl font-bold py-1'>Order Today</h2>
                <p className='py-1 text-3xl'>100k</p>
              </div>
            </div>
            <div className='bg-white p-6 mx-auto my-2 md:mx-4 border shadow-lg rounded-lg w-56'>
              <div className='text-center '>
                <h2 className='text-center text-xl font-bold py-1'>Income</h2>
                <p className='py-1 text-3xl'>100k</p>
              </div>
            </div>
            <div className='bg-white p-6 md:mx-4 mx-auto my-2 border shadow-lg rounded-lg w-56'>
              <div className='text-center '>
                <h2 className='text-center text-xl font-bold py-1'>Pending Order</h2>
                <p className='py-1 text-3xl'>100k</p>
              </div>
            </div>
            <div className='bg-white p-6 md:mx-4 mx-auto my-2 border shadow-lg rounded-lg w-56'>
              <div className='text-center '>
                <h2 className='text-center text-xl font-bold py-1'>Order</h2>
                <p className='py-1 text-3xl'>100k</p>
              </div>
            </div>
          </div>
          <div className='md:py-10 bg-white md:mx-24 my-6'>
            <Chart className="md:min-w-full w-full"
              height={300}
              width={600}
              series={[
                {
                  data: [
                    1,
                    2,
                    3
                  ],
                  name: 'John'
                },
                {
                  data: [
                    5,
                    7,
                    11
                  ],
                  name: 'Jane'
                },
                {
                  data: [
                    13,
                    17,
                    19
                  ],
                  name: 'James'
                }
              ]}
              minY={0}
              style={{
                fontFamily: 'sans-serif',
                fontSize: '0.75em'
              }}
            >
              <Layer width="80%" height="90%" position="top center">
                <Ticks
                  axis="y"
                  lineLength="100%"
                  lineVisible
                  lineStyle={{
                    stroke: 'lightgray'
                  }}
                  labelStyle={{
                    dominantBaseline: 'middle',
                    fill: 'lightgray',
                    textAnchor: 'end'
                  }}
                  labelAttributes={{
                    x: -5
                  }}
                />
                <Ticks
                  axis="x"
                  label={function noRefCheck() { }}
                  labelStyle={{
                    dominantBaseline: 'text-before-edge',
                    fill: 'lightgray',
                    textAnchor: 'middle'
                  }}
                  labelAttributes={{
                    y: 3
                  }}
                />
                <Bars groupPadding="3%" innerPadding="0.5%" />
              </Layer>
            </Chart>
          </div>
    </div>
  )
}

export default AdminDashboard
