package nike.shoppingmall.domain;

import java.util.Date;

public class Customer {
    private String userNm;
    private String userId;
    private String password;
    private String tel;
    private String gender;
    private Date birth;
    private String address;
    // private String post;
    private int gradeCd;
    private int statusCd;
    private String memo;
    private Date insDt;
    private Date uptDt;

    public String getUserNm() {
        return this.userNm;
    }

    public void setUserNm(String userNm) {
        this.userNm = userNm;
    }

    public String getUserId() {
        return this.userId;
    }

    public void setUserId(String userId) {
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

    public int getGradeCd() {
        return this.gradeCd;
    }

    public void setGradeCd(int gradeCd) {
        this.gradeCd = gradeCd;
    }

    public int getStatusCd() {
        return this.statusCd;
    }

    public void setStatusCd(int statusCd) {
        this.statusCd = statusCd;
    }

    public String getMemo() {
        return this.memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
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