import { useGlobalContext } from '../context';

const FilmYear = ({data}) => {
    const { filmIndex, setFilmIndex } = useGlobalContext();

    return (
        <div className='col-12 col-lg-1'>
            <div>
                {data.map((item)=> {
                    return (
                            <div></div>
                        )
                })}
            </div>
        </div>
    )
}

export default FilmYear