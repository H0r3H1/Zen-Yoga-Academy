
package com.sample.dto;

public class FeedbackDto {
    private Long id;
    private String Name;
    private String Email;
    private String Comment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getComment() {
        return Comment;
    }

    public void setComment(String Comment) {
        this.Comment = Comment;
    }
   

    public FeedbackDto(Long id, String Name, String Email,String  Comment) {
        this.id = id;
        this.Name = Name;
        this.Email = Email;
        this.Comment = Comment;
    }
}