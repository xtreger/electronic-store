package com.online.service;

import com.online.model.Comment;
import com.online.repo.CommentRepo;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService{


    private final CommentRepo commentRepo;

    public CommentServiceImpl(CommentRepo commentRepo) {
        this.commentRepo = commentRepo;
    }

    @Override
    public Comment addComment(Comment comment) {
        return commentRepo.save(comment);
    }
}
