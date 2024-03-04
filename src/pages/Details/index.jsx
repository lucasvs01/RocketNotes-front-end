import { Container, Links, Content } from  "./style"
import { Header } from "../../Components/Header";
import { Button } from '../../Components/Button';
import { Section } from "../../Components/Section"
import { Tags } from "../../Components/Tags";
import { ButtonText } from "../../Components/ButtonText";

import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export function Details(){

  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  async function handleRemoveNote(){
    const confirm = window.confirm("Deseja realmente excluir a nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNoteDetails(){
      const response = await api.get(`/notes/${params.id}`)
      
      setData(response.data)

      
      
    }

    fetchNoteDetails()
  }
  , [])

  return (
    <Container>

      <Header/>

      { data &&
        <main>
        <Content>
          <ButtonText title="Excluir nota" onClick={handleRemoveNote}/>
          
          <h1>{data.title}</h1>

          <p>{data.description}</p>


          {
            data.links &&
              <Section title="Links Uteis">
                {           
                  data.links.map(link => 
                    <Links key={String(link.id)}>
                    <li>
                      <a href={link.url} target="_blank">
                        {link.url}</a>
                    </li>
                  </Links>
                  )
                }
              </Section>
          }


        {    
          data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => <Tags key={String(tag.id)} title={tag.name}></Tags>)
                }
              </Section>   
        }

          <Button title="Voltar" onClick={handleBack}/>

        </Content>
        </main>
      }



    </Container> 
  )
}

