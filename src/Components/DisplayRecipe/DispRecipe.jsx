import React from 'react'
import './disprecipe.css'
import {useNavigate} from 'react-router-dom'

const DispRecipe = ({ _id,title, image }) => {
    const navigate = useNavigate()
    const onClickHandler =()=>{
        navigate(`/single/${_id}`)
    }
    return (
        <div className="recipe" onClick={onClickHandler}>
            <img src={image} alt={title} className="recipeImg" />
            <div className='recipe_title'>{title}</div>
        </div>

    )
}

export default DispRecipe