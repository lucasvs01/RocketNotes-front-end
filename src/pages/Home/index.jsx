import{ Brand, Menu, Search, Container,  Content, NewNote } from "./style"

import { Header } from "../../Components/Header"
import { ButtonText } from "../../Components/ButtonText"
import { Input } from "../../Components/Input"
import { Section } from "../../Components/Section"
import { Note } from "../../Components/Notes"

import { Link } from "react-router-dom"

import { FiPlus, FiSearch } from "react-icons/fi"

export function Home(){

    return (
        <Container>
                 

            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li><ButtonText title="Todos" isActive></ButtonText></li>
                <li><ButtonText title="React"></ButtonText></li>
                <li><ButtonText title="Node"></ButtonText></li>

            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    
                    <Note data={{ title: "React", tags: [
                        {id: "1", name: "React"},
                        {id: "2", name: "Express"},
                    ]}}  />
                                        
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>


        </Container>
    )
}