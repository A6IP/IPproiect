export class ForumComment {
    commentID: string;
    forumPost: {
        postID: string;
    };
    author: {
        id: number;
        name: string;
        username: string;
        email: string;
    };
    content: string;
}
