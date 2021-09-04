const useGenres = selectedGenres => {
    if(selectedGenres.length < 1) return ""   ; 
    
    // Get Ids 
    const GenreIds = selectedGenres.map(genre => genre.id) ; 
    // Add , after every selected
    return GenreIds.reduce((acc , curr) => acc + "," + curr) ; 
}

export default useGenres
