package gov.uk.check.visa.steps;/*
 Created by Kalpesh Patel
 */

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.*;
import org.junit.Assert;

public class VisaCheckStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I select nationality \"([^\"]*)\"$")
    public void iSelectNationality(String text) {
        new StartPage().clickStartNow();
        new SelectNationalityPage().selectNationality(text);
    }

    @And("^I click on next step on nationality page$")
    public void iClickOnNextStepOnNationalityPage() {
        new SelectNationalityPage().clickNextStepButton();
    }

    @Then("^I select reason for visit \"([^\"]*)\"$")
    public void iSelectReasonForVisit(String text) {
        new ReasonForTravelPage().selectReasonForVisit(text);
    }

    @And("^I click on next step on reason for travel page$")
    public void iClickOnNextStepOnReasonForTravelPage() {
        new ReasonForTravelPage().clickNextStepButton();
    }

    @Then("^I see the result \"([^\"]*)\"$")
    public void iSeeTheResult(String text) {
        Assert.assertEquals("Failed to search Visa type!!",text,new ResultPage().getResultMessage());

    }

    @Then("^I select length of stay \"([^\"]*)\" on duration of stay page$")
    public void iSelectLengthOfStayOnDurationOfStayPage(String text) {
        new DurationOfStayPage().selectLengthOfStay(text);
    }

    @And("^I click on next step on duration of stay page$")
    public void iClickOnNextStepOnDurationOfStayPage() {
        new DurationOfStayPage().clickNextStepButton();
    }

    @Then("^I select job type \"([^\"]*)\" on work type page$")
    public void iSelectJobTypeOnWorkTypePage(String text) {
        new WorkTypePage().selectJobType(text);
    }

    @And("^I click on next step on work type page$")
    public void iClickOnNextStepOnWorkTypePage() {
        new WorkTypePage().clickNextStepButton();
    }

    @Then("^I select immigration status \"([^\"]*)\"$")
    public void iSelectImmigrationStatus(String text) {
        new FamilyImmigrationStatusPage().selectImmigrationStatus(text);
    }

    @And("^I click on next step on immigration status page$")
    public void iClickOnNextStepOnImmigrationStatusPage() {
        new FamilyImmigrationStatusPage().clickNextStepButton();
    }
}
