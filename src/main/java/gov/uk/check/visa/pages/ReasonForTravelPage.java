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

public class ReasonForTravelPage extends Utility {
    private static final Logger log = LogManager.getLogger(ReasonForTravelPage.class.getName());

    public ReasonForTravelPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Continue')]")
    WebElement nextStepButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//div/input")
    List<WebElement> reasonForVisitList;

    public void selectReasonForVisit(String reason) {
        int size = reasonForVisitList.size();
        for (int i = 0; i < size; i++) {
            String val = reasonForVisitList.get(i).getAttribute("value");
            if (val.equalsIgnoreCase(reason)) {
                reasonForVisitList.get(i).click();
                break;
            }
        }
        log.info("Clicking on reason " + reasonForVisitList.toString());
    }

    public void clickNextStepButton() {
        clickOnElement(nextStepButton);
        log.info("Clicking on Next : " + nextStepButton.toString());
    }
}
