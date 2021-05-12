package com.fii.houses.fii.houses.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
public class ForumComment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "BINARY(16)")
    private UUID commentID;

    @ManyToOne
    @JsonIgnoreProperties("comments")
    private ForumPost forumPost;

    @ManyToOne
    @JsonIgnoreProperties("forumComments")
    private User author;

    private String content;
    private Integer upVotes;
    private Date creationDate;

    public UUID getCommentID() {
        return commentID;
    }

    public void setCommentID(UUID commentID) {
        this.commentID = commentID;
    }

    public ForumPost getForumPost() {
        return forumPost;
    }

    public void setForumPost(ForumPost forumPost) {
        this.forumPost = forumPost;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getUpVotes() {
        return upVotes;
    }

    public void setUpVotes(Integer upVotes) {
        this.upVotes = upVotes;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
