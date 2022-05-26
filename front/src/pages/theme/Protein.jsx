import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { protein_request } from "../../reducers/theme.js";

const Protein = () => {
    const stores = useSelector(state => state)
    const dispatch = useDispatch()


    const getProtein =  () => {
        dispatch({type: protein_request.toString()})
    }

    const proteinList = stores.theme.protein.result.map((v) => {
        return(
            <ul>
                <li>{v.idx}</li>
                <li>{v.name}</li>
                <li>{v.stationKor}</li>
                <li>{v.line}</li>
                <li>{v.address}</li>
                <li>{v.operhour}</li>
                <li><a href={v.website}>{v.website}</a></li>
                <li>{v.menu}</li>
                <li>{v.beverage}</li>
                <li>{v.tel}</li>
                <li>{v.intro}</li>
            </ul>
        )
    })

    useEffect( () => {  
        getProtein()
    },[dispatch])


    return (
        <>
            {proteinList}
        </>
    
    )
};

export default Protein;