package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import nike.shoppingmall.domain.ADOrder;
import nike.shoppingmall.domain.ADOrderInfo;

public interface ADOrderRepository {
  List<ADOrder> findAll();
  Optional<ADOrderInfo> findInCartAll(String userMail);
}
