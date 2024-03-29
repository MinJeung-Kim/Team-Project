package nike.shoppingmall.domain;

import java.sql.Date;

public class ADOrder {
  private String orderCd;
  private String userMail;
  private String prdCd;
  private int statusCd;
  private Date orderDt;
  private Date payDt;
  private Long totalPrice;
  private Date insDt;
  private Date uptDt;

  public String getOrderCd() {
    return this.orderCd;
  }

  public void setOrderCd(String orderCd) {
    this.orderCd = orderCd;
  }

  public String getUserMail() {
    return this.userMail;
  }

  public void setUserMail(String userMail) {
    this.userMail = userMail;
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

}