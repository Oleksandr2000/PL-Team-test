import { Post } from "../../components/Post/Post.props";

export interface PostFormLayoutProps {
    title: string;
    handlerSubmit: (obj: Post) => void;
}
