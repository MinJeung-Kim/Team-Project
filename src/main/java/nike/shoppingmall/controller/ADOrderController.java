package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import nike.shoppingmall.domain.ADOrder;
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
    model.addAttribute("adDOrder", adDOrder);

    System.out.println(adDOrder.get(1));
    return "orderMng";
  }
}
