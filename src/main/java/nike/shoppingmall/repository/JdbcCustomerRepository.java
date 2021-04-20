package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.Customer;

@Repository
public class JdbcCustomerRepository implements CustomerRepository {
  private final JdbcTemplate jdbcTemplate;

  public JdbcCustomerRepository(DataSource dataSource) {
    jdbcTemplate = new JdbcTemplate(dataSource);
  }

  @Override
  public List<Customer> findAll() {
    return jdbcTemplate.query("SELECT * FROM user order by boardNum asc", CustomerRowMapper());
  }

  public Optional<Customer> findById(String userId) {
    List<Customer> result = jdbcTemplate.query("SELECT * FROM user where userId=?", CustomerRowMapper(), userId);
    return result.stream().findAny();
  }

  private RowMapper<Customer> CustomerRowMapper() {
    return (rs, rowNum) -> {
      Customer customer = new Customer();
      customer.setBoardNum(rs.getInt("boardNum"));
      customer.setUserId(rs.getString("userId"));
      customer.setUserNm(rs.getString("userNm"));
      customer.setPassword(rs.getString("password"));
      customer.setTel(rs.getString("tel"));
      customer.setGender(rs.getString("gender"));
      customer.setBirth(rs.getDate("birth"));
      customer.setAddress(rs.getString("address"));
      customer.setGradeCd(rs.getInt("gradeCd"));
      customer.setStatusCd(rs.getInt("statusCd"));
      customer.setMemo(rs.getString("memo"));
      customer.setInsDt(rs.getDate("insDt"));
      customer.setUptDt(rs.getDate("uptDt"));

      return customer;
    };
  }
}
