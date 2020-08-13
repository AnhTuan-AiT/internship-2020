package com.hust.baseweb.model;

import com.hust.baseweb.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticateAccountOM {
    private boolean isAuthenticated;

    private User user;
}
