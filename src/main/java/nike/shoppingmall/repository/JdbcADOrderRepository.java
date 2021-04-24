package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.ADOrder;
import nike.shoppingmall.domain.InCart;

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
  public Optional<InCart> findInCartAll(String userMail) {
    List<InCart> result = jdbcTemplate.query("SELECT * FROM cart where USER_EMAIL = ?", CartRowMapper(), userMail);

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

  private RowMapper<InCart> CartRowMapper() {
    return (rs, rowNum) -> {
      InCart inCart = new InCart();
      inCart.setUserEmail(rs.getString("USER_EMAIL"));
      inCart.setPrdNm(rs.getString("PRD_NM"));
      inCart.setPrdImg(rs.getString("PRD_IMG"));
      inCart.setPrdSize(rs.getInt("PRD_SIZE"));
      inCart.setPrdStyle(rs.getString("PRD_STYLE"));
      inCart.setPrdCnt(rs.getInt("PRD_CNT"));
      inCart.setPrdPrice(rs.getLong("PRD_PRICE"));
      inCart.setSendPrice(rs.getInt("SEND_PRICE"));
      return inCart;
    };
  }

}
