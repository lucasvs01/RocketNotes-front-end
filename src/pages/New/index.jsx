import { Container, Form } from "./style";
import { Header } from "../../Components/Header"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { NoteItem } from "../../Components/NoteItem"
import { Section } from "../../Components/Section"
import { ButtonText } from "../../Components/ButtonText"
import { Button } from "../../Components/Button"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";



export function New(){

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1)
      }


    function handleAddLinks(){

        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLinks(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTags(){
        setTags( prevState => [...prevState, newTags])
        setNewTags("")

    }

    function handleRemoveTags(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleAddNewNote(){

        if(!title){
            return alert("Adicione o titulo da nota.")
        }

        if(newLink){
            return alert("Você deixou um link no campo, mas não clicou para adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        if(newTags){
            return alert("Você deixou uma tag no campo, mas não clicou para adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        await api.post("/notes", {
            title, 
            description,
            links,
            tags
        })

        
        alert("Nota cadastrada com sucesso!")
        navigate(-1)
    }

    return (
        <Container>
            <Header/>
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>

                        {/* <Link to={-1}>Voltar</Link> */}
                        <ButtonText title={"Voltar"} onClick={handleBack}></ButtonText>
                    </header>

                    <Input placeholder="Título" 
                        type="text"
                        onChange={e => setTitle(e.target.value)}
                    />
                    
                    <Textarea placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />


                    <Section title="Links úteis">

                        {
                            links.map((link, index)=> (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                 onChange={e => setNewLink(e.target.value)}
                                 onClick={() => {handleRemoveLinks(link)}}/>
                            )

                            )
                        }

                        <NoteItem  isNew
                            value={newLink}
                            placeholder="Novo link"
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLinks}/>
                        </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            
                                {    
                                        tags.map((tag, index) => (

                                        <NoteItem 
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => {handleRemoveTags(tag)}}
                                        />
                                        )
                                    )
                                }                            

                            <NoteItem  
                                isNew 
                                placeholder="Novo marcador"
                                value={newTags}
                                onChange={e => setNewTags(e.target.value)}
                                onClick={handleAddTags}
                            />
                        </div>
                    </Section>

                    <Button title={"Salvar"} onClick={handleAddNewNote}/>


                </Form>
            </main>


            
        </Container>
    )
}