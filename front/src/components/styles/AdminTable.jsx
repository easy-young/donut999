import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    justify-content: space-around;

`

export const Ebutton = styled.button`
    border:none;
    background-color: #ff5bb3;
    color:#fff;
`

export const Dbutton = styled.button`
    border:none;
    background-color: #ff4136;
    color:#fff;
`


export const Table = styled.table`
    text-align: center;
   

`

export const Tr = styled.tr`
    text-align: center;
    &:nth-child(1){
        font-weight:bold;
    }
    border-spacing: 1px 40px;
    border: 1px solid #fff;

    &>Td:nth-child(2){
        width:280px;
    }
   
`

export const Td = styled.td`
    text-align: center;

    border: 1px solid #fff;


    
   

`

