package com.sapo.edu.demo;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class PrinterFile implements Printer {
    BufferedWriter out;

    public PrinterFile() {
        try {
            out = new BufferedWriter(new FileWriter("D:\\Projects\\IdeaProjects\\spring-dependency-injection\\data\\log"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void close() {
        try {
            if (out != null) {
                out.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void printCustomer(Customer customer) {
        try {
            out.write("So tai khoan: " + customer.getAcctNo() + ", so du: " + customer.getBalance().toString() + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void printMessage(String message) {
        try {
            out.write(message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
