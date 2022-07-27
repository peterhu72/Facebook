import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    let [loggedInUser, setLoggedInUser] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials: true})
            .then(res =>{
                console.log(res)
                if(res.data.results){
                    setLoggedInUser(res.data.results)
                } 
            })
            .catch(err=>{
                console.log(err)
                navigate("/")
            })
    })

    const logout = () =>{
        axios.get("http://localhost:8000/api/users/logout", {withCredentials: true})
            .then(res =>{
                navigate("/")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>Welcome {loggedInUser.firstName}</h1>
            <button className='btn btn-info' onClick={logout}>Logout</button>
        </div>
    );
};

export default Menu;