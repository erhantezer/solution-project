import FilmInfo from "../components/FilmInfo";
import FilmYear from "../components/FilmYear";
import { useGlobalContext } from "../context";
import {data} from "../helper/data";

const Main = () => {
    const {filmIndex} = useGlobalContext()
    return (
        <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div">
            <FilmYear data={data}/>
            <FilmInfo film={data[filmIndex]}/>
        </div>
    )
}

export default Main