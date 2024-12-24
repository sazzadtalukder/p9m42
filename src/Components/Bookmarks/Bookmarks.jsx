import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks.length)
    return (
        <div className="w-1/3">
            <p>Bookmarks: </p>
            {
               bookmarks.map((blog, idx) => <Bookmark key={idx} blog={blog}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes  = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;