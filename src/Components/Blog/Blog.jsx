import PropTypes from 'prop-types';
const Blog = ({blog, handleBookmarks}) => {
    const {cover_img, title} = blog;
    return (
        <div className='mb-5'>
            <div>
                <img src={cover_img} alt="" />
                
            </div>
            <p>{title}</p>
            <button onClick={()=> handleBookmarks(blog)}>Bookmark</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired
    
}
export default Blog;