package com.hust.baseweb.controller;

import com.hust.baseweb.entity.User;
import com.hust.baseweb.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@AllArgsConstructor(onConstructor = @__(@Autowired))
@RequestMapping("/account")
public class AccountController {
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateAccount(@RequestBody User user) {
        return userService.authenticateAccount(user) ? ResponseEntity.ok().body("Authenticated") : ResponseEntity.ok().body("Account not exist");
    }
}
