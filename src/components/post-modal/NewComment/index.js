import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import { postsNewComment } from '../../../api/posts';
import { setComments } from '../../../actions/posts';

export const NewComment = ({ 
    postId, 
    scrollDown 
}) => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            content: ''
        },
        validationSchema: Yup.object({
            content: Yup.string().required(),
        }),
        onSubmit: async (form) => {
          try {
            const savedPost = await postsNewComment(postId, form.content);
            dispatch(setComments(savedPost._id, savedPost.comments));
            formik.handleReset();
            scrollDown();
          } catch (error) {
            console.log(error);
          }
        },
    });

    return (
        <Form 
            className="post-modal__comment-form"
            onSubmit={ formik.handleSubmit }
        >
            <Form.Input
                placeholder="Add a new comment..."
                name="content"
                value={ formik.values.content }
                onChange={ formik.handleChange }
                error={ formik.errors.comment && true }
            />
            <Button type="submit">Publish</Button>
      </Form>
    )
}

NewComment.propTypes = {
    postId: PropTypes.string.isRequired,
    scrollDown: PropTypes.func.isRequired
};
