import { useGlobalContext } from '../context';

const FilmYear = ({data}) => {
    const { filmIndex, setFilmIndex } = useGlobalContext();

    return (
        <div className='col-12 col-lg-1'>
            <div>
                {data.map((item)=> {
                    return (
                        <button className={`border-0 px-2 m-2 fs-4 fw-bold text-secondary`} onClick={() => setFilmIndex(item.id)}>
                                {item.date}
                            </button>
                        )
                })}
            </div>
        </div>
    )
}

export default FilmYear