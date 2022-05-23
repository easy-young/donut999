import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {admin_review_request} from '../../../reducers/admin/adminReview.js';
import {admin_del_review_request} from '../../../reducers/admin/adminDelReview.js';
import { useEffect } from 'react';
import {Div, Dbutton, Table, Tr, Td} from '../../../components/styles/AdminTable';
import { AuthButton } from "../../../components/styles/AdminStyles";


const ReviewSetting = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:admin_review_request.toString()})
    },[dispatch])

    const review = useSelector(state=>state.adminReview.review)
    
    const onDeleteReview = (e) => {
        e.preventDefault()
        const {value} = e.target.reviewIdx
        dispatch(admin_del_review_request(value))
    }
    return(
        <>
            <h2 style={{textAlign:'center'}}>Review</h2>
            <Div>
                <Table>
                    <thead>
                        <Tr>
                            <Td>Idx</Td>
                            <Td>Text</Td>
                            <Td>Flavor</Td>
                            <Td>Atmosphere</Td>
                            <Td>Cheap</Td>
                            <Td>Service</Td>
                            <Td>Date</Td>
                            <Td></Td>
                        </Tr>
                    </thead>
                    <tbody>
                        {review && review.result.map ((x) => {
                            return(
                                <>
                                    <Tr>
                                        <Td>{x.idx}</Td>
                                        <Td>{x.text}</Td>
                                        <Td>{x.flavor}</Td>
                                        <Td>{x.atmosphere}</Td>
                                        <Td>{x.cheap}</Td>
                                        <Td>{x.service}</Td>
                                        <Td>{x.stamp}</Td>
                                        <Td>
                                            <form method="post" onSubmit={onDeleteReview} style={{display:'inline'}}>
                                                <input type="hidden" name = "reviewIdx" value={x.idx} />
                                               
                                                <Dbutton type="submit">삭제</Dbutton>
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

export default ReviewSetting