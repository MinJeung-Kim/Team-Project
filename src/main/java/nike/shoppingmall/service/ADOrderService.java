package nike.shoppingmall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.ADOrder;
import nike.shoppingmall.repository.ADOrderRepository;

@Service
public class ADOrderService {
  private final ADOrderRepository adDOrderRepository;

  @Autowired
  public ADOrderService(ADOrderRepository adDOrderRepository) {
    this.adDOrderRepository = adDOrderRepository;
  }

  public List<ADOrder> findADOrderyAll() {
    return adDOrderRepository.findAll();
  }
}
