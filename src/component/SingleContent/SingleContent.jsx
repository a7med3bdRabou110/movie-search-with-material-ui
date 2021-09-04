import  Badge  from "@material-ui/core/Badge";
import { img_300, unavailable } from "../../Config/Config"
import ContentModal from "../ContentModel/ContentModel";
import "./SingleContent.css";
const SingleContent = ({id, poster,title , date , media_type, vote_average}) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary": "secondary"}  />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={poster} />
            <span className="title">{title}</span>
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movies"}
                <span className="subTitle">{date}</span>
            </span>
        </ContentModal>
    )
}

export default SingleContent
