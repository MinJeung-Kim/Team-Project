package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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
}
