package nike.shoppingmall.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

  // 데이터 넘김 없이 페이지 이동 -> get
  // 데이터 넘기면서 이동 -> post
  // Optional 가져올 데이터가 한 줄일 때
  @GetMapping("/customer/{userId}")
  @ResponseBody
  public Optional<Customer> board(@PathVariable("userId") String userId) {
    Optional<Customer> customer = customerService.findById(userId);
    return customer;
  }

  @PostMapping("/register")
  public String insertCustomer(Model model,Customer customer) {
    //System.out.println(customer.toString());
    int cus = customerService.insertCustomer(customer);
    model.addAttribute("customer", cus);
    return "redirect:/customer";
  }


  @GetMapping("/delete/{id}")
  @ResponseBody
  public String deleteCustomer(@PathVariable String id) {
    customerService.deleteCustomer(id);
    System.out.println("id="+id);
    return "redirect:/customer";
  }

  @PostMapping("/join")
  public String join(Customer customer) {
    customerService.join(customer);
    return "index";
  }

}
