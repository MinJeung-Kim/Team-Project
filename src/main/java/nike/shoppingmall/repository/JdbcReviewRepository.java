package nike.shoppingmall.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.Review;

@Repository
public class JdbcReviewRepository implements ReviewRepository{
    private final JdbcTemplate jdbcTemplate;

    public JdbcReviewRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Review> findAll() {
        return jdbcTemplate.query("SELECT A.BOARD_NUM,A.SUBJECT,A.CONTENT,A.INS_DT,A.UPT_DT,B.*,C.FILE_ID FROM board A LEFT JOIN grade B ON A.BOARD_NUM=B.BOARD_NUM LEFT JOIN file C ON A.BOARD_NUM=C.BOARD_NUM", ReviewRowMapper());
    }

    private RowMapper<Review> ReviewRowMapper() {
        return (rs, rowNum) -> {
            Review review = new Review();
            review.setBoardNum(rs.getInt("BOARD_NUM"));
            review.setUserNm("userNm");
            review.setPrdCd(rs.getString("PRD_CD"));
            review.setSubject(rs.getString("SUBJECT"));
            review.setContent(rs.getString("CONTENT"));
            review.setSizePoint(rs.getInt("SIZE_POINT"));
            review.setComfortPoint(rs.getInt("COMFORT_POINT"));
            review.setDurablePoint(rs.getInt("DURABLE_POINT"));
            review.setWidthPoint(rs.getInt("WIDTH_POINT"));
            review.setStar(rs.getInt("STAR"));
            review.setHelp(rs.getInt("HELP"));
            review.setFileId(rs.getInt("FILE_ID"));
            review.setInsDt(rs.getDate("INS_DT"));
            review.setUptDt(rs.getDate("UPT_DT"));
            return review;
        };
    }

}
