package com.NetVillage.NetVillage.Service;


import com.NetVillage.NetVillage.Mapper.MatchMapper;
import com.NetVillage.NetVillage.Model.TbMatch;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MatchService {
    @Autowired
    final private MatchMapper matchMapper;


    public List<TbMatch> getMatchList1(String category) {
        int categoryId = 0;
        if(category.equals("free")){
            categoryId = 1;
        } else if (category.equals("vs")) {
            categoryId = 2;
        } else{
            categoryId = 3;
        }
        return matchMapper.getMatchList1(categoryId);
    }

    public List<TbMatch> getMatchList() {

        return matchMapper.getMatchList();
    }

    public int add(TbMatch tbMatch){
        return matchMapper.add(tbMatch);
    }

}
