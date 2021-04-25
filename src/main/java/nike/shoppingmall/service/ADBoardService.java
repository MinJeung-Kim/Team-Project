package nike.shoppingmall.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nike.shoppingmall.domain.ADBoard;
import nike.shoppingmall.repository.ADBoardRepository;


@Service
public class ADBoardService {
    private final ADBoardRepository adBoardRepository;

    @Autowired
    public ADBoardService(ADBoardRepository adBoardRepository) {
        this.adBoardRepository = adBoardRepository;
    }

    public List<ADBoard> findADBoardAll() {
        return adBoardRepository.findAll();
    }

    public Optional<ADBoard> findById(int boardNum) {
        return adBoardRepository.findById(boardNum);
    }

    public int insertNotice(String subject, String content, String passWd){
        return adBoardRepository.insertNotice(subject, content, passWd);
    }
}
