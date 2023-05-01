import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";

function dataTwitter(){
    const [results, setResults] = useState([]);
    const [favResultData, setFavResultdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFavResult()
    }, []);

    const getFavResult = async () => {
            console.log("test");
            const response = await  axios.get('http://localhost:4000/api/test');
            console.log(response.data);
            setFavResultdata(response.data.user);

    }
}

export default dataTwitter;