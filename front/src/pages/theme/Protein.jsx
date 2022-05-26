import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { theme_protein_request } from "../../reducers/theme.js";

const Protein = () => {
    const stores = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect( () => {  
        getProtein()
    },[dispatch])

    const getProtein = () => {
        dispatch({type: theme_protein_request.toString()})
    }

    const proteinList = () => {
        const proteinList = stores.theme.protein.result
        console.log(proteinList)
        // return (
        //     proteinList.map(v =>
        //         <li>{v.idx}</li>,
        //         <li>{v.name}</li>,
        //         <li>{v.stationKor}</li>,
        //         <li>{v.line}</li>,
        //         <li>{v.address}</li>,
        //         <li>{v.operhour}</li>    
        //     )
        // )
        proteinList.map((v) => {
            return (
                <li>{v.idx}</li>,
                <li>{v.name}</li>,
                <li>{v.stationKor}</li>,
                <li>{v.line}</li>,
                <li>{v.address}</li>,
                <li>{v.operhour}</li>  
            )
        })
    }

    return (
        <>
        {proteinList()}
        </>
    )
};

export default Protein;