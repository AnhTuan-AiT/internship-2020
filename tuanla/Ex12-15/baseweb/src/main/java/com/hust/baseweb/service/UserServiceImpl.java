package com.hust.baseweb.service;

import com.hust.baseweb.entity.User;
import com.hust.baseweb.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo userRepo;

    @Override
    public boolean authenticateAccount(User user) {
        return userRepo.findByUserNameAndPassword(user.getUserName(), user.getPassword()) != null;
    }
}
