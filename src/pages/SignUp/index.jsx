import { Container, Form, Background} from "./style"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"

import { Link } from "react-router-dom"

import { FiMail, FiLock, FiUser} from "react-icons/fi"

export function SignUp(){
    
    return (
        <Container>

        <Background/>

            <Form>

                <h1>
                    Rocket Notes
                </h1>

                <p>
                Aplicação para salvar e gerenciar seus links úteis.
                </p>

                <h2>
                    Crie sua conta
                </h2>

                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                
                <Button title="Cadastrar"/>


                <Link to="/">
                    Volte para o login
                </Link>



            </Form>

        </Container>
    )
}