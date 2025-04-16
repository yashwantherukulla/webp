document.getElementById('loanForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const creditScore = parseFloat(document.getElementById('creditScore').value);
    const age = parseFloat(document.getElementById('age').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseFloat(document.getElementById('loanTenure').value);
    
    const resultDiv = document.getElementById('result');
    const eligibilityResultDiv = document.getElementById('eligibilityResult');
    const loanDetailsDiv = document.getElementById('loanDetails');
    
    resultDiv.classList.remove('result-hidden', 'eligible', 'not-eligible');
    
    const monthlySalary = annualIncome / 12;
    const loanAmount = monthlySalary * 10;
    
    let isEligible = true;
    let reasons = [];
    
    if (annualIncome < 20000) {
        isEligible = false;
        reasons.push("Annual income is below Rs.20,000");
    }
    
    if (creditScore < 700) {
        isEligible = false;
        reasons.push("Credit score is below 700");
    }
    
    if (age < 18 || age > 65) {
        isEligible = false;
        reasons.push("Age must be between 18 and 65");
    }
    
    const monthlyInterest = interestRate / 100 / 12;
    const totalMonths = loanTenure * 12;
    
    const emi = loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths) / 
                (Math.pow(1 + monthlyInterest, totalMonths) - 1);
    
    if (emi > monthlySalary * 0.6) {
        isEligible = false;
        reasons.push("EMI exceeds 60% of monthly salary");
    }
    
    if (isEligible) {
        resultDiv.classList.add('eligible');
        eligibilityResultDiv.textContent = "Congratulations! You are eligible for the loan.";
        
        const totalPayment = emi * totalMonths;
        const totalInterest = totalPayment - loanAmount;
        
        loanDetailsDiv.innerHTML = `
            <div class="detail-item"><strong>Loan Amount:</strong> Rs. ${loanAmount.toFixed(2)}</div>
            <div class="detail-item"><strong>EMI:</strong> Rs. ${emi.toFixed(2)} per month</div>
            <div class="detail-item"><strong>Total Payment:</strong> Rs. ${totalPayment.toFixed(2)}</div>
            <div class="detail-item"><strong>Total Interest:</strong> Rs. ${totalInterest.toFixed(2)}</div>
        `;
    } else {
        resultDiv.classList.add('not-eligible');
        eligibilityResultDiv.textContent = "Sorry, you are not eligible for the loan.";
        loanDetailsDiv.innerHTML = `
            <div class="detail-item">Reasons:</div>
            <ul>
                ${reasons.map(reason => `<li>${reason}</li>`).join('')}
            </ul>
        `;
    }
    
    resultDiv.classList.remove('result-hidden');
});