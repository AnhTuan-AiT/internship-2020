package com.sapo.edu.demo.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Getter
@Setter
@Configuration
@EnableConfigurationProperties
@ConfigurationProperties
@PropertySource("classpath:application.yml")
public class AtmConfig {
    private Long init;
}
