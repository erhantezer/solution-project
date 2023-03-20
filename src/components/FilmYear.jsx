import { useGlobalContext } from '../context';

const FilmYear = ({ data }) => {
    const { filmIndex, setFilmIndex } = useGlobalContext();

    return (
        <div className='col-12 col-lg-1'>
            <div
                className="nav nav-pills d-flex align-items-start "
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                {data.map((item,i) => {
                    return (
                        <button
                        key={item.id}
                            className={`border-0 px-2 m-2 fs-4 fw-bold text-secondary 
                        ${item.id === filmIndex && "activeBtn"}`}
                            onClick={() => setFilmIndex(i)}
                        >
                            {item.date}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default FilmYear