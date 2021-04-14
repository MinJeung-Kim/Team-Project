package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.ProductDetail;

public interface ProductDetailRepository {
    List<ProductDetail>  findAll();
}
