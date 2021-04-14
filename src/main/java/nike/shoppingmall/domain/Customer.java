package nike.shoppingmall.domain;

import java.util.Date;

public class Customer {
    private String name;
    private Long userId;
    private String password;
    private String tel;
    private String gender;
    private Date birth;
    private String address;
    // private String post;
    private String gradeNm;
    private String statusNm;
    private Date insDt;
    private Date uptDt;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getUserId() {
        return this.userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTel() {
        return this.tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getBirth() {
        return this.birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // public String getPost() {
    //     return this.post;
    // }

    // public void setPost(String post) {
    //     this.post = post;
    // }

    public String getGradeNm() {
        return this.gradeNm;
    }

    public void setGradeNm(String gradeNm) {
        this.gradeNm = gradeNm;
    }

    public String getStatusNm() {
        return this.statusNm;
    }

    public void setStatusNm(String statusNm) {
        this.statusNm = statusNm;
    }

    public Date getInsDt() {
        return this.insDt;
    }

    public void setInsDt(Date insDt) {
        this.insDt = insDt;
    }

    public Date getUptDt() {
        return this.uptDt;
    }

    public void setUptDt(Date uptDt) {
        this.uptDt = uptDt;
    }
  




}