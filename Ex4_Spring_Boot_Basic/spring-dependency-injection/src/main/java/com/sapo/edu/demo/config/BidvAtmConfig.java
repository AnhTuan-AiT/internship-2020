package com.sapo.edu.demo.config;

import com.sapo.edu.demo.BidvAtm;
import com.sapo.edu.demo.PrinterConsole;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.sapo.edu.demo.config")
public class BidvAtmConfig {
    @Bean
    public BidvAtm bidvAtm(AtmConfig atmConfig, PrinterConsole printerConsole) {
        return new BidvAtm(atmConfig.getInit(), printerConsole);
    }
}
