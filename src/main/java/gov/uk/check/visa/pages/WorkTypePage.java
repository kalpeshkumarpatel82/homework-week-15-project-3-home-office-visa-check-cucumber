package gov.uk.check.visa.pages;
/* 
 Created by Kalpesh Patel
 */

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WorkTypePage extends Utility {

    private static final Logger log = LogManager.getLogger(WorkTypePage.class.getName());

    public WorkTypePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Continue')]")
    WebElement nextStepButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//div/input")
    List<WebElement> selectJobtypeList;

    public void selectJobType(String job) {
        int size = selectJobtypeList.size();
        for (int i = 0; i < size; i++) {
            String val = selectJobtypeList.get(i).getAttribute("value");
            if (val.equalsIgnoreCase(job)) {
                selectJobtypeList.get(i).click();
            }
            break;
        }
        log.info("Selecting job type : " + job + " to " + selectJobtypeList.toString());
    }

    public void clickNextStepButton() {
        clickOnElement(nextStepButton);
        log.info("Clicking on Next : " + nextStepButton.toString());
    }

}
