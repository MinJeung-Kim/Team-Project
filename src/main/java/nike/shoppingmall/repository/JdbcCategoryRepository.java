package nike.shoppingmall.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.Category;

@Repository
public class JdbcCategoryRepository implements CategoryRepository {
  private final JdbcTemplate jdbcTemplate;

  public JdbcCategoryRepository(DataSource dataSource) {
    jdbcTemplate = new JdbcTemplate(dataSource);
  }

  @Override
  public List<Category> findAll() {
    return jdbcTemplate.query("SELECT * FROM product", CategoryRowMapper());
  }

  private RowMapper<Category> CategoryRowMapper() {
    return (rs, rowNum) -> {
      Category category = new Category();
      category.setPrdCd(rs.getLong("PRD_CD"));
      category.setPrdNm(rs.getString("PRD_NM"));
      category.setPrdPrice(rs.getLong("PRD_Price"));
      return category;
    };
  }
}
