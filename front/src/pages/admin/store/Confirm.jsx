import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_confirm_request} from '../../../reducers/admin/adminStoreConfirm.js';
import {admin_confirm_del_request} from '../../../reducers/admin/adminStoreConfirm.js';
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
    console.log('-----------------',registers)
    console.log('----------------->',registers.length)
    
    const check = Array(a).fill(false)
    console.log(check)
    let checkArr = []
    const checkHandler = (e) => {
        const idx = e.target.value
        console.log(idx)
        if(!check[idx-1]){
            check[idx-1]=true
            checkArr.push(idx)
        }else{
            check[idx-1]=false
            checkArr = checkArr.filter(v => v !== idx)
        }
        console.log(checkArr)
    }

    const onDelete = (e) => {
        e.preventDefault()
        dispatch(admin_confirm_del_request(checkArr))
         
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
                                                    <label htmlFor="cancel">반려</label>
                                                    <input type="radio" name="cancel" id="cancel1" />
                                         
                                                    <label htmlFor="cancel">승인</label>
                                                    <input type="radio" name="access" id="access1" />
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