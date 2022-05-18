
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {admin_store_request,admin_store_success} from '../../../reducers/admin'




const StoreSetting = () => {
    const dispatch = useDispatch()
    //dispatch({type:admin_store_request.toString()})
    const name = useSelector(state=>state.admin.name)
    dispatch({type:admin_store_request.toString()})
    console.log(name)
   



    return(
        <>
            <div>
                {admin_store_success.name}
            </div>
        </>
    )
}

export default StoreSetting