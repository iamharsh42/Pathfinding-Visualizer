import { useContext } from "react"
import { TileContext } from "../context/TileContext"


export const UseTile = () => {
    const context = useContext(TileContext);

    if (!context) {
        throw new Error("useTile must be used within a TileProvider");;
    }

    return context;
} // custom hook to access TileContext