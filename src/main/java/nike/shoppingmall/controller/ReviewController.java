package nike.shoppingmall.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import nike.shoppingmall.domain.ADBoard;
import nike.shoppingmall.service.ReviewService;

@Controller
public class ReviewController {
    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/detail")
    public String detail(){

        return "detail";
    }

    @GetMapping("/detail/review")
    @ResponseBody
    public List<ADBoard> reviewAll(Model model){
        List<ADBoard> review = reviewService.findReview();
        model.addAttribute("review", review);

        return review;
    }

    @GetMapping("/detail/notice")
    @ResponseBody
    public List<ADBoard> noticeAll(Model model) {
        List<ADBoard> notice = reviewService.findNotice();
        model.addAttribute("notice", notice);

        return notice;
    }

    @GetMapping("/detail/notice/{idx}")
    @ResponseBody
    public Optional<ADBoard> findNotice(@PathVariable("idx") int boardNum){
        Optional<ADBoard> noticeOne = reviewService.noticeOne(boardNum);

        return noticeOne;
    }
}
