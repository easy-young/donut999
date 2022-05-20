import { Link, useParams  } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_request} from '../../../reducers/admin/admin.js';
import {admin_delete_store_request} from '../../../reducers/admin/deleteStore'
import { useEffect } from 'react';
import {Div, Ebutton, Dbutton, Table, Tr, Td} from '../../../components/styles/AdminTable';
import { AuthButton } from "../../../components/styles/AdminStyles";


const StoreSetting = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:admin_store_request.toString()})
    },[dispatch])
    //dispatch({type:admin_store_request.toString()})
    const stores = useSelector(state=>state.admin.store)

    const onDelete = (e) => {
        e.preventDefault()
        const {value} = e.target.storeidx
        dispatch(admin_delete_store_request(value))
    }

    return(
        <> 
        
            <h2 style={{textAlign:'center'}}>STORE</h2>
            <Div>
            <Table>
                <thead>
                    <Tr>
                        <Td>idx</Td>
                        <Td>name</Td>
                        <Td>ADMIN</Td>
                    </Tr>
                </thead>
                <tbody>
                    {stores && stores.map ((x, i) => {
                        if(x.idx < 21){
                            return(
                                <>
                                    <Tr>
                                        <Td>{x.idx}</Td>
                                        <Td>{x.name}</Td>
                                        <Td>
                                            <Link to={"/dt/admin/menu/store/setting/"+x.idx}><Ebutton>수정</Ebutton></Link>
                                            <form method="post" onSubmit={onDelete} style={{display:'inline'}}>
                                                    <input type="hidden" name = "storeidx" value={x.idx} />
                                                    <input type="hidden" name="idx" value="" />
                                                    <Link to={"/dt/admin/menu/store/setting"}><Dbutton type="submit">삭제</Dbutton></Link>
                                            </form>
                                        </Td>
                                    </Tr>
                                    
                                </>
                            );
                        }
                    })}
                </tbody>
            </Table>
            <Table>
                <thead>
                    <Tr>
                        <Td>idx</Td>
                        <Td>name</Td>
                        <Td>ADMIN</Td>
                    </Tr>
                </thead>
                <tbody>
                    {stores && stores.map ((x) => {
                        if(20 < x.idx && x.idx < 41){
                            return(
                                <Tr>
                                    <Td>{x.idx}</Td>
                                    <Td>{x.name}</Td>
                                    <Td>
                                        <Link to={"/dt/admin/menu/store/setting/"+x.idx}><Ebutton>수정</Ebutton></Link>
                                        <form method="post" onSubmit={onDelete} style={{display:'inline'}}>
                                                <input type="hidden" name = "storeidx" value={x.idx} />
                                                <input type="hidden" name="idx" value="" />
                                                <Link to={"/dt/admin/menu/store/setting"}><Dbutton type="submit">삭제</Dbutton></Link>
                                        </form>
                                    </Td>
                                </Tr>
                            );
                        }
                    })}
                </tbody>
            </Table>
            <Table>
                <thead>
                    <Tr>
                        <Td>idx</Td>
                        <Td>name</Td>
                        <Td>ADMIN</Td>
                    </Tr>
                </thead>
                <tbody>
                    {stores && stores.map ((x) => {
                        if(40 < x.idx && x.idx < 61){
                            return(
                                <Tr>
                                    <Td>{x.idx}</Td>
                                    <Td>{x.name}</Td>
                                    <Td>
                                        <Link to={"/dt/admin/menu/store/setting/"+x.idx}><Ebutton>수정</Ebutton></Link>
                                        <form method="post" onSubmit={onDelete} style={{display:'inline'}}>
                                                <input type="hidden" name = "storeidx" value={x.idx} />
                                                <input type="hidden" name="idx" value="" />
                                                <Link to={"/dt/admin/menu/store/setting"}><Dbutton type="submit">삭제</Dbutton></Link>
                                        </form>
                                    </Td>
                                </Tr>
                            );
                        }
                    })}
                </tbody>
            </Table>
            </Div>
            <Link to="/dt/admin/menu">
                <div style={{textAlign:"center"}}>
                    <AuthButton>Admin Menu</AuthButton>
                </div>
            </Link>

            
        </>
    )
}

export default StoreSetting