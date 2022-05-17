import {Ol,AdminMenuDiv} from '../../components/styles/AdminStyles'
import { Link } from "react-router-dom"


const AdminMenu = ()=>{

    return (
        <>  
            <AdminMenuDiv>
                <div>
                    <h2 style={{color:'#ff45c3'}}>STORE</h2>
                    <Ol>
                        <li>신규요청확인</li>
                        <li>신규등록</li>
                        <li>스토어관리</li>
                    </Ol>
                </div>
                <div>
                    <h2 style={{color:'#ff650a'}}>USER</h2>
                    <Ol>
                        <li>사용자 관리</li>
                    </Ol>
                </div>
                <div>
                    <h2 style={{color:'#8f13ff'}}>REVIEW</h2>
                    <Ol>
                        <li>리뷰 관리</li>
                    </Ol>
                </div>
            </AdminMenuDiv>
        </>
    )
}

export default  AdminMenu