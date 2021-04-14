package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import nike.shoppingmall.domain.ProductDetail;
import nike.shoppingmall.service.ProductDetailService;

@Controller
public class ProductDetailController {

  private ProductDetailService productDetailService;

  @Autowired
  public ProductDetailController(ProductDetailService productDetailService) {
    this.productDetailService = productDetailService;
  }

  @GetMapping("/detail")
  public String list(Model model) {
    List<ProductDetail> prdDetail = productDetailService.findProducts();
    model.addAttribute("detail", prdDetail);

    return "detail";
  }
}
