package nike.shoppingmall.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import nike.shoppingmall.domain.ADOrder;
import nike.shoppingmall.domain.InCart;
import nike.shoppingmall.service.ADOrderService;

@Controller
public class ADOrderController {

  private ADOrderService adDOrderService;

  @Autowired
  public ADOrderController(ADOrderService adDOrderService) {
    this.adDOrderService = adDOrderService;
  }

  @GetMapping("/admin-orderMng")
  public String list(Model model) {
    List<ADOrder> adDOrder = adDOrderService.findADOrderyAll();
    // List<InCart> inCart = inCartService.findInCartAll();

    model.addAttribute("adDOrder", adDOrder);
    // model.addAttribute("inCart", inCart);

    return "admin-orderMng";
  }

  @GetMapping("/inCart/{email}")
  @ResponseBody
  public Optional<InCart> cartInfo(@PathVariable("email") String userMail) {
    Optional<InCart> inCart = adDOrderService.findInCartAll(userMail);
    System.out.println(inCart);
    return inCart;
  }
}
