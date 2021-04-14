package nike.shoppingmall.repository;

import java.util.List;

import nike.shoppingmall.domain.Review;

public interface ReviewRepository {
    List<Review> findAll();
    
}
