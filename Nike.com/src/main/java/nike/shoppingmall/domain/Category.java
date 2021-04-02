package nike.shoppingmall.domain;

public class Category {
  private Long prdCd;
  private String prdNm;
  private Long prdPrice;

  public Long getPrdCd() {
    return prdCd;
  }

  public void setPrdCd(Long prdCd) {
    this.prdCd = prdCd;
  }

  public String getPrdNm() {
    return prdNm;
  }

  public void setPrdNm(String prdNm) {
    this.prdNm = prdNm;
  }

  public Long getPrdPrice() {
    return prdPrice;
  }

  public void setPrdPrice(Long prdPrice) {
    this.prdPrice = prdPrice;
  }

}