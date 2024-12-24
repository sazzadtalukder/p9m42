import PropTypes from "prop-types";

const Bookmark = ({blog}) => {
    return (
        <div>
            {blog.title}
        </div>
    );
};
Bookmark.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Bookmark;