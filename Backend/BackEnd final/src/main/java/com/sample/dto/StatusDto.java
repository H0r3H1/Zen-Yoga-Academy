package com.sample.dto;

public class StatusDto {
    private Long id;
    private String name;
    private int age;
    private long number;


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

   

    public long getnumber() {
        return number;
    }

    public void setnumber(int admissionNo) {
        this.number = admissionNo;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
    public StatusDto(Long id, String name,String course, String academy,int admissionNo,int age) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.age = age;
    }
}