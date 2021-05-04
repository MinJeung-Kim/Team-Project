package nike.shoppingmall.domain;

import java.sql.Date;

public class ADOrderInfo {
    private String orderCd;
    private String userEmail;
    private String prdCd;
    private int statusCd;
    // private String statusNm;
    private Date orderDt;
    private Date payDt;
    private Long totalPrice;
    private Date insDt;
    private Date uptDt;

    private String prdNm;
    private String prdImg;
    private int prdSize;
    private String prdStyle;
    private int prdCnt;
    private Long prdPrice;
    private int sendPrice;

    private String sendNum;

    // 결제 정보
    private String depositNum;
    private String payMethod;
    private String priceReceipt;

    public String getOrderCd() {
        return this.orderCd;
    }

    public void setOrderCd(String orderCd) {
        this.orderCd = orderCd;
    }

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

    public int getStatusCd() {
        return this.statusCd;
    }

    public void setStatusCd(int statusCd) {
        this.statusCd = statusCd;
    }

    public Date getOrderDt() {
        return this.orderDt;
    }

    public void setOrderDt(Date orderDt) {
        this.orderDt = orderDt;
    }

    public Date getPayDt() {
        return this.payDt;
    }

    public void setPayDt(Date payDt) {
        this.payDt = payDt;
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

    public String getSendNum() {
        return this.sendNum;
    }

    public void setSendNum(String sendNum) {
        this.sendNum = sendNum;
    }

    public String getDepositNum() {
        return this.depositNum;
    }

    public void setDepositNum(String depositNum) {
        this.depositNum = depositNum;
    }

    public String getPayMethod() {
        return this.payMethod;
    }

    public void setPayMethod(String payMethod) {
        this.payMethod = payMethod;
    }

    public String getPriceReceipt() {
        return this.priceReceipt;
    }

    public void setPriceReceipt(String priceReceipt) {
        this.priceReceipt = priceReceipt;
    }

}
