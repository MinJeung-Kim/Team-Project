package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import nike.shoppingmall.domain.ADBoard;

public interface ReviewRepository {
    
    List<ADBoard> findReview();

    List<ADBoard> findNotice();

    Optional<ADBoard> noticeOne(int boardNum);
}
