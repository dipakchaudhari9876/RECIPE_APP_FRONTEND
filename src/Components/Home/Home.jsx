import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import SearchIcon from '@mui/icons-material/Search';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import './home.css'
import { recipeData } from '../../data';
import DispRecipe from '../DisplayRecipe/DispRecipe';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../Authorization/userAuth';
const url = process.env.REACT_APP_API;


const Home = () => {
    const [search, setSearch] = useState("")
    const [recipe,setRecipe] = useState([])
    const [filter,setFilter] = useState([])
    const navigate = useNavigate()

    const onSearch = () => {
        const filterData = recipe.filter(data=>data.title.toLowerCase().includes(search.toLowerCase()) )
        setFilter(filterData)
        setSearch("")
    }

    const getAllRecipe =()=>{
        setFilter([])
    }
    useEffect(()=>{
        const token = getToken()
        const getData =async()=>{
            const data = await Axios.get(`${url}/api/recipe/getall`,{
                params:{jwtoken:token}
            })
            setRecipe(data.data)
        }
        getData()
    },[])
    return (
        <>
            <Header />
            <div className="Home">
                <div className="Home_search">
                    <input type="search" className='search_input' onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                        value={search}
                    />
                    <SearchIcon onClick={onSearch} className='logo_search'></SearchIcon>
                </div>
                <div className="new" onClick={()=>{
                    navigate('/create')
                }}>
                    <LocalDiningIcon className='new_logo'></LocalDiningIcon>
                    <span>NEW</span>
                </div>
                <div className='title' onClick={getAllRecipe}>{filter.length ?"All Recipe":"Recipe"}</div>
                <div className="Recipe">
                    {filter.length ?filter.map((data)=>{
                        return(
                            <DispRecipe key={data.title} {...data}/>
                        )
                    }):
                    recipe.map((data)=>{
                        return(
                            <DispRecipe key={data.title} {...data}/>
                        )
                    })}

                </div>


            </div>
        </>
    )
}

export default Home