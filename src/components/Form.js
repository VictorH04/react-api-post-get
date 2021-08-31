import "../SASS/base/_Form.scss";

const Form = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
    return (
        <form className="Form" onSubmit={handleSubmit}>
            <label htmlFor="PostTitle" className="Form-PostTitle">
                Post Title
                <input
                    id="PostTitle"
                    required
                    className="Form-PostTitle--inputTitle"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                 />
            </label>
            <label htmlFor="PostBody" className="Form-PostBody">
                Post Body
                <textarea
                    id="PostBody"
                    required
                    className="Form-PostBody--inputBody"
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}>
                 </textarea>
            </label>

            <button className="Form-btn" type="submit">
                Submit
            </button>
        </form>
    )
}

export default Form
