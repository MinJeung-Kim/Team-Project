package nike.shoppingmall.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import nike.shoppingmall.domain.ADProduct;
import nike.shoppingmall.service.ADProductService;

public class ADProductController {
    private ADProductService adProductService;

    @Autowired
    public ADProductController(ADProductService adProductService) {
    this.adProductService = adProductService;
    }

    @GetMapping("/adProduct")
    public String list(Model model) {
    List<ADProduct> adProduct = adProductService.findProductAll();
    model.addAttribute("adProduct", adProduct);
    return "adProduct";
    }

    @GetMapping("/adProduct/{prdCd}")
    @ResponseBody
    public Optional<ADProduct> table(@PathVariable("prdCd") String prdCd) {
    Optional<ADProduct> adProduct = adProductService.findByCd(prdCd);
    return adProduct;
    }
}
