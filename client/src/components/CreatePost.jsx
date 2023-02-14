import '../styles/createpost.scss'
import { useDispatch } from 'react-redux';
import { togglePostBox } from '../redux/postBoxReducer';
import {motion} from 'framer-motion'
import { axiosPrivate } from '../axios';
import React from 'react';
const CreatePost = ()=>
{
    const [file ,setFile] = React.useState() ;
    const [title,setTitle] =React.useState() ; 
    const [header,setHeader] = React.useState() ;
    const dispatch = useDispatch() ; 

    const handleFileChange = (e) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };

    const onSubmit=(e)=>
    {
        e.preventDefault()
        let formData = new FormData();  
        formData.append('photo', file);
        formData.append('title',title)
        formData.append('header',header) ;
        axiosPrivate.post('/post' , formData).then(()=>
            {
                window.alert('Post created succesfully!') 
                dispatch(togglePostBox()) ;
            }
        ) ;

        
    }

   
    return (<div className="CreatePost">
        <motion.div className="Alert" 

         initial={{ opacity: 0, scale: 0 ,y:-300 }}
         animate={{ opacity: 1, scale: 1 , y:0 }}>
            <button className='exit' onClick={()=>dispatch(togglePostBox())}>
                <i className='bx bx-x'></i>
            </button>

            <form onSubmit={onSubmit}>
                <label htmlFor='header'>
                    Header
                    <br/>
                    <input id='header' type='text' onChange={(e)=>setHeader(e.target.value)}/>
                </label>
                <label htmlFor='title'>
                    Title
                    <br/>
                    <textarea id='title' onChange={(e)=>setTitle(e.target.value)} />
                </label>
                <input type="file"  className='file' onChange={(e)=>handleFileChange(e)}/>
                <button className='Post'> Post</button>


            </form>
            

        </motion.div>
    </div>)
}
export default CreatePost ;