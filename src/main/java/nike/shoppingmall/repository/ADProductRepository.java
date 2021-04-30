package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import nike.shoppingmall.domain.ADProduct;

public interface ADProductRepository {
    List<ADProduct> findAll();
    Optional<ADProduct> findByCd(String prdCd);
    int insertProduct(ADProduct adProduct);
}