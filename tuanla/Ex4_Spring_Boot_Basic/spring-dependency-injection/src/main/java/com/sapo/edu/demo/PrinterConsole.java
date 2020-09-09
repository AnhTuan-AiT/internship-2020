package com.sapo.edu.demo;

public class PrinterConsole implements Printer {
    @Override
    public void printCustomer(Customer customer) {
        System.out.println("So tai khoan: " + customer.getAcctNo() + ", so du: " + customer.getBalance().toString());
    }

    @Override
    public void printMessage(String message) {
        System.out.println(message);
    }

    @Override
    public void close() {

    }
}
