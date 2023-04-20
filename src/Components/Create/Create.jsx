import React, { useState } from 'react'
import './create.css'
import { imgUpload } from '../../Utilities/Imgupload'
import Header from '../Header/Header'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../Authorization/userAuth';
const url = process.env.REACT_APP_API;


const Create = () => {

    const [load, setLoad] = useState(false)
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [image, setImage] = useState('')
    const [ing, setIng] = useState('')
    const [directions, setDirections] = useState('')
    const navigate = useNavigate()
    const AddPhoto = async (e) => {

        e.preventDefault()
        setLoad(true)
        const temp = await imgUpload(img)
        if (temp) {
            setLoad(false)
        }
        setImage(temp)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const temp = await ing.split(",")
        const data = { author: author, title: title, ingredients: temp, image: image.url, directions: directions }
        try {
            const token = getToken()

            const uploadData = await Axios.post(`${url}/api/recipe/addrecipe`, data, {
                params: { jwtoken: token }
            })

            alert(uploadData.data.message)
            navigate('/home')

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Header />
            <div className="create">
                <div className="create_form">
                    <div className="create_title">Create a Recipe</div>
                    <p className='create_para'>Share a recipe with the club by completing the form below </p>
                    <form onSubmit={onSubmit}>
                        <div className='input_field'>
                            <label htmlFor="title">Recipe title</label>
                            <input type="text" id="title" onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                                value={title}
                            />

                        </div>
                        <div className='input_field'>
                            <label htmlFor="author">Author</label>
                            <input type="text" id="author"
                                onChange={(e) => {
                                    setAuthor(e.target.value)
                                }}
                                value={author}
                            />
                        </div>
                        <div className='input_file'>
                            <div className='input_file_upper'>
                                <label htmlFor="file">Please upload your image and click on Add</label>

                            </div>
                            <div className="input_file_btm">
                                <input type="file" id="file" onChange={(e) => {
                                    setImg(e.target.files[0])
                                }} />
                                <button onClick={AddPhoto}>{!load ? "Add" : "Adding..."}</button>

                            </div>
                        </div>

                        <div className='input_field'>
                            <label htmlFor="ing">Ingredients</label>
                            <textarea type="text" id="ing"
                                onChange={(e) => {
                                    setIng(e.target.value)
                                }}
                                value={ing}
                            />
                        </div>

                        <div className='input_field'>
                            <label htmlFor="dir">Recipe Directions</label>
                            <textarea type="text" id="dir"
                                onChange={(e) => {
                                    setDirections(e.target.value)
                                }}
                                value={directions}
                            />
                        </div>
                        <div className='btn_form'>

                            <button type='submit' className='btn_upload'>Upload</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Create