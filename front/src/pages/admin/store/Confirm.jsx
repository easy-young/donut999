import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_confirm_request} from '../../../reducers/admin/adminStoreConfirm.js';
// import {admin_del_review_request} from '../../../reducers/admin/adminDelReview.js';
import { useEffect } from 'react';
import {Div, Dbutton, Table, Tr, Td} from '../../../components/styles/AdminTable';
import { AuthButton } from "../../../components/styles/AdminStyles";

const Confirm = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:admin_store_confirm_request.toString()})
    },[dispatch])

    const registers = useSelector(state=>state.adminConfirm.register)
    console.log('re',registers)
    // const onDeleteReview = (e) => {
    //     e.preventDefault()
    //     const {value} = e.target.reviewIdx
    //     dispatch(admin_del_review_request(value))
    // }

    return(
        <>
            <h2 style={{textAlign:'center', marginTop:'4%'}}>Confirm New Store</h2>
                <Div style={{marginTop:'3%'}}>
                    <Table style={{width:'90%'}}>
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
                                <Td>상태</Td>
                                <Td>
                                    <label for = "registerDel">
                                        <Dbutton type="submit">삭제</Dbutton>
                                    </label>
                                </Td>
                            </Tr>
                        </thead>
                        <tbody>
                            {registers && registers.map ((x) => {
                                return(
                                    <>
                                        <Tr>
                                            <Td>{x.idx}</Td>
                                            <Td>{x.email}</Td>
                                            <Td><Link to = {"/dt/admin/menu/store/confirm/"+x.idx}>{x.store}</Link></Td>
                                            <Td>{x.menu}</Td>
                                            <Td>{x.address}</Td>
                                            <Td>{x.contact}</Td>
                                            <Td>{x.sns}</Td>
                                            <Td>{x.stamp}</Td>
                                            <Td>
                                                <label for="cancel">반려</label>
                                                <input type="radio" name="cancel" id="cancel1" />
                                                <label for="cancel">보류</label>
                                                <input type="radio" name="pause" id="pause1" />
                                                <label for="cancel">승인</label>
                                                <input type="radio" name="access" id="access1" />
                                            </Td>
                                            <Td>
                                                <form method="post">
                                                    <input type="checkbox" name = "registerDel" value={x.idx} />
                                                </form>
                                            </Td>
                                        </Tr>
                                    </>
                                );
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

export default Confirm