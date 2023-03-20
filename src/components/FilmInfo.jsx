import React from 'react'


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
            
        </div>
    )
}

export default FilmInfo