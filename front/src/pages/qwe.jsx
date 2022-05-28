import React,{ useEffect } from 'react'
import axios from 'axios'

const Qwe = () => {

    const submitHandler = async (e) => {
        e.preventDefault()
        //console.log(e.target.storename.value)
        const data = { storename: e.target.storename.value}
        // window.location.href= `http://localhost:4000/register/request`
        const result = await axios.post(`http://localhost:4000/register/request`, data)
    }
   
   return(
   <>
        <form onSubmit ={ submitHandler } method='post'>
            <input type='text' name='storename'/>
            <input type='submit'/>
        </form>
    </>
   )
}

export default Qwe;