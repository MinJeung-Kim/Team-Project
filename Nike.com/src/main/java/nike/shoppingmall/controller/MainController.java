package nike.shoppingmall.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
  @GetMapping("/")
  public String root() {
    return "index.html";
  }

  @GetMapping("/index.html")
  public String index() {
    return "index.html";
  }
}
