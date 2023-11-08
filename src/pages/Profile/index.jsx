import { Container, Form, Avatar } from "./style";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"

export function Profile(){

    return(

        <Container>
            <header>

                <Link to="/">
                    <FiArrowLeft/>
                </Link>

            </header>

            <Avatar>

                <img src="https://github.com/lucasvs01.png" alt="Foto do usuário" />

                <label htmlFor="avatar">
                    <FiCamera/>

                    <input type="file" id="avatar" />
                </label>

            </Avatar>

            <Form>
                <Input placeholder="Nome" type="text" icon={FiUser}></Input>
                <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
                <Input placeholder="Senha atual" type="password" icon={FiLock}></Input>
                <Input placeholder="Nova senha" type="password" icon={FiLock}></Input>

                <Button title="Salvar"></Button>
            </Form>
        </Container>
    )
}