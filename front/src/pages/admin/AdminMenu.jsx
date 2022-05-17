import {Ol,AdminMenuDiv} from '../../components/styles/AdminStyles'
import { Link } from "react-router-dom"


const AdminMenu = ()=>{

    return (
        <>  
            <AdminMenuDiv>
                <div>
                    <h2 style={{color:'#ff45c3'}}>STORE</h2>
                    <Ol>
                        <li><Link to='/dt/admin/menu/store/confirm'>신규요청확인</Link></li>
                        <li><Link to='/dt/admin/menu/store/setting'>스토어관리</Link></li>
                    </Ol>
                </div>
                <div>
                    <h2 style={{color:'#ff650a'}}>USER</h2>
                    <Ol>
                        <li><Link to='/dt/admin/menu/user/setting'>사용자관리</Link></li>
                    </Ol>
                </div>
                <div>
                    <h2 style={{color:'#8f13ff'}}>REVIEW</h2>
                    <Ol>
                        <li><Link to='/dt/admin/menu/review/setting'>리뷰관리</Link></li>
                    </Ol>
                </div>
            </AdminMenuDiv>
        </>
    )
}

export default  AdminMenu