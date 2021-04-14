package nike.shoppingmall.domain;

import java.sql.Date;

public class Review {
    private int boardNum;
    private String userNm;
    private String prdCd;
    private String subject;
    private String content;
    private int sizePoint;
    private int comfortPoint;
    private int durablePoint;
    private int widthPoint;
    private int star;
    private int help;
    private int fileId;
    private String filePath;
    private Date insDt;
    private Date uptDt;


    public int getBoardNum() {
        return this.boardNum;
    }

    public void setBoardNum(int boardNum) {
        this.boardNum = boardNum;
    }

    public String getUserNm() {
        return this.userNm;
    }

    public void setUserNm(String userNm) {
        this.userNm = userNm;
    }

    public String getPrdCd() {
        return this.prdCd;
    }

    public void setPrdCd(String prdCd) {
        this.prdCd = prdCd;
    }

    public String getSubject() {
        return this.subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getSizePoint() {
        return this.sizePoint;
    }

    public void setSizePoint(int sizePoint) {
        this.sizePoint = sizePoint;
    }

    public int getComfortPoint() {
        return this.comfortPoint;
    }

    public void setComfortPoint(int comfortPoint) {
        this.comfortPoint = comfortPoint;
    }

    public int getDurablePoint() {
        return this.durablePoint;
    }

    public void setDurablePoint(int durablePoint) {
        this.durablePoint = durablePoint;
    }

    public int getWidthPoint() {
        return this.widthPoint;
    }

    public void setWidthPoint(int widthPoint) {
        this.widthPoint = widthPoint;
    }

    public int getStar() {
        return this.star;
    }

    public void setStar(int star) {
        this.star = star;
    }

    public int getHelp() {
        return this.help;
    }

    public void setHelp(int help) {
        this.help = help;
    }

    public int getFileId() {
        return this.fileId;
    }

    public void setFileId(int fileId) {
        this.fileId = fileId;
    }

    public String getFilePath() {
        return this.filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
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