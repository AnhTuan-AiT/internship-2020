package com.sapo.edu.demo;

import org.apache.commons.lang3.StringUtils;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.Scanner;

@SpringBootApplication
@Configuration
@ComponentScan("Scan_Package_Name")
public class DemoApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        scanner.useDelimiter("\n");
        String option;
        String s = null;

        while (true) {
            System.out.println("\n\nChon mot trong cac phuong thuc sau:\n" +
                    "1. containsAny\n" +
                    "2. containsIgnoreCase\n" +
                    "3. countMatches\n" +
                    "4. appendIfMissing\n" +
                    "5. prependIfMissing\n" +
                    "6. uppercase\n" +
                    "7. lowercase\n");

            System.out.print("Phuong thuc lua chon: ");
            option = scanner.next();

            if (!StringUtils.isNumeric(option)) {
                System.out.println("--> Nhap vao mot so, anh (chi) hieu hon?");
                continue;
            } else {
                Integer choice = Integer.parseInt(StringUtils.trimToEmpty(option));

                if (choice < 1 || choice > 7) {
                    System.out.print("--> Chan roi a (type y to exit)? ");
                    String exit = scanner.next();

                    if (StringUtils.equalsIgnoreCase(exit, "y")) {
                        break;
                    } else {
                        continue;
                    }
                }
            }

            System.out.print("Nhap chuoi: ");
            s = scanner.next();

            switch (Integer.parseInt(StringUtils.trimToEmpty(option))) {
                case 1:
                    System.out.print("Nhap cac ki tu can kiem tra: ");
                    String searchChars = scanner.next();
                    System.out.println("--> " + StringUtils.containsAny(s, searchChars));
                    break;
                case 2:
                    System.out.print("Nhap cac ki tu can kiem tra: ");
                    String searchCharsIgnoreCase = scanner.next();
                    System.out.println("--> " + StringUtils.containsIgnoreCase(s, searchCharsIgnoreCase));
                    break;
                case 3:
                    System.out.print("Nhap chuoi can đem: ");
                    String countStr = scanner.next();
                    System.out.println("--> Chuoi can đem xuat hien " +
                            StringUtils.countMatches(s, countStr) +
                            " lan trong chuoi đa cho");
                    break;
                case 4:
                    System.out.print("Nhap chuoi hau to: ");
                    String suffixStr = scanner.next();
                    System.out.println("--> " + StringUtils.appendIfMissing(s, suffixStr));
                    break;
                case 5:
                    System.out.print("Nhập chuoi tien to: ");
                    String prefixStr = scanner.next();
                    System.out.println("--> " + StringUtils.prependIfMissing(s, prefixStr));
                    break;
                case 6:
                    System.out.println("--> " + StringUtils.upperCase(s));
                    break;
                case 7:
                    System.out.println("--> " + StringUtils.lowerCase(s));
                    break;
            }
        }
    }
}
