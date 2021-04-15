package nike.shoppingmall.repository;

import java.util.List;
import java.util.Optional;

import nike.shoppingmall.domain.ADBoard;

public interface ADBoardRepository {
    List<ADBoard> findAll();

    Optional<ADBoard> findById(int boardNum);
}


