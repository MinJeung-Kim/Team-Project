package nike.shoppingmall.domain;

public class LoginUser {
    private String userNm;
    private String userId;
    private String password;
    private String tel;
    private String address;
    // private String post;
    private int gradeCd;



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

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getGradeCd() {
        return this.gradeCd;
    }

    public void setGradeCd(int gradeCd) {
        this.gradeCd = gradeCd;
    }

   


}