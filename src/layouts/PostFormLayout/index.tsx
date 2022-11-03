import React from "react";
import FormControl from "../../components/FormControl";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./PostFormLayout.module.scss";
import { PostFormLayoutProps } from "./PostFormLayout.props";
import { Post } from "../../components/Post/Post.props";
import { Button } from "../../components/Button/Button";

const PostFormLayout = ({ handlerSubmit, title }: PostFormLayoutProps) => {
  const PostForm = useFormik({
    initialValues: {
      _id: "",
      author: "",
      avatar: "",
      content: "",
    },
    validationSchema: Yup.object({
      author: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
      content: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
      avatar: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
    }),

    async onSubmit(values: Post) {
      await PostForm.setFieldValue("_id", new Date());
      handlerSubmit(values);
      PostForm.resetForm();
    },
  });

  return (
    <div className={styles.root}>
      <form onSubmit={PostForm.handleSubmit}>
        <FormControl
          variant="small"
          type="text"
          label="Author"
          name="author"
          placeholder="Author"
          value={PostForm.values.author}
          handlerVlue={PostForm.setFieldValue}
          error={PostForm.errors.author}
        />
        <FormControl
          variant="small"
          type="text"
          label="Avatar"
          name="avatar"
          placeholder="Image url"
          value={PostForm.values.avatar}
          handlerVlue={PostForm.setFieldValue}
          error={PostForm.errors.avatar}
        />
        <FormControl
          variant="small"
          type="text"
          name="content"
          label="Text"
          placeholder="Text"
          value={PostForm.values.content}
          handlerVlue={PostForm.setFieldValue}
          error={PostForm.errors.content}
        />
        <Button appearance="primary" type="submit">
          Опублікувати
        </Button>
      </form>
    </div>
  );
};

export default PostFormLayout;
