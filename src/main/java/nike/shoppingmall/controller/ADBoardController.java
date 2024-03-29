package nike.shoppingmall.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @GetMapping("/board/{idx}")
    @ResponseBody
    public Optional<ADBoard> board(@PathVariable("idx") int boardNum) {
        Optional<ADBoard> adBoard = adBoardService.findById(boardNum);

        return adBoard;
    }

    @PostMapping("/insertNotice")
    public String notice(@RequestParam("Nsubject") String subject,
                      @RequestParam("Ncontent") String content,
                      @RequestParam("NpassWd") String passWd){

        adBoardService.insertNotice(subject,content,passWd);
        return "redirect:/admin-board";
    }


}
