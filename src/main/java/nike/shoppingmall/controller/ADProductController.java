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

import nike.shoppingmall.domain.ADProduct;
import nike.shoppingmall.service.ADProductService;

@Controller
public class ADProductController {
    private ADProductService adProductService;

    @Autowired
    public ADProductController(ADProductService adProductService) {
    this.adProductService = adProductService;
    }

    @GetMapping("/admin-productMng")
    public String list(Model model) {
    List<ADProduct> adProduct = adProductService.findProductAll();
    model.addAttribute("adProduct", adProduct);
    return "admin-productMng";
    }

    @GetMapping("/admin-productMng/{prdCd}")
    @ResponseBody
    public Optional<ADProduct> table(@PathVariable("prdCd") String prdCd) {
    Optional<ADProduct> adProduct = adProductService.findByCd(prdCd);
    return adProduct;
    }

    @PostMapping("/rg")
    public String insertProduct(Model model,ADProduct adProduct) {
    //System.out.println(adProduct.toString());
    int pro = adProductService.insertProduct(adProduct);
    model.addAttribute("adProduct", pro);
    return "redirect:/admin-productMng";
  }
  
}
