package nike.shoppingmall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import nike.shoppingmall.domain.Review;
import nike.shoppingmall.service.ReviewService;

@Controller
public class ReviewController {
    
    private ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) { 
        this.reviewService = reviewService;
    }

    @GetMapping("/review")
    public String list(Model model) {
        List<Review> review = reviewService.findReviewAll();
        model.addAttribute("review",review);

        return "review";
    }
}
