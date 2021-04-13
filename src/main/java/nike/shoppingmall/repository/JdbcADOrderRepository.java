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
      adDOrder.setOrderCd(rs.getLong("orderCd"));
      // adDOrder.setUserID(rs.getString("userID"));
      // adDOrder.setPrdCd(rs.getString("prdCd"));
      // adDOrder.setStatusCd(rs.getInt("statusCd"));
      // adDOrder.setOrderDt(rs.getDate("orderDt"));
      // adDOrder.setPayDt(rs.getDate("payDt"));
      // adDOrder.setTotalPrice(rs.getLong("totalPrice"));
      // adDOrder.setInsDt(rs.getDate("insDt"));
      // adDOrder.setUptDt(rs.getDate("uptDt"));
      return adDOrder;
    };
  }
}
