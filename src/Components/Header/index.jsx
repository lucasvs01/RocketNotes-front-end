import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri"
import { useAuth } from "../../hooks/auth"; 
import { api } from "../../services/api";
import avatar_placeholder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";

export function Header(){

    const {SignOut, user} = useAuth();
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        SignOut();

    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatar_placeholder;

    return (
        <Container>
            <Profile to="/profile">
                
                <img src={avatarUrl} alt={user.name} />

                <div>

                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>

                </div>

            </Profile>

            
            <Logout onClick={handleSignOut}>

                <RiShutDownLine/>

            </Logout>


        </Container>
    )
}