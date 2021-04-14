package nike.shoppingmall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.ProductDetail;
import nike.shoppingmall.repository.ProductDetailRepository;

@Service
public class ProductDetailService {
  private final ProductDetailRepository productDetailRepository;

  @Autowired
  public ProductDetailService(ProductDetailRepository productDetailRepository) {
    this.productDetailRepository = productDetailRepository;
  }

  public List<ProductDetail> findProducts() {
    return productDetailRepository.findAll();
  }
}
