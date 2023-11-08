import { Container, Form } from "./style";
import { Header } from "../../Components/Header"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { NoteItem } from "../../Components/NoteItem"
import { Section } from "../../Components/Section"
import { Link } from "react-router-dom"


export function New(){

    return (
        <Container>
            <Header/>
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>

                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" type="text">
                    
                    </Input>

                    <Textarea placeholder="Observações"/>


                    <Section title="Links úteis">
                        <NoteItem value="https://www.rocketseat.com.br/"/>
                        <NoteItem  isNew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem  isNew placeholder="Novo marcador"/>
                        </div>
                    </Section>

                </Form>
            </main>


            
        </Container>
    )
}