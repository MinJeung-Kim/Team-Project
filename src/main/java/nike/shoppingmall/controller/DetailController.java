package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import nike.shoppingmall.domain.Detail;
import nike.shoppingmall.service.DetailService;

@Controller
public class DetailController {

  private DetailService detailService;

  @Autowired
  public DetailController(DetailService detailService) {
    this.detailService = detailService;
  }

  @GetMapping("/detailpd")
  public String list(Model model) {
    List<Detail> detail = detailService.findProducts();
    model.addAttribute("detail", detail);
}