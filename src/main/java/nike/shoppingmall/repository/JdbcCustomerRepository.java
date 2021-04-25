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
    return jdbcTemplate.query("SELECT * FROM user order by listNum asc", CustomerRowMapper());
  }

  public Optional<Customer> findById(String userId) {
    List<Customer> result = jdbcTemplate.query("SELECT * FROM user where userId=?", CustomerRowMapper(), userId);
    return result.stream().findAny();
  }

  public int insertCustomer(Customer customer) {
    int result = jdbcTemplate.update("INSERT INTO user (userNm,userId,password,tel,gender,birth,address,insDt,uptDt,memo) VALUES (?,?,?,?,?,?,?,?,?,?)"
    ,customer.getUserNm(),customer.getUserId(),customer.getPassword(),customer.getTel(),customer.getGender()
    ,customer.getBirth(),customer.getAddress(),customer.getInsDt(),customer.getUptDt(),customer.getMemo());
    return result;
  }

  public int deleteCustomer(String id) {
    int result = jdbcTemplate.update("DELETE FROM user where userId=?", id);
    return result;

  @Override
  public int join(Customer customer) {
      int result = jdbcTemplate.update("INSERT INTO user (userNm,userId,password,tel) VALUES (?,?,?,?)", customer.getUserNm(),customer.getUserId(),customer.getPassword(),customer.getTel());
      return result;
  }

  private RowMapper<Customer> CustomerRowMapper() {
    return (rs, rowNum) -> {
      Customer customer = new Customer();
      customer.setListNum(rs.getInt("listNum"));
      customer.setUserId(rs.getString("userId"));
      customer.setUserNm(rs.getString("userNm"));
      customer.setPassword(rs.getString("password"));
      customer.setTel(rs.getString("tel"));
      customer.setGender(rs.getString("gender"));
      customer.setBirth(rs.getString("birth"));
      customer.setAddress(rs.getString("address"));
      customer.setGradeCd(rs.getInt("gradeCd"));
      customer.setStatusCd(rs.getInt("statusCd"));
      customer.setMemo(rs.getString("memo"));
      customer.setInsDt(rs.getString("insDt"));
      customer.setUptDt(rs.getString("uptDt"));

      return customer;
    };
  }
}
