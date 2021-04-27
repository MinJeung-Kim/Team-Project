package nike.shoppingmall.domain;

public class Customer {
    private int listNum;
    private String userNm;
    private String userId;
    private String password;
    private String tel;
    private String gender;
    private String birth;
    private String address;
    // private String post;
    private int gradeCd;
    private int statusCd;
    private String memo;
    private String insDt;
    private String uptDt;

    public int getListNum() {
        return this.listNum;
    }

    public void setListNum(int listNum) {
        this.listNum = listNum;
    }
    
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

    public String getBirth() {
        return this.birth;
    }

    public void setBirth(String birth) {
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

    public String getInsDt() {
        return this.insDt;
    }

    public void setInsDt(String insDt) {
        this.insDt = insDt;
    }

    public String getUptDt() {
        return this.uptDt;
    }

    public void setUptDt(String uptDt) {
        this.uptDt = uptDt;
    }
   
    // @Override
    // public String toString() {
    //     return getUserNm()+"/"+getAddress()+"/"+getGender()+"/"+getMemo()+"/"+getPassword()+"/"+getTel()+"/"+getUserId()+"/"+getBirth()+"/"+getInsDt()+"/"+getUptDt();
    // }

    @Override
    public String toString() {
        return getUserId();
    }



}