
import {useDispatch, useSelector} from 'react-redux'
import {admin_store_request} from '../../../reducers/admin'
import { useEffect } from 'react'




const StoreSetting = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:admin_store_request.toString()})
    },[dispatch])
    //dispatch({type:admin_store_request.toString()})
    const name = useSelector(state=>state.admin.name)
    

    return(
        <>  
            <h2>STORE</h2>
            <ol>
                {name && name.map( x => {return <li>{x.name}</li>})}
            </ol>
        </>
    )
}

export default StoreSetting