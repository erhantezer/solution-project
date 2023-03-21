import ReactStars from 'react-stars'


const FilmInfo = ({ film }) => {
    const { id, title, body, rate, tags, adress } = film;
console.log(adress)
    

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
            <div>
                
                <button className='anime' style={{ fontSize: "1.4rem", border: "none",padding:"0.3rem", borderRadius:"0.5rem", textDecoration:"none" }}>
                    <a style={{  padding: "0.3rem", textDecoration: "none", color:"red" }} href={adress}>Goooo</a>
                </button>
            </div>
            
        </div>
    )
}

export default FilmInfo