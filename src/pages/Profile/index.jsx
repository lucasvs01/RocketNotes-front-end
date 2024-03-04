import { Container, Form, Avatar } from "./style";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatar_placeholder from "../../assets/avatar_placeholder.svg"

export function Profile(){

    const {user, ProfileUpdate} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldpassword] = useState("");
    const [newPassword, setNewpassword] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatar_placeholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1)
      }

    async function handleUpdate(){

    const updated = {
        name,
        email,
        password: newPassword,
        old_password: oldPassword

    }

    const userUpdated = Object.assign(user, updated)
    // return console.log(userUpdated)

       await ProfileUpdate({user: userUpdated, avatarFile})
    }

    function handleUpdateAvatar(event){
        const file = event.target.files[0]

        setAvatarFile(file)

        const imgPreview = URL.createObjectURL(file)
        setAvatar(imgPreview)
    }


    return(

        <Container>
            <header>

                <button type="button" onClick={handleBack}>
                    <FiArrowLeft/>
                </button>

            </header>

            <Avatar>

                <img src={avatar} alt="Foto do usuário" />

                <label htmlFor="avatar" onChange={handleUpdateAvatar}>
                    <FiCamera/>

                    <input type="file" id="avatar" />
                </label>

            </Avatar>

            <Form>
                <Input 
                    placeholder="Nome" 
                    type="text" 
                    icon={FiUser} 
                    value={name}
                    onChange={ e => {setName(e.target.value)}}>
                </Input>

                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={FiMail} 
                    value={email}
                    onChange={ e => {setEmail(e.target.value)}}
                    onClick={console.log(email)}
                    >
                </Input>

                <Input 
                    placeholder="Senha atual" 
                    type="password" 
                    icon={FiLock}
                    onChange={e => {setOldpassword(e.target.value)}}
                    >
                </Input>

                <Input 
                    placeholder="Nova senha" 
                    type="password" 
                    icon={FiLock}
                    onChange={e => {setNewpassword(e.target.value)}}
                    >
                </Input>

                <Button title="Salvar" onClick={handleUpdate}></Button>
            </Form>
        </Container>
    )
}