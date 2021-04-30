package nike.shoppingmall.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.ADProduct;
import nike.shoppingmall.repository.ADProductRepository;

@Service
public class ADProductService {
  private final ADProductRepository adProductRepository;

  @Autowired
  public ADProductService(ADProductRepository adProductRepository) {
    this.adProductRepository = adProductRepository;
  }

  public List<ADProduct> findProductAll() {
    return adProductRepository.findAll();
  }

  public Optional<ADProduct> findByCd(String prdCd) {
    return adProductRepository.findByCd(prdCd);
  }

  public int insertProduct(ADProduct adProduct) {
    return adProductRepository.insertProduct(adProduct);
  }
  
}