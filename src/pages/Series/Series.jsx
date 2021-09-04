import axios from "axios"
import { useEffect, useState } from "react";
import Genres from "../../component/Genres/Genres";
import CustomPagination from "../../component/Pagination/CustomPagination";
import SingleContent from "../../component/SingleContent/SingleContent";
import useGenres from "../../hooks/useGenres";
const Series = () => {
    const [page, setPage] = useState(1) ; 
    const [content , setContent] = useState([]) ; 
    const [numberOfPages , setNumberOfPages] = useState();
    const [selectGenres, setSelectGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectGenres)
    const fetchMovies = async ()=> {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumberOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchMovies();
    }, [page , genreforURL])

    return (
        <div>
            <span className="pageTitle">Series</span>
            <Genres 
                type="tv"
                selectGenres={selectGenres}
                setSelectGenres = {setSelectGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map(c=> (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title ={c.title || c.name}
                            date ={c.first_air_date || c.release_date}
                            media_type="tv"
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
            {numberOfPages > 1 &&
            
            <CustomPagination setPage={setPage} numOfPage={numberOfPages}/>
            }
        </div>
    )
}

export default Series
