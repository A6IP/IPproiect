import { ForumComment } from "./forum-comment";

export class ForumPost {
    postID: string;
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        username: string;
        email: string;
    };
    comments: ForumComment[];
    likes: { id: number; }[];
    reports: { id: number; }[];
}
