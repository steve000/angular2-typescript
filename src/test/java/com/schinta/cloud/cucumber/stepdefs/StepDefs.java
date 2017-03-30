package com.schinta.cloud.cucumber.stepdefs;

import com.schinta.cloud.SchintacloudApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = SchintacloudApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
