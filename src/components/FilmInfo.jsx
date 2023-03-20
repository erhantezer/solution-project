import React from 'react'


const FilmInfo = ({ film }) => {
    const { id, title, body, rate, tags } = film

    return (
        <div key={id} className='col-12 col-sm-9'>
            <div>
                <h3>{title}</h3>
                <span>{body}</span>
            </div>
            
        </div>
    )
}

export default FilmInfo