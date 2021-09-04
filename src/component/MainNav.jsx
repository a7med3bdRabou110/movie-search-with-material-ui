import React, { useEffect } from "react";
import  BottomNavigation  from "@material-ui/core/BottomNavigation";
import  BottomNavigationAction  from "@material-ui/core/BottomNavigationAction";
// import RestoreIcon from "@material-ui/icons/Restore" ;
import FavoriteIcon from "@material-ui/icons/Favorite" ;
// import LocationOnIcon from "@material-ui/icons/LocationOn" ; 
import  {makeStyles } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
// import MovieIcon from "@material-ui/icons/Movie"  
import SearchIcon from "@material-ui/icons/Search"  
import TvIcon from "@material-ui/icons/Tv"  
import { useHistory } from "react-router";
const useStyles = makeStyles({
    root:{
        width:"100%" ,
        position:"fixed" , 
        bottom:0 ,
        backgroundColor:"#2d313a" , 
        zIndex:100,
    } , 
}) ; 

const SimpleBottomNavigation = ()=>{
    const classes = useStyles();
    const [value , setValue] = React.useState(0);
    const history = useHistory();
    useEffect(() => {
        if(value === 0) history.push("/")
        else if (value === 1) history.push("/movies")
        else if (value === 2) history.push("/series")
        else if (value === 3) history.push("/search")
    }, [value , history])

    return(
        <BottomNavigation
            value={value}
            onChange={(event , newValue) =>{
                setValue(newValue);
            }}

            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Trending" style={{color:"#FFF"}} icon={<WhatshotIcon/>}/>
            <BottomNavigationAction label="Movies" style={{color:"#FFF"}} icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label="TV Series" style={{color:"#FFF"}} icon={<TvIcon/>}/>
            <BottomNavigationAction label="Search" style={{color:"#FFF"}} icon={<SearchIcon/>}/>

        </BottomNavigation>
    )
}

export default SimpleBottomNavigation ; 
