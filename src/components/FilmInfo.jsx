import React from 'react'


const FilmInfo = ({ film }) => {
    const { id, title, body, rate } = film

    return (
        <div key={id}>
            {title}
        </div>
    )
}

export default FilmInfo