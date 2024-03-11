package com.sample.dto;

public class ApplicationDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Long pincode;
    private int age;
    private String city;
    private String address;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    

 

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

   

    public long getgetpincode() {
        return pincode;
    }

    public void setgetpincode(long pincode) {
        this.pincode = pincode;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

   
    public ApplicationDto(Long id, String firstName, String  lastName, String email,  Long pincode, int age, String city, String address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.city = city;
        this.address = address;
        this.pincode= pincode;
    }
}
