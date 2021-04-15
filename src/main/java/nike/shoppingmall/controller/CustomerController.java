package nike.shoppingmall.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import nike.shoppingmall.domain.Customer;
import nike.shoppingmall.service.CustomerService;

@Controller
public class CustomerController {

  private CustomerService customerService;

  @Autowired
  public CustomerController(CustomerService customerService) {
    this.customerService = customerService;
  }

  @GetMapping("/customer")
  public String list(Model model) {
    List<Customer> customer = customerService.findCustomerAll();
    model.addAttribute("customer", customer);
    return "customer";
  }

  @GetMapping("/customer/{userId}")
  @ResponseBody
  public Optional<Customer> board(@PathVariable("userId") String userId) {
    Optional<Customer> customer = customerService.findById(userId);
    return customer;
  }
}
