package nike.shoppingmall.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.InCart;

@Repository
public class JdbcInCartRepository implements InCartRepository {
    private final JdbcTemplate jdbcTemplate;

    public JdbcInCartRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<InCart> findAll() {
        return jdbcTemplate.query("SELECT * FROM cart", InCartRowMapper());
    }

    private RowMapper<InCart> InCartRowMapper() {
        return (rs, rowNum) -> {
            InCart inCart = new InCart();
            inCart.setUserEmail(rs.getString("USER_EMAIL"));
            inCart.setPrdCd(rs.getString("PRD_CD"));
            inCart.setPrdNm(rs.getString("PRD_NM"));
            inCart.setPrdImg(rs.getString("PRD_IMG"));
            inCart.setPrdSize(rs.getInt("PRD_SIZE"));
            inCart.setPrdStyle(rs.getString("PRD_STYLE"));
            inCart.setPrdCnt(rs.getInt("PRD_CNT"));
            inCart.setPrdPrice(rs.getLong("PRD_PRICE"));
            inCart.setSendPrice(rs.getInt("SEND_PRICE"));
            inCart.setTotalPrice(rs.getLong("TOTAL_PRICE"));
            inCart.setInsDt(rs.getDate("INS_DT"));
            inCart.setUptDt(rs.getDate("UPT_DT"));
            return inCart;
        };
    }
}
