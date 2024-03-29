package com.sample.dto;


public class ContactDto {
    
    private Long id;
    private String name;
    private String email;
    private String message;
    private long phonenumber;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public long getPhoneNumber() {
        return phonenumber;
    }

    public void setPhoneNumber(long phonenumber) {
         this.phonenumber = phonenumber;
    }

    

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public ContactDto(Long id, String name, String email,String message,long phonenumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.message = message;
        this.phonenumber = phonenumber;
}


}