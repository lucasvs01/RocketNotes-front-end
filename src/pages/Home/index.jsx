import{ Brand, Menu, Search, Container,  Content, NewNote } from "./style"

import { Header } from "../../Components/Header"
import { ButtonText } from "../../Components/ButtonText"
import { Input } from "../../Components/Input"
import { Section } from "../../Components/Section"
import { Note } from "../../Components/Notes"

import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"


import { FiPlus, FiSearch } from "react-icons/fi"
import { api } from "../../services/api"

export function Home(){

    const [tags, setTags] = useState([])    
    const [tagsSelected, setTagsSelected] = useState([])

    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()


    function handleSelectedTags(tagName){

        if(tagName == "all"){
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        }
        else{

            setTagsSelected(prevState => [...prevState, tagName])
            
        }
    }

    function handleDetails(id){

        navigate(`/details/${id}`)

    }

    useEffect(()=>{
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(()=> {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)

            setNotes(response.data)

            
        }

        fetchNotes()
    }, [tagsSelected, search])

    

    return (
        <Container>
                 

            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li><ButtonText title="Todos"
                    onClick={()=> handleSelectedTags("all")}
                    isActive={tagsSelected.length === 0}

                ></ButtonText></li>

                {   
                    tags && tags.map((tag) => <li key={String(tag.id)}>
                        <ButtonText
                            title={tag.name} 
                            onClick={()=> handleSelectedTags(tag.name)}
                            isActive={tagsSelected.includes(tag.name)}
                        ></ButtonText></li>
                    )        
                }
            </Menu>

            <Search>
                <Input 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquisar pelo título" icon={FiSearch}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    { notes.map((note) => <Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)}/>)
                    
                    }                    
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>


        </Container>
    )
}