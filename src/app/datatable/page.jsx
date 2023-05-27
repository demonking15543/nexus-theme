"use client"

import React, {useState} from 'react'

export default function page() {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [tableData, setTableData] = useState([])
   const resetFields = () => {
    setName('')
    setMobile('')
   }
    const handleSubmit = (e) => {
        e.preventDefault()
        setTableData(prev=>[...prev, {name, mobile}])
           resetFields()    

        

    }
    console.log(tableData)
  return (
    <div>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Mobile</th>
            </tr>
        </thead>
        <tbody>
            {
            tableData.length > 0 &&
            tableData.map((data, idx)=>(
                <tr key={idx}>
                <td>{data?.name}</td>
                <td>{data?.mobile}</td>
            </tr>

                
            ))
                          }
           
        </tbody>
    </table>

    <div>
        <form  onSubmit={handleSubmit}>
        <input type="text"  value={name}  placeholder='Enter your name'
        onChange={(e)=>setName(e.target.value)}
        /> 
        <input type="tel"  value={mobile}  placeholder='Enter your mobile'
                onChange={(e)=>setMobile(e.target.value)}

        /> 
        <button type='submit'>Add</button>
        </form>



    </div>
    </div>
  )
}
