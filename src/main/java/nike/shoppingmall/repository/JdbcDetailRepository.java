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
        return jdbcTemplate.query("SELECT m.PRD_CD as cd, m.PRD_SUBTITLE as subtitle, m.PRD_PRICE as price, m.PRD_NM as name, d.PRD_CL as color FROM msproduct AS m LEFT JOIN dtproduct AS d ON m.PRD_CD = d.PRD_CD", DetailRowMapper());
    }

    private RowMapper<Detail> DetailRowMapper() {
        return (rs, rowNum) -> {
            Detail detail = new Detail();
            detail.setSubtitle(rs.getString("PRD_SUBTITLE"));
            detail.setPrice(rs.getInt("PRD_PRICE"));
            detail.setName(rs.getString("PRD_NM"));
            detail.setColor(rs.getString("PRD_Cl"));
            detail.setCd(rs.getString("PRD_CD"));
            return detail;
        };
    }
    
}
