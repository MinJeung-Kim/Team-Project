package nike.shoppingmall.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.ADOrder;

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

  private RowMapper<ADOrder> ADOrderRowMapper() {
    return (rs, rowNum) -> {
      ADOrder adDOrder = new ADOrder();
      adDOrder.setOrderCd(rs.getLong("ORDER_CD"));
      adDOrder.setUserID(rs.getString("USER_ID"));
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
}
