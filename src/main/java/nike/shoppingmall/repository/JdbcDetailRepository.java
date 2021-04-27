package nike.shoppingmall.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.Detail;

@Repository
public class JdbcDetailRepository implements DetailRepository{

    private final JdbcTemplate jdbcTemplate;

    public JdbcDetailRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Detail> findAll() {
        return jdbcTemplate.query("SELECT PRD_SUBTITLE as subtitle, PRD_PRICE as price, PRD_NM as name FROM msproduct", DetailRowMapper());
    }

    private RowMapper<Detail> DetailRowMapper() {
        return (rs, rowNum) -> {
            Detail detail = new Detail();
            detail.setSubtitle(rs.getString("PRD_SUBTITLE"));
            detail.setPrice(rs.getInt("PRD_PRICE"));
            detail.setName(rs.getString("PRD_NM"));
            return detail;
        };
    }
    
}
