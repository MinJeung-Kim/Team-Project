package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.ADOrder;
import nike.shoppingmall.domain.ADOrderInfo;

@Repository
public class JdbcADOrderRepository implements ADOrderRepository {
  private final JdbcTemplate jdbcTemplate;

  public JdbcADOrderRepository(DataSource dataSource) {
    jdbcTemplate = new JdbcTemplate(dataSource);
  }

  @Override
  public List<ADOrder> findAll() {
    return jdbcTemplate.query("SELECT * FROM ordermng", ADOrderRowMapper());
  }

  @Override
  public Optional<ADOrderInfo> findInCartAll(String userMail) {
    List<ADOrderInfo> result = jdbcTemplate.query(
        "SELECT A.*, (SELECT COMM_NM FROM `COMMSTATUS` WHERE COMM_VAL = A.STATUS_CD AND COMM_CD = 'USER_STATUS') AS STATUS_NM, B.PRD_NM, B.PRD_IMG, B.PRD_SIZE, B.PRD_STYLE, B.PRD_CNT, B.PRD_PRICE, B.SEND_PRICE, B.SEND_PRICE,(SELECT SEND_NUM FROM delivery WHERE ORDER_CD = A.ORDER_CD) AS SEND_NUM  FROM ordermng A INNER JOIN cart B ON A.USER_EMAIL = B.USER_EMAIL WHERE A.USER_EMAIL = ?",
        OrderInfoRowMapper(), userMail);

    return result.stream().findAny();
  }

  private RowMapper<ADOrder> ADOrderRowMapper() {
    return (rs, rowNum) -> {
      ADOrder adDOrder = new ADOrder();
      adDOrder.setOrderCd(rs.getString("ORDER_CD"));
      adDOrder.setUserMail(rs.getString("USER_EMAIL"));
      adDOrder.setPrdCd(rs.getString("PRD_CD"));
      adDOrder.setStatusCd(rs.getInt("STATUS_CD"));
      adDOrder.setOrderDt(rs.getDate("ORDER_DT"));
      adDOrder.setPayDt(rs.getDate("PAY_DT"));
      adDOrder.setTotalPrice(rs.getLong("TOTAL_PRICE"));
      adDOrder.setInsDt(rs.getDate("INS_DT"));
      adDOrder.setUptDt(rs.getDate("UPT_DT"));
      return adDOrder;
    };
  }

  private RowMapper<ADOrderInfo> OrderInfoRowMapper() {
    return (rs, rowNum) -> {
      ADOrderInfo aDOrderInfo = new ADOrderInfo();
      aDOrderInfo.setOrderCd(rs.getString("ORDER_CD"));
      aDOrderInfo.setUserEmail(rs.getString("USER_EMAIL"));
      aDOrderInfo.setPrdCd(rs.getString("PRD_CD"));
      aDOrderInfo.setStatusCd(rs.getInt("STATUS_CD"));
      aDOrderInfo.setStatusNm(rs.getString("STATUS_NM"));
      aDOrderInfo.setOrderDt(rs.getDate("ORDER_DT"));
      aDOrderInfo.setPayDt(rs.getDate("PAY_DT"));
      aDOrderInfo.setTotalPrice(rs.getLong("TOTAL_PRICE"));
      aDOrderInfo.setSendPrice(rs.getInt("SEND_PRICE"));
      aDOrderInfo.setPrdNm(rs.getString("PRD_NM"));
      aDOrderInfo.setPrdImg(rs.getString("PRD_IMG"));
      aDOrderInfo.setPrdSize(rs.getInt("PRD_SIZE"));
      aDOrderInfo.setPrdStyle(rs.getString("PRD_STYLE"));
      aDOrderInfo.setPrdCnt(rs.getInt("PRD_CNT"));
      aDOrderInfo.setPrdPrice(rs.getLong("PRD_PRICE"));
      aDOrderInfo.setSandNum(rs.getString("SEND_NUM"));
      return aDOrderInfo;
    };
  }

}
