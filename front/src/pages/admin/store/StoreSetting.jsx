import { Link, useParams  } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_request} from '../../../reducers/admin/admin.js';
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

    

    return(
        <> 
        
            <h2>STORE</h2>
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
                                            <Dbutton>삭제</Dbutton>
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
                                        <Dbutton>삭제</Dbutton>
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
                                        <Dbutton>삭제</Dbutton>
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