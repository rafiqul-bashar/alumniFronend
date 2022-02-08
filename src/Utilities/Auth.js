import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import userApi from './userApi';

const Auth = () => {
    const [admin, setAdmin] = useState(false);
    const [loadingState, setLoadingState] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()
    const { reset } = useForm()
    // (getSessionStorageOrDefault('user', ''))
    // function getSessionStorageOrDefault(key, defaultValue) {
    //     const stored = sessionStorage.getItem(key);
    //     if (!stored) {
    //         return defaultValue;
    //     }
    //     return JSON.parse(stored);
    // }

    //Register User Data
    const getUserData = (key, defaultValue) => {
        let data = sessionStorage.getItem(key)
        data = JSON.parse(data)
        if (data) {
            return data;
        }
        return defaultValue
    }
    const [user, setUser] = useState(getUserData('user', {}))

    const registerUser = async (data) => {
        try {
            const newUser = { name: data.name, email: data.email, phone: data.phone, address: data.address };
            let res = await userApi.post("/users", newUser);
            if (res.data) { reset() };
        } catch (error) {
            // window.location.reload();
            console.log(error)
        } finally {
            toast({
                title: 'Account created Successfully.',
                description: "We've created your account for you. Login to continue",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            navigate('/login')
        }
    };

    //Get User Data from DB on Login

    const getUser = async (email) => {
        setLoadingState(true)
        try {
            const res = await userApi.get(`/users/${email}`);
            setUser(res.data)
            sessionStorage.setItem('user', JSON.stringify(res.data));
            if (res.data.isAdmin === true) {
                setAdmin(true);
            }
        } catch (error) {
            window.location.reload();
            console.log(error);
        } finally {
            setLoadingState(false)
            navigate('/')
        }
    };
    const logOut = () => {
        setUser({})
        sessionStorage.clear()

    }
    return { user, admin, getUser, registerUser, logOut, loadingState }
};

export default Auth;