package nike.shoppingmall.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.ADBoard;

@Repository
public class JdbcReviewRepository implements ReviewRepository{
    private final JdbcTemplate jdbcTemplate;

    public JdbcReviewRepository(DataSource dataSource){
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<ADBoard> findReview() {
        List<ADBoard> result = jdbcTemplate.query("SELECT A.*, B.* FROM BOARD A LEFT JOIN GRADE B ON B.BOARD_NUM = A.BOARD_NUM WHERE board_status=10 ORDER BY A.board_num desc", reviewRowMapper());
        return result;
    }

    @Override
    public List<ADBoard> findNotice() {
        List<ADBoard> result = jdbcTemplate.query("SELECT BOARD_NUM,SUBJECT FROM BOARD WHERE board_status=20 ORDER BY board_num desc", noticeRowMapper());
        return result;
    }

    private RowMapper<ADBoard> reviewRowMapper() {
        return (rs, rowNum) -> {
            ADBoard adBoard = new ADBoard();
          adBoard.setBoardNum(rs.getInt("BOARD_NUM"));
          adBoard.setUserId(rs.getString("USER_ID"));
          adBoard.setUserNm("봄");
          adBoard.setPrdCd(rs.getString("PRD_CD"));
          adBoard.setBoardStatus(rs.getInt("BOARD_STATUS"));
          adBoard.setSubject(rs.getString("SUBJECT"));
          adBoard.setContent(rs.getString("CONTENT"));
          adBoard.setBoardPw(rs.getString("BOARD_PW"));
          adBoard.setSizePoint(rs.getInt("SIZE_POINT"));
          adBoard.setComfortPoint(rs.getInt("COMFORT_POINT"));
          adBoard.setDurablePoint(rs.getInt("DURABLE_POINT"));
          adBoard.setWidthPoint(rs.getInt("WIDTH_POINT"));
          adBoard.setStar(rs.getInt("STAR"));
          adBoard.setHelp(rs.getInt("HELP"));
          adBoard.setInsDt(rs.getDate("INS_DT"));
          adBoard.setUptDt(rs.getDate("UPT_DT"));

          return adBoard;
        };
    }

    private RowMapper<ADBoard> noticeRowMapper() {
        return (rs, rowNum) -> {
            ADBoard adBoard = new ADBoard();
          adBoard.setBoardNum(rs.getInt("BOARD_NUM"));
          adBoard.setSubject(rs.getString("SUBJECT"));

          return adBoard;
        };
    }
}
