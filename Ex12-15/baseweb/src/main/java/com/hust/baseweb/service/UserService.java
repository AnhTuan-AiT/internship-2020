package com.hust.baseweb.service;

import com.hust.baseweb.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    boolean authenticateAccount(User user);
}
