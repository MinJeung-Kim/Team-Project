package nike.shoppingmall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.Detail;
import nike.shoppingmall.repository.DetailRepository;

@Service
public class DetailService {
  private final DetailRepository detailRepository;

  @Autowired
  public DetailService(DetailRepository detailRepository) {
    this.detailRepository = detailRepository;
  }

  public List<Detail> findProducts() {
    return detailRepository.findAll();
  }
}
