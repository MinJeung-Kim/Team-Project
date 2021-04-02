package nike.shoppingmall.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import nike.shoppingmall.domain.Member;

@Mapper
public interface MybatisMemberRepository extends MemberRepository {
  List<Member> findAll();
}
