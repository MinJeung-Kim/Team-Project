package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.ADOrder;

public interface ADOrderRepository {
  List<ADOrder> findAll();
}
