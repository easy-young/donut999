import React,{ useEffect } from 'react'
import axios from 'axios'

const Ttest = () => {

    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append()
    }
   
   return(
   <>
        <form method='post' encType="multipart/form-data" onSubmit = { submitHandler}>
            <span><label htmlFor="img1">파일 선택</label></span>
            <input type="file" name="img1" /><br/>
            <span><label htmlFor="img2">파일 선택</label></span>
            <input type="file" name="img2" /><br/>
            <span><label htmlFor="img3">파일 선택</label></span>
            <input type="file" name="img3" />
            <input type='submit'/>
        </form>
    </>
   )
}

export default Ttest;