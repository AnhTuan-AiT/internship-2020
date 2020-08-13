package com.sapo.edu.demo;

import com.sapo.edu.demo.config.AtmConfig;
import com.sapo.edu.demo.config.BidvAtmConfig;
import org.apache.commons.lang3.StringUtils;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.io.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
    private Scanner scanner;
    private Atm bidvAtm;
    private List<Customer> customers;
    private Long currentCustomer;
    private long accNo;
    private long pinCode;
    private BigDecimal balance;

    public void loadData(String filePath) {
        BufferedReader in = null;

        try {
            in = new BufferedReader(new FileReader(filePath));
            int size = Integer.parseInt(in.readLine());

            for (int i = 0; i < size; i++) {
                customers.add(new Customer(Long.parseLong(in.readLine()), Long.parseLong(in.readLine()), new BigDecimal(in.readLine())));
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public String getAccountNo() {
        String accNo;

        while (true) {
            System.out.print("So tai khoan: ");
            accNo = StringUtils.trimToNull(scanner.next());

            if (!StringUtils.isNumeric(accNo)) {
                System.out.println("--> So tai khoan gom cac ki tu so tu 0 den 9 viet lien nhau. Vui long nhap lai!");
            } else {
                return accNo;
            }
        }
    }

    public String getPinCode() {
        String pin;

        while (true) {
            System.out.print("Ma PIN: ");
            pin = StringUtils.trimToNull(scanner.next());

            if (!StringUtils.isNumeric(pin)) {
                System.out.println("--> Ma PIN gom cac ki tu so tu 0 den 9 viet lien nhau. Vui long nhap lai!");
            } else {
                return pin;
            }
        }
    }

    public String getAmountOfMoney() {
        String balance;

        while (true) {
            System.out.print("So tien: ");
            balance = StringUtils.trimToNull(scanner.next());

            if (!StringUtils.isNumeric(balance)) {
                System.out.println("--> Khong hop le!");
            } else {
                return balance;
            }
        }
    }

    public void createTransaction(String type) {
        balance = new BigDecimal(getAmountOfMoney());

        for (Customer customer1 : customers) {
            if (customer1.getAcctNo() == currentCustomer) {
                if (type.equals("Rut tien")) {
                    bidvAtm.withDraw(customer1, balance);
                } else {
                    bidvAtm.deposit(customer1, balance);
                }
                return;
            }
        }

        System.out.println("--> Tai khoan khong hop le. Vui long thu lai");
    }

    public void greetCustomer() {
        System.out.println("\n\nXin chao quy khach. Vui long nhap thong tin tai khoan de su dung cac dich vu\n" +
                "         1. Toi da co tai khoan\n" +
                "         2. Tao tai khoan");

        String option;
        int choice;

        while (true) {
            while (true) {
                System.out.print("\nLua chon: ");
                option = scanner.next();

                if (!StringUtils.isNumeric(option)) {
                    System.out.println("--> Nhap vao mot so, anh (chi) hieu hon?");
                    continue;
                } else {
                    option = StringUtils.trimToEmpty(option);

                    if (option.length() > 1) {
                        choice = 0;
                    } else {
                        choice = Integer.parseInt(option);
                    }

                    if (choice < 1 || choice > 2) {
                        System.out.print("--> Lua chon khong hop le. Vui long thu lai!");
                        continue;
                    }
                }

                break;
            }


            if (choice == 1) {
                accNo = Long.parseLong(getAccountNo());
                pinCode = Long.parseLong(getPinCode());

                for (Customer customer1 : customers) {
                    if (customer1.getAcctNo() == accNo && customer1.getPin() == pinCode) {
                        currentCustomer = accNo;
                        return;
                    }
                }

                System.out.println("--> Tai khoan khong hop le. Vui long thu lai");
            } else {
                pinCode = Long.parseLong(getPinCode());
                balance = new BigDecimal(getAmountOfMoney());

                Customer customer = new Customer(pinCode, balance);
                customers.add(customer);
                currentCustomer = customer.getAcctNo();

                System.out.print("--> Tao tai khoan thanh cong. ");
                bidvAtm.displayCustomerInfo(customer);
                return;
            }
        }
    }

    public void save(String filePath) {
        BufferedWriter out = null;

        try {
            out = new BufferedWriter(new FileWriter(filePath));

            out.write(customers.size() + "\n");
            for (Customer customer : customers) {
                out.write(customer.getAcctNo() + "\n");
                out.write(customer.getPin() + "\n");
                out.write(customer.getBalance() + "\n");
            }

            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (out != null) {
                    out.close();
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) {
        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(BidvAtmConfig.class);
        bidvAtm = (BidvAtm) applicationContext.getBean("bidvAtm");
        customers = new ArrayList<>();
        scanner = new Scanner(System.in);
        scanner.useDelimiter("\n");
        String option;

        loadData("D:\\Projects\\IdeaProjects\\spring-dependency-injection\\data\\customers");

        while (true) {
            if (currentCustomer == null) {
                greetCustomer();
            }

            System.out.println("\n\nChon mot trong cac dich vu sau:\n" +
                    "         1. Rut tien\n" +
                    "         2. Gui tien\n" +
                    "         3. Tra cuu thong tin tai khoan\n" +
                    "         4. Tra cuu thong tin ATM\n" +
                    "         5. Thoat\n");

            int choice;
            while (true) {
                System.out.print("Dich vu: ");
                option = scanner.next();

                if (!StringUtils.isNumeric(option)) {
                    System.out.println("--> Nhap vao mot so, anh (chi) hieu hon?");
                    continue;
                } else {
                    option = StringUtils.trimToEmpty(option);

                    if (option.length() > 1) {
                        choice = 0;
                    } else {
                        choice = Integer.parseInt(option);
                    }

                    if (choice < 1 || choice > 5) {
                        System.out.println("--> Dich vu khong hop le. Vui long thu lai!");
                        continue;
                    }
                }

                break;
            }

            switch (choice) {
                case 1:
                    createTransaction("Rut tien");
                    break;
                case 2:
                    createTransaction("Gui tien");
                    break;
                case 3:
                    for (Customer customer1 : customers) {
                        if (customer1.getAcctNo() == currentCustomer) {
                            System.out.print("--> ");
                            bidvAtm.displayCustomerInfo(customer1);
                            break;
                        }
                    }
                    break;
                case 4:
                    bidvAtm.printCurrentMoney();
                    break;
                case 5:
                    System.out.println("--> Han hanh phuc vu quy khach!");
                    save("D:\\Projects\\IdeaProjects\\spring-dependency-injection\\data\\customers");
                    bidvAtm.closePrinter();
                    currentCustomer = null;
                    break;
            }
        }
    }
}
