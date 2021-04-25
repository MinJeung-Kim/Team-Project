package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import nike.shoppingmall.domain.Customer;

public interface CustomerRepository {
  List<Customer> findAll();
  Optional<Customer> findById(String userId);
  int insertCustomer(Customer customer);
  int deleteCustomer(String id);
  int join(Customer customer);
  int updateCustomer(Customer customer);
}
