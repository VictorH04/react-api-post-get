import { useTransition, animated } from "react-spring";
import "../SASS/base/_Form.scss";
import { useState, useEffect } from "react";

const Form = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {


    const transition = useTransition(handleSubmit, {
        from: { y: -300, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { x: 0, opacity: 1 },
      });

    return (
        <>
        {transition((style, item) =>

            item ? (
                <animated.form style={style} className="Form" onSubmit={handleSubmit}>
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
                </animated.form>
            ) : ('')
        )}
        </>
    )
}

export default Form
