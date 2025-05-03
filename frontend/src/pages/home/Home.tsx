import { createContext, Dispatch, SetStateAction, useState } from "react"
import styled from "styled-components"
import { HomeTable } from "./components/HomeTable"
import { HomeMap } from "./components/HomeMap"
import fakeApiResponse from "../../../../database/db.json"
import { MobileFoodFacility } from "../../types"

export const HomeContext = createContext<IHomeContex>({} as IHomeContex)

interface IHomeContex {
    hoveredElementId: number | null
    setHoveredElementId: Dispatch<SetStateAction<number | null>>
    data: MobileFoodFacility[]
}

export const Home = () => {
    const [hoveredElementId, setHoveredElementId] = useState<null | number>(null)

    const contextValue: IHomeContex = {
        hoveredElementId,
        setHoveredElementId,
        data: fakeApiResponse as MobileFoodFacility[]
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
    overflow: hidden;
`
const Card = styled.div`
    display: flex;
    flex:1;
    margin: 32px;
    overflow: hidden;
`
