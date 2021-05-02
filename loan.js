let loanAmount=0;
let loanTerm=0;
let salaryAmount=0;
let creditScore=0;
let jobTerm=0;
let loanApproved = false;
$(document).ready(function () {
    $("#loanAmount").on("change", checkLoanAmount);
    $("#loanTerm").on("change", checkLoanTerm);
    $("#salaryAmount").on("change", checkSalaryAmount);
    $("#creditScore").on("change", checkCreditScore);
    $("#jobMonths").on("change", checkJobMonths);
    $("#calculateButton").click(calculateEligibility);
})

function checkLoanAmount() {

    if($("loanAmount").val()>100000){
        $("loanAmount").val("")
        $("loanAmountCorrection").text("The maximum loan amount is $1,000,000.")
    }
    else if($("loanAmount").val()<1000){
        $("loanAmount").val("")
        $("loanAmountCorrection").text("The minimum loan amount is $1,000.")
    }
    else{
        $("loanAmountCorrection").text("")
    }
}

function checkLoanTerm() {
    if($("loanTerm").val()>120){
        $("loanTerm").val("")
        $("loanTermCorrection").text("The maximum loan term is 120 months (10 years).")
    }
    else if($("loanTerm").val()<12){
        $("loanTerm").val("")
        $("loanTermCorrection").text("The minimum loan term is 12 months (1 year).")
    }
    else{
        $("loanTermCorrection").text("")
    }
}

function checkSalaryAmount() {
    if($("salaryAmount").val()>100000){
        $("salaryAmount").val(1000000)
        $("salaryAmountCorrection").text("The maximum annual salary eligible for this program is $1,000,000.")
    }
    else if($("salaryAmount").val()<1000){
        $("salaryAmount").val(0)
        $("salaryAmountCorrection").text("The minimum annual income for our purposes is $0.")
    }
    else{
        $("salaryAmountCorrection").text("")
    }
}

function checkCreditScore() {
    if($("creditScore").val()>850){
        $("creditScore").val("")
        $("creditScoreCorrection").text("The highest possible credit score is 850.")
    }
    else if($("creditScore").val()<300){
        $("creditScore").val("")
        $("creditScoreCorrection").text("The lowest possible credit score is 300.")
    }
    else{
        $("creditScoreCorrection").text("")
    }
}

function checkJobMonths() {
    if($("jobMonths").val()>480){
        $("jobMonths").val("")
        $("jobMonthsCorrection").text("If you have been at your job for more than 40 years. This is the wrong loan program for you")
    }
    else if($("jobMonths").val()<0){
        $("jobMonths").val("")
        $("jobMonthsCorrection").text("You cannot have been at a job for a negative amount of time.")
    }
    else{
        $("jobMonthsCorrection").text("")
    }
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
