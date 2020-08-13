package com.sapo.edu.demo;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
public class BidvAtm implements Atm {
    private BigDecimal moneyAtm;
    private Printer printer;

    public BidvAtm(long initValue, Printer printer) {
        this.moneyAtm = new BigDecimal(initValue);
        this.printer = printer;
    }

    @Override
    public void withDraw(Customer customer, BigDecimal amount) {
        /*if (amount == null || amount.compareTo(new BigDecimal(0)) < 0) {
            printer.printMessage("Amount is invalid");
            return;
        }*/
        if (customer.getBalance().compareTo(amount) < 0) {
            printer.printMessage("--> So du trong tai khoan khong du");
            return;
        }
        if (amount.compareTo(moneyAtm) >= 0) {
            printer.printMessage("--> ATM khong co du tien");
            return;
        }

        BigDecimal currentBalance = customer.getBalance();
        customer.setBalance(currentBalance.subtract(amount));
        moneyAtm = moneyAtm.subtract(amount);
        System.out.print("--> Giao dich thanh cong. ");
        displayCustomerInfo(customer);
    }

    @Override
    public void printCurrentMoney() {
        printer.printMessage("--> So tien hien co trong ATM la " + moneyAtm);
    }

    @Override
    public void deposit(Customer customer, BigDecimal amount) {
        /*if (amount == null || amount.compareTo(new BigDecimal(0)) <= 0) {
            printer.printMessage("Amount is invalid");
            return;
        }*/

        BigDecimal currentBalance = customer.getBalance();
        customer.setBalance(currentBalance.add(amount));
        moneyAtm = moneyAtm.add(amount);
        System.out.print("--> Giao dich thanh cong. ");
        displayCustomerInfo(customer);
    }

    @Override
    public void displayCustomerInfo(Customer customer) {
        printer.printCustomer(customer);
    }

    @Override
    public void closePrinter() {
        printer.close();
    }
}
