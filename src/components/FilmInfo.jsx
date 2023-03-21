import ReactStars from 'react-stars'


const FilmInfo = ({ film }) => {
    const { id, title, body, rate, tags } = film

    return (
        <div key={id} className='col-12 col-sm-9'>
            <div>
                <h3>{title}</h3>
                <span>{body}</span>
            </div>
            <article className="d-flex align-items-center">
                <div className="d-flex ">
                    <span className="text-danger p-1 rounded-3">{tags.join(" / ")}</span>
                </div>
            </article>
            <article className="d-flex align-items-center">
                <div className="d-flex mx-1 align-items-center">
                    <div
                        className="d-flex pe-1 pe-md-2 pe-lg-4 align-items-center"
                        >
                        <ReactStars
                        
                            name="rate"
                            count={5}
                            size={30}
                            value={Math.round(rate / 2)}
                            editing={true}
                        />
                    </div>
                    <div
                        className="pe-1 pe-md-2 pe-lg-4 d-flex align-items-center text-danger"
                        style={{ fontSize: "1.4rem" }}>
                        {rate.toFixed(2)} / 10
                    </div>
                </div>
            </article>
            
        </div>
    )
}

export default FilmInfo