package nike.shoppingmall.domain;

import java.sql.Date;

public class ADProduct {
    private String prdCd;
    private String prdNm;
    private String prdCl;   //색상
    private String prdSz;   //사이즈
    private String prdCt;   //카테고리
    private String prdSub; //서브타이틀
    private String prdTp;  //종류
    private String prdSm;  //요약
    private String prdStk;  //현재고량
    private int prdPr;
    private Date insDt;
    private Date uptDt;

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

    public String getPrdCl() {
        return this.prdCl;
    }

    public void setPrdCl(String prdCl) {
        this.prdCl = prdCl;
    }

    public String getPrdSz() {
        return this.prdSz;
    }

    public void setPrdSz(String prdSz) {
        this.prdSz = prdSz;
    }

    public String getPrdCt() {
        return this.prdCt;
    }

    public void setPrdCt(String prdCt) {
        this.prdCt = prdCt;
    }

    public String getPrdSub() {
        return this.prdSub;
    }

    public void setPrdSub(String prdSub) {
        this.prdSub = prdSub;
    }

    public String getPrdTp() {
        return this.prdTp;
    }

    public void setPrdTp(String prdTp) {
        this.prdTp = prdTp;
    }

    public String getPrdSm() {
        return this.prdSm;
    }

    public void setPrdSm(String prdSm) {
        this.prdSm = prdSm;
    }

    public String getPrdStk() {
        return this.prdStk;
    }

    public void setPrdStk(String prdStk) {
        this.prdStk = prdStk;
    }

    public int getPrdPr() {
        return this.prdPr;
    }

    public void setPrdPr(int prdPr) {
        this.prdPr = prdPr;
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
