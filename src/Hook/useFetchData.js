import React, { useEffect, useReducer } from 'react';
import { db } from '../Config/configFirebase';

const initalState = {
    posts: [],
    auth: "",
    loading: false,
    error: false
}

const ACTION = {
    REQUEST_DATA: "requret-data",
    FETCH_DATA: "fetch-data",
    ERROR_DATA: "error-data"
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.REQUEST_DATA:
            return {
                ...state,
                loading: true
            }
        case ACTION.FETCH_DATA:
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        case ACTION.ERROR_DATA:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state
    }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initalState);

    useEffect(() => {
        dispatch({ type: ACTION.REQUEST_DATA });
        const getDataFrom = () => {
            try {
                db.collection('Post').onSnapshot(snapshot => {
                    const snap = snapshot.docs.map(doc => doc.data())
                    dispatch({ type: ACTION.FETCH_DATA, posts: snap })
                })
            } catch (err) {
                dispatch({ type: ACTION.ERROR_DATA, error: err })
            }
        }
        getDataFrom();
    }, []);

    return state;
}