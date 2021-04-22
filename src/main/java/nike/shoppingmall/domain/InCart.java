package nike.shoppingmall.domain;

import java.sql.Date;

public class InCart {
    private String userEmail;
    private String prdCd;
    private String prdNm;
    private String prdImg;
    private int prdSize;
    private String prdStyle;
    private int prdCnt;
    private Long prdPrice;
    private int sendPrice;
    private Long totalPrice;
    private Date insDt;
    private Date uptDt;

    public String getUserEmail() {
        return this.userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getPrdCd() {
        return this.prdCd;
    }

    public void setPrdCd(String prdCd) {
        this.prdCd = prdCd;
    }

    public String getPrdNm() {
        return this.prdNm;
    }

    public void setPrdNm(String prdNm) {
        this.prdNm = prdNm;
    }

    public String getPrdImg() {
        return this.prdImg;
    }

    public void setPrdImg(String prdImg) {
        this.prdImg = prdImg;
    }

    public int getPrdSize() {
        return this.prdSize;
    }

    public void setPrdSize(int prdSize) {
        this.prdSize = prdSize;
    }

    public String getPrdStyle() {
        return this.prdStyle;
    }

    public void setPrdStyle(String prdStyle) {
        this.prdStyle = prdStyle;
    }

    public int getPrdCnt() {
        return this.prdCnt;
    }

    public void setPrdCnt(int prdCnt) {
        this.prdCnt = prdCnt;
    }

    public Long getPrdPrice() {
        return this.prdPrice;
    }

    public void setPrdPrice(Long prdPrice) {
        this.prdPrice = prdPrice;
    }

    public int getSendPrice() {
        return this.sendPrice;
    }

    public void setSendPrice(int sendPrice) {
        this.sendPrice = sendPrice;
    }

    public Long getTotalPrice() {
        return this.totalPrice;
    }

    public void setTotalPrice(Long totalPrice) {
        this.totalPrice = totalPrice;
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
