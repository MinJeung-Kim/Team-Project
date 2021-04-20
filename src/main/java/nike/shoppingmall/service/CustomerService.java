package nike.shoppingmall.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.Customer;
import nike.shoppingmall.repository.CustomerRepository;

@Service
public class CustomerService {
  private final CustomerRepository customerRepository;

  @Autowired
  public CustomerService(CustomerRepository customerRepository) {
    this.customerRepository = customerRepository;
  }

  public List<Customer> findCustomerAll() {
    return customerRepository.findAll();
  }

  //userId로 select
  public Optional<Customer> findById(String userId) {
    return customerRepository.findById(userId);
  }
}
