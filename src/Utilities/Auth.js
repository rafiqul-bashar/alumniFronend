import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userApi from './userApi';


const Auth = () => {
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    
    // (getSessionStorageOrDefault('user', ''))
    // function getSessionStorageOrDefault(key, defaultValue) {
        //     const stored = sessionStorage.getItem(key);
        //     if (!stored) {
    //         return defaultValue;
    //     }
    //     return JSON.parse(stored);
    // }

    //Register User Data
    const getUserData = (key,defaultValue) => {
        let data = sessionStorage.getItem(key)
        data = JSON.parse(data)
        if(data){
            return data;
        }
        return defaultValue
    }
    const [user, setUser] = useState(getUserData('user',{}))

    const registerUser = async (data) => {
        try {
            const newUser = { name: data.name, email: data.email, phone: data.phone, address: data.address };
            let res = await userApi.post("/users", newUser);
            console.log(res.data);

        } catch (error) {
            // window.location.reload();
            console.log(error);
        }
    };

    //Get User Data from DB on Login

    const getUser = async (email) => {
        try {
            const res = await userApi.get(`/users/${email}`);
            setUser(res.data)
            sessionStorage.setItem('user', JSON.stringify(res.data));
            if (res.data.isAdmin === true) {
                setAdmin(true);
            }
            navigate('/home')
        } catch (error) {
            window.location.reload();
            console.log(error);
        }
    };
    const logOut = () => {
        setUser({})
        sessionStorage.clear()

    }
    return { user, admin, getUser, registerUser, logOut }
};

export default Auth;