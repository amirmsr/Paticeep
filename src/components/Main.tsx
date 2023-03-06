import { Button, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { movies$ } from '../data/movies'




interface Movies {
    id: number;
    title : string;
    category: string;
    likes:number;
    dislikes:number;
}



export default function Main(){
  
    //fetch data
    const [movies, setMovies] = useState<Movies[]>([]);

  

    useEffect(() => {
        movies$.then((movies) => {
          setMovies(movies);
        });
      }, []);
      
    
    //boutton supprimer

    const handleDelete =(id: number) =>{
       const deleteMovies = movies.filter((movie)=>movie.id !== id)
       setMovies(deleteMovies)
    }
    
     //boutton like

     const handleLike =(id: number) =>{
        const updateMoviesLikes = movies.map((movie)=>{
            if (movie.id === id) {
                return {
                  ...movie,
                  likes: movie.likes + 1
                };
              } else {
                return movie;
              }
        })
        setMovies(updateMoviesLikes)


     }
     const handleDislike =(id: number) =>{
        const updateMoviesLikes = movies.map((movie)=>{
            if (movie.id === id) {
                return {
                  ...movie,
                  likes: movie.likes - 1
                };
              } else {
                return movie;
              }
        })
        setMovies(updateMoviesLikes)      
     }

    //filtrer
  

    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    }

    const filteredMovies = [];

    if (selectedCategory === 'all') {
      filteredMovies.push(...movies);
      
    } else {
      movies.forEach(movie => {
        if (movie.category === selectedCategory) {
          filteredMovies.push(movie);
        }
      });
    }

    const categorySet = new Set(movies.map(movie => movie.category));
    const categories = Array.from(categorySet);
    



  //Pagination 

    const [selectedPage, setSelectedPage] = useState<number>(1);
    const handleChangePage = (event: any, page: any) => {     
      setSelectedPage(page)
    };

   
    const moviesPerPage = 3;
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

   
  





    return(
        <div>
        <h1>List of Movies</h1>
        
        <select  name="category" onChange={handleCategoryChange}>
        <option value="all">All</option>
         {categories.map((category)=>(
            <option key={category}  value={category}>{category}</option>
        ))} 
        </select>
         

        <div className='cardContainer'>
          {selectedPage === 1 ? filteredMovies.slice(0,3).map((movie) => (
            <div className='card' key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Category: {movie.category}</p>
              <p>Likes: {movie.likes}</p>
              <p>Dislikes: {movie.dislikes}</p>
              <div style={{paddingBottom:'20px',paddingTop:'20px'}} >
              <Button  style={{  width:'100px' }} variant="contained"     onClick={()=>handleLike(movie.id)}>like</Button>
              
              <Button  style={{ marginLeft: '10px', width:'100px' }}  variant="contained"   onClick={()=>handleDislike(movie.id)}>dislike</Button>
              </div>           
              <Button style={{ color:'red'}}   className='btnDelete' onClick={()=>handleDelete(movie.id)}>Delete</Button>
          

            </div>
          )): selectedPage === 2 ? filteredMovies.slice(3,6).map((movie) => (
            <div className='card' key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Category: {movie.category}</p>
              <p>Likes: {movie.likes}</p>
              <p>Dislikes: {movie.dislikes}</p>
              <div style={{paddingBottom:'20px',paddingTop:'20px'}} >
              <Button  style={{  width:'100px' }} variant="contained"     onClick={()=>handleLike(movie.id)}>like</Button>
              
              <Button  style={{ marginLeft: '10px', width:'100px' }}  variant="contained"   onClick={()=>handleDislike(movie.id)}>dislike</Button>
              </div>           
              <Button style={{ color:'red'}}   className='btnDelete' onClick={()=>handleDelete(movie.id)}>Delete</Button>
          

            </div>
          )):selectedPage === 3 ? filteredMovies.slice(6,9).map((movie) => (
            <div className='card' key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Category: {movie.category}</p>
              <p>Likes: {movie.likes}</p>
              <p>Dislikes: {movie.dislikes}</p>
              <div style={{paddingBottom:'20px',paddingTop:'20px'}} >
              <Button  style={{  width:'100px' }} variant="contained"     onClick={()=>handleLike(movie.id)}>like</Button>
              
              <Button  style={{ marginLeft: '10px', width:'100px' }}  variant="contained"   onClick={()=>handleDislike(movie.id)}>dislike</Button>
              </div>           
              <Button style={{ color:'red'}}   className='btnDelete' onClick={()=>handleDelete(movie.id)}>Delete</Button>
          

            </div>
          )):selectedPage === 4 ? filteredMovies.slice(-1).map((movie) => (
            <div className='card' key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Category: {movie.category}</p>
              <p>Likes: {movie.likes}</p>
              <p>Dislikes: {movie.dislikes}</p>
              <div style={{paddingBottom:'20px',paddingTop:'20px'}} >
              <Button  style={{  width:'100px' }} variant="contained"     onClick={()=>handleLike(movie.id)}>like</Button>
              
              <Button  style={{ marginLeft: '10px', width:'100px' }}  variant="contained"   onClick={()=>handleDislike(movie.id)}>dislike</Button>
              </div>           
              <Button style={{ color:'red'}}   className='btnDelete' onClick={()=>handleDelete(movie.id)}>Delete</Button>
          

            </div>

          )):filteredMovies.map((movie)=>(
            <div className='card' key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Category: {movie.category}</p>
            <p>Likes: {movie.likes}</p>
            <p>Dislikes: {movie.dislikes}</p>
            <div style={{paddingBottom:'20px',paddingTop:'20px'}} >
            <Button  style={{  width:'100px' }} variant="contained"     onClick={()=>handleLike(movie.id)}>like</Button>
            
            <Button  style={{ marginLeft: '10px', width:'100px' , backgroundColor: 'blue' }}  variant="contained"   onClick={()=>handleDislike(movie.id)}>dislike</Button>
            </div>           
            <Button style={{ color:'red'}}   className='btnDelete' onClick={()=>handleDelete(movie.id)}>Delete</Button>
        

          </div>
          ))
          }
        </div>


        <div>
        <Pagination count={totalPages}  onChange={handleChangePage} />
        </div>

        
      </div>
    )

}



