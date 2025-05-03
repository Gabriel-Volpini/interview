import styled from "styled-components"
import { HomeTable } from "./components/HomeTable"
import { HomeMap } from "./components/HomeMap"

export const Home = () => {
    return (
        <Wrapper>
            <Card >
                <HomeMap />
            </Card>
            <Card />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex:1;
    color:white;
`
const Card = styled.div`
    display: flex;
    flex:1;
    margin: 32px;
    border-radius:20px;
    border:1px solid #9399b2;   
    overflow: hidden;
`
