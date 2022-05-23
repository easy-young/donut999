import { Link  } from "react-router-dom";
import { AuthButton,AdminInput,BigButton } from "../../../components/styles/AdminStyles";
import {useDispatch, useSelector} from 'react-redux';
import {admin_black_request} from '../../../reducers/admin/adminBlack.js';
import {admin_new_black_request} from '../../../reducers/admin/adminNewBlack.js';
import {admin_del_black_request} from '../../../reducers/admin/adminDelBlack.js';
import { useEffect } from 'react';

const UserSetting = () => {

    const dispatch = useDispatch()
    
    const black = useSelector(state=>state.adminBlack.user)

    useEffect(()=>{
        dispatch({type:admin_black_request.toString()})

    },[dispatch])


    const blackSubmit = (e) => {
        e.preventDefault()
        const {kakaoEmail} = e.target
        const payload = {
            email:kakaoEmail.value
        }

        dispatch(admin_new_black_request(payload)) 
    }

    const delSubmit = (e) => {
        e.preventDefault()
        const {value} = e.target.kemail

        dispatch(admin_del_black_request(value)) 
    }

    return(
        <>
            <div>
                <h2 style={{textAlign:'center'}}>~ Black List ~</h2>
                <form method="post" style={{textAlign:'center', marginTop:'5%' }} onSubmit={blackSubmit}>
                    <AdminInput type="text" name="kakaoEmail" placeholder="블랙 리스트 회원을 추가해 주세요."/>
                    <BigButton type="submit" style={{marginLeft:"2%", fontSize:'1.3rem'}}>블랙리스트등록</BigButton>
                </form>
            </div>
            <div style={{width:'40%', margin:'3% auto', fontSize:'20px'}}>
                <ol>
                    {black && black.map((x)=>{
                        return(
                            <>
                                <li style={{marginTop:'3%'}}>
                                    {x.email}
                                    
                                    <Link to ={"/dt/admin/menu/user/setting/checkblack/"+x.email}>
                                        <span style={{marginLeft:'3%'}}><button>작성 리뷰</button></span>
                                    </Link>
                                    <span>
                                        <form method="post" onSubmit={delSubmit} style={{marginLeft:'3%',display:'inline'}}>
                                            <input type="hidden" name = "kemail" value={x.email}/>
                                            <button type="submit">일반 회원</button>
                                        </form>
                                    </span>
                                    <p>{x.stamp}</p>
                                </li>
                            </>
                        )
                    })
                    }
                </ol>
            </div>
            <Link to="/dt/admin/menu">
                <div style={{textAlign:"center"}}>
                    <AuthButton >Admin Menu</AuthButton>
                </div>
            </Link>
        </>
    )
}

export default UserSetting