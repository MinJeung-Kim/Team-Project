package nike.shoppingmall.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import nike.shoppingmall.domain.LoginUser;
import nike.shoppingmall.service.LoginService;

@Controller
public class LoginController {
    
    private LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }


    @PostMapping("/validate/{userId}/{password}")
    @ResponseBody
    public Boolean loginValidate(@PathVariable("userId") String userId,@PathVariable("password") String password) {

        Boolean validate;
        int id = loginService.checkId(userId);
        if(id == 1) {
            validate = loginService.checkPassword(userId,password);
            
        }else{
            validate = false;
        }
        return validate;
    }

    @PostMapping("/login/{userId}")
    public String login(HttpSession httpsession, @PathVariable("userId") String userId) {

        List<LoginUser> userInfo = loginService.userInfo(userId);
        httpsession.setAttribute("user", userInfo);

        return "redirect:/index";
    }

}
