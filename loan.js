let loanAmount=0;
let loanTerm=0;
let salaryAmount=0;
let creditScore=0;
let jobTerm=0;
let loanApproved = false;
$(document).ready(function () {
    $("#loanAmount").on("submit", checkLoanAmount);
    $("#loanTerm").on("submit", checkLoanTerm);
    $("#salaryAmount").on("submit", checkSalaryAmount);
    $("#creditScore").on("submit", checkCreditScore);
    $("#jobMonths").on("submit", checkJobMonths);
    $("#calculateButton").click(calculateEligibility);
})

function checkLoanAmount() {

}

function checkLoanTerm() {

}

function checkSalaryAmount() {

}

function checkCreditScore() {

}

function checkJobMonths() {

}

function calculateEligibility() {
    salaryAmount = $("#salaryAmount").val();
    creditScore = $("#creditScore").val();
    jobTerm = $("#jobMonths").val();
    if (salaryAmount >= 40000){
        if(creditScore >= 600 || jobTerm > 12){
            loanApproved = true;
        }
        else{
            loanApproved = false
        }
    }
    else{
        if(creditScore >= 600 && jobTerm > 12){
            loanApproved = true;
        }
        else{
            loanApproved = false
        }
    }
    if (loanApproved){
        $("#calculationResults").text("Congratulations! You have been approved");
    }
    else{
        $("#calculationResults").text("Sorry! We cannot approve your loan at this time.");
    }
}
