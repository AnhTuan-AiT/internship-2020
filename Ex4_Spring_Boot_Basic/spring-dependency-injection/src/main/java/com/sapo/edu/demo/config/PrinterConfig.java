package com.sapo.edu.demo.config;

import com.sapo.edu.demo.Printer;
import com.sapo.edu.demo.PrinterConsole;
import com.sapo.edu.demo.PrinterFile;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PrinterConfig {
    @Bean
    public PrinterConsole printerConsole() {
        return new PrinterConsole();
    }

    @Bean
    public PrinterFile printerFile() {
        return new PrinterFile();
    }
}
