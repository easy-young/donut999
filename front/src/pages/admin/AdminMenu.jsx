import {Ol,AdminMenuDiv} from '../../components/styles/AdminStyles'
import { Link } from "react-router-dom"
import {Li} from '../../components/styles/AdminStyles'


const AdminMenu = ()=>{


    return (
        <>  
            <AdminMenuDiv>
                <div>
                    <h2 style={{color:'#ff45c3'}}>STORE</h2>
                    <Ol>
                        <Link to='/dt/admin/menu/store/confirm'><Li>신규요청확인</Li></Link>
                        <Link to='/dt/admin/menu/store/setting'><Li>스토어관리</Li></Link>
                    </Ol>
                </div>
                <div>
                    <h2 style={{color:'#ff650a'}}>USER</h2>
                    <Ol>
                        <Link to='/dt/admin/menu/user/setting'><Li>사용자관리</Li></Link>
                    </Ol>
                </div>
                <div>
                    <h2 style={{color:'#8f13ff'}}>REVIEW</h2>
                    <Ol>
                        <Link to='/dt/admin/menu/review/setting'><Li>리뷰관리</Li></Link>
                    </Ol>
                </div>
            </AdminMenuDiv>
        </>
    )
}

export default  AdminMenu