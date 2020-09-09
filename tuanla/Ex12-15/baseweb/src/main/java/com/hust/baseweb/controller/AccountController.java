package com.hust.baseweb.controller;

import com.hust.baseweb.entity.User;
import com.hust.baseweb.model.AuthenticateAccountOM;
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
        boolean isAuthenticated = userService.authenticateAccount(user);
        AuthenticateAccountOM authenticateAccountOM = new AuthenticateAccountOM();

        authenticateAccountOM.setUser(user);

        if (isAuthenticated) {
            authenticateAccountOM.setAuthenticated(true);
        }

        return ResponseEntity.ok().body(authenticateAccountOM);
    }
}
