package nike.shoppingmall.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.ADBoard;
import nike.shoppingmall.repository.ReviewRepository;


@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<ADBoard> findReview() {
        return reviewRepository.findReview();
    }

    public List<ADBoard> findNotice() {
        return reviewRepository.findNotice();
    }

    public Optional<ADBoard> noticeOne(int boardNum) {
        return reviewRepository.noticeOne(boardNum);
    }
}
