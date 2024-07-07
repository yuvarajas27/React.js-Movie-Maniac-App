import React, { useEffect, useState } from "react";
import _ from "lodash"

import "./MovieList.css";
import MovieCard from './MovieCard';
import FilterGroup from "./FilterGroup";

const MovieList = ({type,title,emoji}) => {
    const [movies,setMovies] = useState ([])
    const [filteredMovies,setFilteredMovies]= useState([])
    const [minRating, setMinRating]= useState(0) 
    const [sort,setSort]=useState({
        "by":"default",
        "order":"asc"
    })

    useEffect(()=>
        {
        fetchFunction()
        },[type]
    )

    useEffect(()=>{
        console.log("first sort")
        if(sort.by!=="default"){
            const sorted=_.orderBy(filteredMovies,[sort.by],[sort.order])
            setFilteredMovies(sorted)
        }
    },[sort])

    const fetchFunction =async ()=>{
        const response= await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=64d54ecb3d6f673156b86e67e69141a2`)

        const jsonData= await response.json() 

        console.log(jsonData)

        const result = jsonData.results

        console.log(result)

        setMovies(result)
        setFilteredMovies(result)
    }

    const handleRate =(rate)=>{
        if(rate===minRating){
            setMinRating(0)
            // added by yuvaraja some extra logic
            if(sort.by!=="default"){
                const movies_sorted=_.orderBy(movies,[sort.by],[sort.order])
                setFilteredMovies(movies_sorted)
            }
            else{
                setFilteredMovies(movies)
            }

            //setFilteredMovies(movies)
            
            
        }
        else{
            setMinRating(rate)
            const filtered= movies.filter(movies=>movies.vote_average>=rate )
            //added by yuvaraja some extra logic
            if(sort.by!=="default"){
                const filtered_movies_sorted=_.orderBy(filtered,[sort.by],[sort.order])
                setFilteredMovies(filtered_movies_sorted)
            }
            else{
                setFilteredMovies(filtered)

            }

            //setFilteredMovies(filtered)
        }

    }

    const handleChange=(e)=>{
        console.log(e.target)
        const {name,value}=e.target 
        setSort(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })

    }
 console.log("here")
    return (
        <section className='movie_list' id={type}>
            <header className='align_center movie_list_header'>
                <h2 className='align_center movie_list_heading'>
                    {title}{" "}
                    <img src={emoji} alt={`${emoji} icon`} className='navbar_emoji' />
                </h2>

                <div className='align_center movie_list_fs'>
                    <FilterGroup minRating={minRating} onRatingClick={handleRate} ratings={[6,7,8,8.7]} />

                    <select name='by' id='' value={sort.by} className='movie_sorting' onChange={handleChange}>
                        <option value='default'>SortBy</option>
                        <option value='release_date'>Date</option>
                        <option value='vote_average'>Rating</option>
                    </select>
                    <select name='order' id='' value={sort.order} className='movie_sorting' onChange={handleChange}>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                </div>
            </header>
            <div className="movie_cards">
                {filteredMovies.length>0 ? filteredMovies.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} id={movie.id} poster_image={movie.poster_path} title={movie.original_title} release_date={movie.release_date} rating={movie.vote_average} description={movie.overview}/>
                    )
                }):"No Movies Found"}

            </div>
            
        </section>
    );
};

export default MovieList;


