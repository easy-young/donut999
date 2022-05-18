
import {useDispatch, useSelector} from 'react-redux'
import {admin_store_request} from '../../../reducers/admin'




const StoreSetting = () => {
    const dispatch = useDispatch()
    //dispatch({type:admin_store_request.toString()})
    const name = useSelector(state=>state.admin.name)
    dispatch({type:admin_store_request.toString()})
    
    const array = name.map(x=><li>{x.name}</li>)
    
    return(
        <>  
            <h2>STORE</h2>
            <ul>
                {array}
            </ul>
        </>
    )
}

export default StoreSetting