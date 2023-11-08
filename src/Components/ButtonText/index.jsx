import { Container } from "./style"

export function ButtonText({title, isActive = false,...rest}){

    return (
        <Container {...rest} 
        $isactive= {isActive}
        type="button">
            {title}
        </Container>
    )
}