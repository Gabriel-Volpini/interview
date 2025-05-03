import styled from "styled-components"
import { HomeTable } from "./components/HomeTable"
import { HomeMap } from "./components/HomeMap"
import { createContext } from "react"
import a from "../../../../database/db.json"
import { MobileFoodFacility } from "../../types"

export const HomeContext = createContext<IHomeContex>({} as IHomeContex)

interface IHomeContex {
    hoveredElementId: number
    data: MobileFoodFacility[]
}

export const Home = () => {
    const contextValue: IHomeContex = {
        hoveredElementId: 0,
        data: a as MobileFoodFacility[]
    }
    return (
        <HomeContext.Provider value={contextValue}>
            <Wrapper>
                <Card >
                    <HomeMap />
                </Card>
                <Card >
                    <HomeTable />
                </Card>
            </Wrapper>
        </HomeContext.Provider>
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
