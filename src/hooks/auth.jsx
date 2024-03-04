import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api"

export const authContext = createContext({});


function AuthProvider({ children }){
    const [data, setData] = useState({})

    async function SignIn({email, password}){

        try {
            const response = await api.post("/sessions", {email, password})

            const { user, token } = response.data;

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({user, token})

            console.log(response)

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Náo foi possivel entrar.")
                
            }
        }
        
    }

    function SignOut(){
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")
        
        setData({})
    }

    async function ProfileUpdate({user, avatarFile}){
        try {
            await api.put("/user", user)

            if(avatarFile){
                const fileUploadForm = new FormData();

                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("user/avatar", fileUploadForm);

                user.avatar = response.data.avatar;
            }

            localStorage.setItem("@rocketnotes:user",JSON.stringify(user))

            setData({user, token: data.token})
            alert("Perfil atualizado!")
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Náo foi possivel atualizar o perfil.")
                console.log(error)
                
            }
        }    }

    useEffect( () => {

        const token = localStorage.getItem("@rocketnotes:token")
        const user = localStorage.getItem("@rocketnotes:user")

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({
                    token,
                    user: JSON.parse(user)
                })

        }

    }, [])

    return (
        <authContext.Provider value={{
            SignIn, 
            SignOut,
            user: data.user,
            ProfileUpdate
            }}>
            {children}
        </authContext.Provider>
    )
}

function useAuth(){

    const context = useContext(authContext);

    return context
}

export {AuthProvider, useAuth}