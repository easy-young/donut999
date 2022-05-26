import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_confirm_request} from '../../../reducers/admin/adminStoreConfirm.js';
import {admin_confirm_del_request} from '../../../reducers/admin/adminStoreConfirm.js';
import {admin_confirm_state_request} from '../../../reducers/admin/adminStoreConfirm.js';
import { useEffect, useState } from 'react';
import {Div, Dbutton, Table, Tr, Td} from '../../../components/styles/AdminTable';
import { AuthButton } from "../../../components/styles/AdminStyles";

const Confirm = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:admin_store_confirm_request.toString()})
    },[dispatch])

    const registers = useSelector(state=>state.adminConfirm.register)
    const a = registers.length
  
    const check = Array(a).fill(false)
    let checkArr = []
    const checkHandler = (e) => {
        const idx = e.target.value
        if(!check[idx-1]){
            check[idx-1]=true
            checkArr.push(idx)
        }else{
            check[idx-1]=false
            checkArr = checkArr.filter(v => v !== idx)
        }
    }

    const onDelete = (e) => {
        e.preventDefault()
        dispatch(admin_confirm_del_request(checkArr))
         
    }

    const radioHandler = (e) => {
        e.preventDefault()
        const {value} = e.target
        console.log(value)
        dispatch(admin_confirm_state_request)
    }

    const radioSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
    }
    
    const sortHandler = (e) => {
        e.preventDefault()
        let target = e.target.value
        if(target == true){
            dispatch()
        }else if(target == false){
            dispatch()
        }
    }

    return(
        <>
            <h2 style={{textAlign:'center', marginTop:'4%'}}>Confirm New Store</h2>
                <Div style={{marginTop:'3%'}}>
                    <form method="post" name="delform" onSubmit={onDelete}> 
                        <Table style={{width:'100%'}}>
                            <thead>
                                <Tr>
                                    <Td>Idx</Td>
                                    <Td>Email</Td>
                                    <Td>Store</Td>
                                    <Td>Menu</Td>
                                    <Td>Address</Td>
                                    <Td>Contact</Td>
                                    <Td>SNS or Web</Td>
                                    <Td>Application Date</Td>
                                    <Td><select name="sort" onChange={sortHandler}>
                                            <option value="false">반려</option>
                                            <option value="true">승인</option>
                                        </select></Td>
                                    <Td>
                                        <Dbutton type="submit">삭제</Dbutton>
                                    </Td>
                                </Tr>
                            </thead>
                            <tbody>
                                {registers && registers.map ((x,i) => {
                                    return(
                                        
                                            <Tr key={i}>
                                                <Td>{x.idx}</Td>
                                                <Td>{x.email}</Td>
                                                <Td><Link to = {"/dt/admin/menu/store/confirm/"+x.idx}>{x.store}</Link></Td>
                                                <Td>{x.menu}</Td>
                                                <Td>{x.address}</Td>
                                                <Td>{x.contact}</Td>
                                                <Td>{x.sns}</Td>
                                                <Td>{x.stamp}</Td>
                                                <Td>
                                                    <form method="post" >
                                                        <label htmlFor="cancel1">반려</label>
                                                        <input type="radio" name={"radio"+x.idx} id="cancel1" value="false" onChange={radioHandler}/>
                                            
                                                        <label htmlFor="access1">승인</label>
                                                        <input type="radio" name={"radio"+x.idx} id="access1" value="true" onChange={radioHandler}/>
                                                    </form>
                                                </Td>
                                                <Td>
                                                    <input type="checkbox" name = {"registerDel"+x.idx}  value={x.idx} onChange={checkHandler}/>
                                                </Td>
                                            </Tr>
                                     
                                    );
                                })} 
                            </tbody>
                        </Table>
                    </form>
                </Div>
                <Link to="/dt/admin/menu">
                    <div style={{textAlign:"center"}}>
                        <AuthButton>Admin Menu</AuthButton>
                    </div>
                </Link>

        </>
    )
}

export default Confirm