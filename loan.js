let loanAmount=0;
let loanTerm=0;
let salaryAmount=0;
let creditScore=0;
let jobTerm=0;
let loanApproved = false;
let valid1 =false;
let valid2 = false;
let valid3 = false;
let valid4 = false;
let valid5 = false;
$(document).ready(function () {
    $("#calculateButton").click(calculateEligibility);
})
function calculateEligibility(event) {
    event.preventDefault();

    //Validate Loan Amount
    if ($("#loanAmount").val() > 100000) {
        $("#loanAmount").val("");
        $("#loanAmountCorrection").text("The maximum loan amount is $1,000,000.");
        valid1 = false;
    } else if ($("#loanAmount").val() < 1000) {
        $("#loanAmount").val("");
        $("#loanAmountCorrection").text("The minimum loan amount is $1,000.");
        valid1=false;
    } else {
        $("#loanAmountCorrection").text("");
        valid1 =true;
    }

    //Validate Loan Term
    if ($("#loanTerm").val() > 120) {
        $("#loanTerm").val("");
        $("#loanTermCorrection").text("The maximum loan term is 120 months (10 years).");
        valid2=false;
    } else if ($("#loanTerm").val() < 12) {
        $("#loanTerm").val("");
        $("#loanTermCorrection").text("The minimum loan term is 12 months (1 year).");
        valid2=false;
    } else {
        $("#loanTermCorrection").text("");
        valid2=true;
    }

//  Validate Salary Amount
    if ($("#salaryAmount").val() > 1000000) {
        $("#salaryAmount").val(1000000);
        $("#salaryAmountCorrection").text("The maximum annual salary eligible for this program is $1,000,000.");
        valid3=false;
    } else if ($("#salaryAmount").val() < 0) {
        $("#salaryAmount").val(0);
        $("#salaryAmountCorrection").text("The minimum annual income for our purposes is $0.");
        valid3=false;
    } else {
        $("#salaryAmountCorrection").text("");
        valid3=true;
    }

    //Validate Credit Score
    if ($("#creditScore").val() > 850) {
        $("#creditScore").val("");
        $("#creditScoreCorrection").text("The highest possible credit score is 850.");
        valid4=false;
    } else if ($("#creditScore").val() < 300) {
        $("#creditScore").val("");
        $("#creditScoreCorrection").text("The lowest possible credit score is 300.");
        valid4=false;
    } else {
        $("#creditScoreCorrection").text("");
        valid4=true;
    }

    //Validate Job Term
    if ($("#jobMonths").val() > 480) {
        $("#jobMonths").val("");
        $("#jobMonthsCorrection").text("If you have been at your job for more than 40 years. This is the wrong loan program for you");
        valid5=false;
    } else if ($("#jobMonths").val() < 0) {
        $("#jobMonths").val("");
        $("#jobMonthsCorrection").text("You cannot have been at a job for a negative amount of time.");
        valid5=false;
    } else {
        $("#jobMonthsCorrection").text("");
        valid5=true;
    }

    //Determine eligibility only if all inputs are valid
    if (valid1 && valid2 && valid3 && valid4 && valid5){
        salaryAmount = $("#salaryAmount").val();
        creditScore = $("#creditScore").val();
        jobTerm = $("#jobMonths").val();
        if (salaryAmount >= 40000) {
            if (creditScore >= 600 || jobTerm > 12) {
                loanApproved = true;
            } else {
                loanApproved = false
            }
        } else {
            if (creditScore >= 600 && jobTerm > 12) {
                loanApproved = true;
            } else {
                loanApproved = false
            }
        }
        if (loanApproved) {
            $("#calculationResults").text("Congratulations! You have been approved");
        } else {
            $("#calculationResults").text("Sorry! We cannot approve your loan at this time.");
        }
    }
    else{
        $("#calculationResults").text("");
    }
}
