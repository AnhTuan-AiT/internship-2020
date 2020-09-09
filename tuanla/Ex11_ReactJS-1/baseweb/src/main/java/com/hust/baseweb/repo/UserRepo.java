package com.hust.baseweb.repo;

import com.hust.baseweb.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, String> {
    User findByUserNameAndPassword(String id, String password);
}
