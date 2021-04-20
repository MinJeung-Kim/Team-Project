package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.ADBoard;

@Repository
public class JdbcADBoardRepository implements ADBoardRepository{
    private final JdbcTemplate jdbcTemplate;

    public JdbcADBoardRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<ADBoard> findAll() {
        return jdbcTemplate.query("SELECT A.*, B.* FROM BOARD A LEFT JOIN GRADE B ON B.BOARD_NUM = A.BOARD_NUM",ADBoardRowMapper());
    }

    @Override
    public Optional<ADBoard> findById(int boardNum) {
        List<ADBoard> result =  jdbcTemplate.query("SELECT A.*, B.* FROM BOARD A LEFT JOIN GRADE B ON B.BOARD_NUM = A.BOARD_NUM where A.board_num=?",ADBoardRowMapper(),boardNum);

        return result.stream().findAny();
    }

    private RowMapper<ADBoard> ADBoardRowMapper() {
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
}