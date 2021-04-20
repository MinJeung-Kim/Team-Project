package nike.shoppingmall.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.Customer;

@Repository
public class JdbcMainRepository implements MainRepository{

    private final JdbcTemplate jdbcTemplate;

    public JdbcMainRepository(DataSource datasource) {
        jdbcTemplate = new JdbcTemplate(datasource);
    }

    @Override
    public List<Customer> check() {
        return jdbcTemplate.query("SELECT userId,PASSWORD FROM user", UserRowMapper());
    }
    
    private RowMapper<Customer> UserRowMapper() {
        return (rs, rowNum) -> {
            Customer customer = new Customer();
            customer.setUserId(rs.getString("userId"));
            customer.setPassword(rs.getString("PASSWORD"));

            return customer;
        };
    }
}
