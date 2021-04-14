package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import nike.shoppingmall.domain.ADBoard;
import nike.shoppingmall.service.ADBoardService;

@Controller
public class ADBoardController {
    
    private ADBoardService adBoardService;

    @Autowired
    public ADBoardController(ADBoardService adBoardService) {
        this.adBoardService = adBoardService;
    }

    @GetMapping("/admin-board")
    public String list(Model model) {
        List<ADBoard> adBoard = adBoardService.findADBoardAll();
        model.addAttribute("adBoard", adBoard);

        
        return "admin-board";
    }

    @GetMapping("/board")
    @ResponseBody
    public List<ADBoard> board(@RequestParam("boardNum") int boardNum) {
        List<ADBoard> adBoard = adBoardService.findById(boardNum);
        

        return adBoard;
    }

}
