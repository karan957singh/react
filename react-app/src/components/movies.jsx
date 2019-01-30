import React,{Component} from "react";
import {getMovies, deleteMovie} from "../services/movieService";
// import {getMovies} from "../services/fakeMovieService";
// import {getGenres} from "../services/fakeGenreService";
import {getGenres} from "../services/genreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import {paginate} from "../utils/paginate";
import _ from 'lodash';
import {Link} from "react-router-dom";
import SearchBox from "./common/searchBox";
import {toast} from "react-toastify";
// import {genres} from "../services/fakeGenreService";


class Movies extends Component{
    state={
        movies:[],
        currentPage:1,
        pageSize:4,
        genres:[],
        searchQuery:"",
        selectedGenre:null,
        // currentGenre:null,
        sortColumn:{path:'title',order:'asc'},
    };


    async componentDidMount(){
        const {data} = await getGenres();
        const genres = [{id:"",name:"All Genres"}, ...data];

        const {data:mo} = await getMovies();
        const movies = mo.map(m => {
            const genre = genres.filter(g=>g.id===m.genre_id);
            m['genre'] = genre[0].name;
            return m;

        });
        this.setState({movies,genres});
    }

    handleDelete = async movie =>{
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m.id !== movie.id);
        this.setState({movies});
        try{
            await deleteMovie(movie.id);
        }catch (e) {
            console.log(e.response.status);
            if (e.response && e.response.status===404){
                toast.error("This movie has already been deleted.");
                this.setState({movies:originalMovies});
            }
        }

    };

    onClick=(movie)=>{
        console.log("Heart beat!");
        this.setState({
            movies:this.state.movies.map(m => {
                if (m.id ===movie.id)
                {
                    m.liked = !m.liked;
                }
                return m;

            })
        });
    };

    handlePageChange = (page)=>{
        this.setState({currentPage:page});
    };
    handleGenreSelect = (genre)=>{
      //   let newMovies;
      //   if(id===null){
      //       newMovies = getMovies();
      //   }else {
      //       newMovies = getMovies().filter(m=>m.genre._id === id)
      //   }
      // this.setState({
      //     movies:newMovies,
      //     currentGenre:id,
      //     currentPage:1,
      // });
        this.setState({selectedGenre:genre, searchQuery:"",currentPage:1});

    };

    handleSort = sortColumn =>{

        // this.setState({sortColumn:{path,order:'asc'}});
        this.setState({sortColumn});
    };

    getPagedData = () => {
        const{pageSize, currentPage, sortColumn, selectedGenre, searchQuery, movies:allMovies, genres} = this.state;
        let filtered = allMovies;
        if (searchQuery){
            filtered = allMovies.filter(m=>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        }
        else if (selectedGenre && selectedGenre.id)
        filtered = allMovies.filter(m=>m.genre_id===selectedGenre.id);
        // filtered = selectedGenre && selectedGenre.id ? allMovies.filter(m=>m.genre.id===selectedGenre.id):allMovies;
        const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);
        return {totalCount:filtered.length, data:movies, genres};
    };
    // newMovie(){
    //     this.props.history.push(`movies/new`);
    // }

    handleSearch = (query)=>{
        console.log(query);
       this.setState({searchQuery:query, selectedGenre:null, currentPage:1});
    };


    render(){
        const{pageSize, currentPage, sortColumn, searchQuery} = this.state;
        const {totalCount, data:movies, genres} = this.getPagedData();
        if(totalCount===0){
            return <p>There are no movies in the database.</p>
        }
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-2">
                        <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect } selectedItem={this.state.selectedGenre}/>
                    </div>
                    <div className="col">
                        {/*<button className="btn btn-primary" onClick={()=>this.newMovie(this.state.movies)}>New Movie</button>*/}
                        <Link to="/movies/new" className="btn btn-primary" style={{marginBottom:20}}>New Movieee</Link>
                        <p>Showing {totalCount} movies in the database</p>
                        <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                        <MoviesTable movies={movies} genres={genres} sortColumn={sortColumn} onLike={this.onClick} onDelete={this.handleDelete} onSort={this.handleSort}/>


                <Pagination itemsCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

export default Movies;