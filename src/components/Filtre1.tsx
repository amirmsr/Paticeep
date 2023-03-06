import { useState } from "react";





interface Props {
    movies:{
      id: number;
      title : string;
      category: string;
      likes:number;
      dislikes:number;
    }[];
}

export default function Filtre({movies}:Props){

    const [filteredMovies, setFilterdMovies] = useState(movies)
    const categoryList : string[]=[];

    for (const movie of movies){
        if(!categoryList.includes(movie.category)){
        categoryList.push(movie.category);
        }
    }


        const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        const filteredMovies = movies.filter(movie => movie.category === selectedCategory);
        setFilterdMovies(filteredMovies)

        
        console.log(filteredMovies)
    };

    //boutton supprimer

    const handleDelete =(id: number) =>{
    const deleteMovies = filteredMovies.filter((movie)=>movie.id !== id)
    setFilterdMovies(deleteMovies)
    }

    //boutton like

    const handleLike =(id: number) =>{
    const updateMoviesLikes = filteredMovies.map((movie)=>{
        if (movie.id === id) {
            return {
                ...movie,
                likes: movie.likes + 1
            };
            } else {
            return movie;
            }
    })
    setFilterdMovies(updateMoviesLikes)


    }
    const handleDislike =(id: number) =>{
    const updateMoviesLikes = filteredMovies.map((movie)=>{
        if (movie.id === id) {
            return {
                ...movie,
                likes: movie.likes - 1
            };
            } else {
            return movie;
            }
    })
    setFilterdMovies(updateMoviesLikes)
    

    }



  
 

    return(
        <div>
        <select name="category" onChange={handleCategoryChange}>
        <option value="all">All</option>
        {categoryList.map((category)=>(
            <option key={category}  value={category}>{category}</option>
        ))}
        </select>

        {filteredMovies.map((movie) => (
          <div className='card' key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Category: {movie.category}</p>
            <p>Likes: {movie.likes}</p>
            <p>Dislikes: {movie.dislikes}</p>
            <button className='btnDelete' onClick={()=>handleDelete(movie.id)}>Delete</button>
            <button  onClick={()=>handleLike(movie.id)}>like</button>
            <button  onClick={()=>handleDislike(movie.id)}>dislike</button>
         

          </div>
        ))}
      

        

        </div>
    )


   
    


}



