package com.sapo.edu.demo;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Random;

@Getter
@Setter
public class Customer {
    private long acctNo;
    private long pin;
    private BigDecimal balance;

    public Customer(long pin, BigDecimal balance) {
        Random rand = new Random();
        this.acctNo = rand.nextInt(900000000) + 100000000;
        this.pin = pin;
        this.balance = balance;
    }

    public Customer(long acctNo, long pin, BigDecimal balance) {
        this.acctNo = acctNo;
        this.pin = pin;
        this.balance = balance;
    }
}
