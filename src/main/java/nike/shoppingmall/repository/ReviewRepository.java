package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.ADBoard;

public interface ReviewRepository {
    
    List<ADBoard> findReview();
}
