import React from "react";
import { NavLink } from "react-router-dom";

import "./MovieCard.css";
import Star from "../../assets/star.png";


const MovieCard = ({id,poster_image,title,release_date,rating,description}) => {
    return (
        
        // <NavLink to={`/singlecard/${id}`} 
        <NavLink to={`https://www.themoviedb.org/movie/${id}`}
            href={`https://www.themoviedb.org/movie/${id}`}
            target='_self' 
            
            className='movie_card'>
            <img
            
                src={`https://image.tmdb.org/t/p/w500${poster_image}`} 
                alt='movie poster'
                className='movie_poster'
            />

            <div className='movie_details'>
                <h3 className='movie_details_heading'>
                    {title}
                </h3>
                <div className='align_center movie_date_rate'>
                    <p>{release_date}</p>
                    <p className='align_center'>
                        {rating}
                        <img
                            src={Star}
                            alt='rating icon'
                            className='card_emoji'
                        />
                    </p>
                </div>
                <p className='movie_description'>
                    {description}
                </p>

            </div>
        </NavLink>
        
    );
};

export default MovieCard;


