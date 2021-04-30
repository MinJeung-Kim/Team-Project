package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import nike.shoppingmall.domain.ADProduct;

@Repository
public class JdbcADProductRepository implements ADProductRepository{
    
    private final JdbcTemplate jdbcTemplate;

    public JdbcADProductRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<ADProduct> findAll() {
        return jdbcTemplate.query("SELECT * FROM msproduct AS m LEFT JOIN dtproduct AS d ON m.PRD_CD=d.PRD_CD", ProductRowMapper());
    }

    @Override
    public Optional<ADProduct> findByCd(String prdCd) {
        List<ADProduct> result = jdbcTemplate.query("SELECT * FROM msproduct AS m LEFT JOIN dtproduct AS d ON m.PRD_CD=d.PRD_CD where m.PRD_CD=?", ProductRowMapper(), prdCd);
        return result.stream().findAny();
    }

    @Override
    public int insertProduct(ADProduct adProduct) {
        int result = jdbcTemplate.update("INSERT INTO msproduct (PRD_CD,PRD_NM,PRD_CATEGORY,PRD_SUBTITLE,PRD_TYPE,PRD_SUMMARY,PRD_PRICE,INS_DT,UPT_DT) VALUES (?,?,?,?,?,?,?,?,?)"
        ,adProduct.getPrdCd(),adProduct.getPrdNm(),adProduct.getPrdCt(),adProduct.getPrdSub(),adProduct.getPrdTp()
    ,adProduct.getPrdSm(),adProduct.getPrdPr(),adProduct.getInsDt(),adProduct.getUptDt());
        return result;
    }

    private RowMapper<ADProduct> ProductRowMapper() {
        return (rs,rowNum) -> {

            ADProduct adProduct = new ADProduct();
            adProduct.setPrdCd(rs.getString("PRD_CD"));            
            adProduct.setPrdNm(rs.getString("PRD_NM"));
            adProduct.setPrdCt(rs.getString("PRD_CATEGORY"));
            adProduct.setPrdSub(rs.getString("PRD_SUBTITLE"));
            adProduct.setPrdTp(rs.getString("PRD_TYPE"));
            adProduct.setPrdCl(rs.getString("PRD_CL"));
            adProduct.setPrdSz(rs.getString("PRD_SIZE"));
            adProduct.setPrdStk(rs.getInt("PRD_STK"));
            adProduct.setPrdSm(rs.getString("PRD_SUMMARY"));
            adProduct.setPrdPr(rs.getInt("PRD_PRICE"));
            adProduct.setInsDt(rs.getDate("INS_DT"));
            adProduct.setUptDt(rs.getDate("UPD_DT"));

            return adProduct;
        };
    }

}
