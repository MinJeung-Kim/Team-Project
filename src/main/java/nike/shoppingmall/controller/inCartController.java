package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import nike.shoppingmall.domain.InCart;
import nike.shoppingmall.service.InCartService;

@Controller
public class inCartController {

    private InCartService inCartService;

    @Autowired
    public inCartController(InCartService inCartService) {
        this.inCartService = inCartService;
    }

    @GetMapping("/inCart")
    public String list(Model model) {
        List<InCart> inCart = inCartService.findInCartAll();
        model.addAttribute("inCart", inCart);

        return "inCart";
    }

}
