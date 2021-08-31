import "../SASS/base/_Form.scss";

const Form = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
    return (
        <form className="Form" onSubmit={handleSubmit}>
            <label htmlFor="CardTitle" className="Form-PostTitle">
                Card Title
                <input
                    id="CardTitle"
                    required
                    className="Form-PostTitle--inputTitle"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                 />
            </label>
            <label htmlFor="CardBody" className="Form-PostBody">
                Card Text
                <textarea
                    id="CardBody"
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
