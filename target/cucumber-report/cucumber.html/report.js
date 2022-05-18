$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("visaCheck.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality home office visa check",
  "description": "",
  "id": "search-functionality-home-office-visa-check",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4966696500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search the visa requirement for an Australian Tourist",
  "description": "",
  "id": "search-functionality-home-office-visa-check;search-the-visa-requirement-for-an-australian-tourist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select nationality \"australia\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on next step on nationality page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select reason for visit \"tourism\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on next step on reason for travel page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I see the result \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaCheckStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 72677299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "australia",
      "offset": 22
    }
  ],
  "location": "VisaCheckStep.iSelectNationality(String)"
});
formatter.result({
  "duration": 403535699,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnNationalityPage()"
});
formatter.result({
  "duration": 241876200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tourism",
      "offset": 27
    }
  ],
  "location": "VisaCheckStep.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 90800200,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnReasonForTravelPage()"
});
formatter.result({
  "duration": 564775099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 18
    }
  ],
  "location": "VisaCheckStep.iSeeTheResult(String)"
});
formatter.result({
  "duration": 33699899,
  "status": "passed"
});
formatter.after({
  "duration": 663072500,
  "status": "passed"
});
formatter.before({
  "duration": 3043688801,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search the visa requirement for a Chilean health worker staying longer than six month",
  "description": "",
  "id": "search-functionality-home-office-visa-check;search-the-visa-requirement-for-a-chilean-health-worker-staying-longer-than-six-month",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select nationality \"chile\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on next step on nationality page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select reason for visit \"work\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on next step on reason for travel page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select length of stay \"longer than 6 months\" on duration of stay page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on next step on duration of stay page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select job type \"health\" on work type page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on next step on work type page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I see the result \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaCheckStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chile",
      "offset": 22
    }
  ],
  "location": "VisaCheckStep.iSelectNationality(String)"
});
formatter.result({
  "duration": 259976400,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnNationalityPage()"
});
formatter.result({
  "duration": 263476499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "work",
      "offset": 27
    }
  ],
  "location": "VisaCheckStep.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 92219900,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnReasonForTravelPage()"
});
formatter.result({
  "duration": 355309501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 25
    }
  ],
  "location": "VisaCheckStep.iSelectLengthOfStayOnDurationOfStayPage(String)"
});
formatter.result({
  "duration": 68047900,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnDurationOfStayPage()"
});
formatter.result({
  "duration": 717561900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "health",
      "offset": 19
    }
  ],
  "location": "VisaCheckStep.iSelectJobTypeOnWorkTypePage(String)"
});
formatter.result({
  "duration": 62950399,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnWorkTypePage()"
});
formatter.result({
  "duration": 661085999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 18
    }
  ],
  "location": "VisaCheckStep.iSeeTheResult(String)"
});
formatter.result({
  "duration": 33698501,
  "status": "passed"
});
formatter.after({
  "duration": 621044001,
  "status": "passed"
});
formatter.before({
  "duration": 2579070200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the visa requirement for a Columbian joining a partner",
  "description": "",
  "id": "search-functionality-home-office-visa-check;search-the-visa-requirement-for-a-columbian-joining-a-partner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I select nationality \"colombia\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on next step on nationality page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select reason for visit \"family\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on next step on reason for travel page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select immigration status \"yes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I click on next step on immigration status page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I see the result \"You’ll need a visa to join your family or partner in the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaCheckStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 25201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "colombia",
      "offset": 22
    }
  ],
  "location": "VisaCheckStep.iSelectNationality(String)"
});
formatter.result({
  "duration": 597132500,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnNationalityPage()"
});
formatter.result({
  "duration": 240472300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "family",
      "offset": 27
    }
  ],
  "location": "VisaCheckStep.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 123358800,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnReasonForTravelPage()"
});
formatter.result({
  "duration": 608533900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 29
    }
  ],
  "location": "VisaCheckStep.iSelectImmigrationStatus(String)"
});
formatter.result({
  "duration": 51155700,
  "status": "passed"
});
formatter.match({
  "location": "VisaCheckStep.iClickOnNextStepOnImmigrationStatusPage()"
});
formatter.result({
  "duration": 523236001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 18
    }
  ],
  "location": "VisaCheckStep.iSeeTheResult(String)"
});
formatter.result({
  "duration": 31820900,
  "status": "passed"
});
formatter.after({
  "duration": 626097001,
  "status": "passed"
});
});