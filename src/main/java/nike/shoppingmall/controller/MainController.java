package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import nike.shoppingmall.domain.Customer;
import nike.shoppingmall.service.MainService;

@Controller
public class MainController {

  private MainService mainService;

  @Autowired
  public MainController(MainService mainService) {
    this.mainService = mainService;
  }
  @GetMapping("/")
  public String root(Model model) {
    List<Customer> login = mainService.checkPw();
    model.addAttribute("login", login);

    return "index";
  }

  @GetMapping("/index.html")
  public String index() {
    return "index.html";
  }

  

}
