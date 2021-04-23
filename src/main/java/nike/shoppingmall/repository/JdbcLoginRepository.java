package nike.shoppingmall.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.LoginUser;

@Repository
public class JdbcLoginRepository implements LoginRepository{
    
    private final JdbcTemplate jdbcTemplate;

    public JdbcLoginRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public int checkId(String userId) {
        
        int result = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM user WHERE userId=?",Integer.class,userId);

        return result;
    }

    @Override
    public Boolean checkPassword(String userId, String password) {
        
        String result = jdbcTemplate.queryForObject("SELECT password FROM user WHERE userId=?",String.class,userId);
        Boolean rs = result.equals(password);

        return rs;
    }

    @Override
    public List<LoginUser> userInfo(String userId) {
        List<LoginUser> rs = jdbcTemplate.query("SELECT userId,userNm,password,tel,address,gradeCd from user WHERE userId=?", userRowMapper(),userId);
        return rs;
    }

    RowMapper<LoginUser> userRowMapper() {
        return (rs, rsNum) -> {
            LoginUser loginUser = new LoginUser();

            loginUser.setUserId(rs.getString("userId"));
            loginUser.setUserNm(rs.getString("userNm"));
            loginUser.setPassword(rs.getString("password"));
            loginUser.setTel(rs.getString("tel"));
            loginUser.setAddress(rs.getString("address"));
            loginUser.setGradeCd(rs.getInt("gradeCd"));

            return loginUser;
        };
    }

}
