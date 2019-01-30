import React, {Component} from 'react';
import Form from "./common/form";
import Joi from "joi-browser";
// import {getGenres} from "../services/fakeGenreService";
// import {getMovie, saveMovie} from "../services/fakeMovieService";
import {getGenres} from "../services/genreService";
import {getMovie, getMovies, saveMovie} from "../services/movieService";
class MovieForm extends Form {
    state={
      data:{
          title:"",
          genre_id:"",
          numberInStock:"",
          dailyRentalRate:"",
          liked:0
      },
        genres:[],
        errors:{}
    };
    schema={
        id: Joi.number(),
        title:Joi.string().required().label("Title"),
        genre_id:Joi.number().required().label("Genre"),
        numberInStock:Joi.number().integer().min(0).max(100).required().label("Number in Stock"),
        dailyRentalRate:Joi.number().min(0).required().label("Daily Rate"),
        liked:Joi.number().min(0).max(1).label("Liked"),
    };

    async populateGenre(){
        const {data} = await getGenres();
        this.setState({genres:data});

    }

    async populateMovie(){
        try{
            const movieId = this.props.match.params.id;
            if(movieId==="new") return;
            const res = await getMovie(movieId);
            this.setState({data:this.mapToViewModel(res.data)});
        }catch(e){
            if (e.response && e.response.status===404)
                this.props.history.replace("/not-found");
        }

    }
    async componentDidMount(){
        await this.populateGenre();
        await this.populateMovie();
    }

    mapToViewModel(movie){
        return{
            id:movie.id,
            title:movie.title,
            genre_id:movie.genre_id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
            liked: movie.liked
        };
    }

    doSubmit= async (movie)=>{
        movie.genre_id = Number.parseInt(movie.genre_id);
        movie.liked = Number.parseInt(movie.liked);
        movie.numberInStock = Number.parseInt(movie.numberInStock);
        movie.dailyRentalRate = Number.parseFloat(movie.dailyRentalRate);

      await saveMovie(movie);
      this.props.history.push("/movies");
    };
    render() {
        return(
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {/*{this.renderInput("genre", "Genre")}*/}
                    {this.renderSelect("genre_id","Genre", this.state.genres)}
                    {/*<select name="genre" id="genre" className="form-control">*/}
                        {/*<option value=""></option>*/}
                        {/*<option value="action">Action</option>*/}
                        {/*<option value="comedy">Comedy</option>*/}
                        {/*<option value="thriller">Thriller</option>*/}
                    {/*</select>*/}
                    {this.renderInput("numberInStock", "Number In Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate", "number")}
                    {this.renderInput("liked", "Liked", "number")}
                    {/*<Input name="password" value={data.password} label="Password" onChange={this.handleChange} error={errors.password}/>*/}
                    {this.renderButton("Save")}

                </form>
            </div>
        );
    }
}


export default MovieForm;
