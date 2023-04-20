import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './singleRecipe.css'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
const url = process.env.REACT_APP_API

const data = {
    "id": 1,
    "title": "Chocolate Chip Cookies",
    "author": "Jane Smith",
    "image": "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg",
    "ingredients": [
        "all-purpose flour",
        "baking soda",
        "salt",
        "unsalted butter",
        "brown sugar",
        "granulated sugar",
        "large egg",
        "vanilla extract",
        "chocolate chips"
    ],
    "directions": "Preheat oven to 350°F. In a medium bowl, whisk together the flour, baking soda, and salt. In a separate large bowl, beat the butter, brown sugar, and granulated sugar until creamy. Add in the egg and vanilla extract and mix well. Gradually stir in the dry ingredients until well-combined. Fold in the chocolate chips. Drop the dough by rounded tablespoons onto a baking sheet and bake for 10-12 minutes, or until the edges are lightly golden. Cool on the baking sheet for a few minutes, then transfer to a wire rack to cool completely."
}

const Singlerecipe = () => {
    const [show,setShow] = useState(false)
    const [recData,setRecData] = useState({})
    const {id} = useParams()
    const change =()=>{
        setShow(!show)
    }
    useEffect(()=>{
        const getData = async()=>{
            try{
                const indData = await Axios.get(`${url}/api/recipe/indrecipe/${id}`)
                setRecData(indData.data)

            }catch(err){
                console.log(err)
            }

        }
        getData()
    },[])
    return (
        <>
            <Header />
            <div className="SingleRecipe">
                <div className="leftSide">
                    <div className='leftSide_title'>{recData.title}</div>
                    <img src={recData.image} alt={recData.title} className='leftSide_img' />
                </div>
                <div className="rightSide">
                    <button className={!show ? "rightSide_btn" : "btn_on"}  onClick={change}>Instruction</button>
                    <button className={show ? "rightSide_btn" : "btn_on"} onClick={change}>Ingredients</button>
                    <div className="rightSide_comp">
                        {show ? recData.directions: 
                            <ul className="recipe_ing">
                                { recData.ingredients && 
                                    recData.ingredients.map((dat)=>{
                                        return(
                                            <li key={dat}>{dat}</li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Singlerecipe