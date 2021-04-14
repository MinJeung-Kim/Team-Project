package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.Customer;

public interface CustomerRepository {
  List<Customer> findAll();
}
