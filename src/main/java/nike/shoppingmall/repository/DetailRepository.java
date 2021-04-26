package nike.shoppingmall.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import nike.shoppingmall.domain.Detail;

@Mapper
public interface DetailRepository {
    List<Detail>  findAll();
}
