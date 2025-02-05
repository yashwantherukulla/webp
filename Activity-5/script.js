document.getElementById('timeTravelForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const targetYear = parseInt(document.getElementById('yearInput').value);
    const currentYear = new Date().getFullYear();
    const resultDiv = document.getElementById('result');
    
    if (isNaN(targetYear)) {
        resultDiv.textContent = "Please enter a valid year!";
        document.body.className = '';
        return;
    }

    if (targetYear <= 0) {
        resultDiv.textContent = "You've gone too far back!";
        document.body.className = 'past';
        return;
    }

    if (targetYear === currentYear) {
        resultDiv.textContent = "Welcome to the present! Time travel is tricky... Try another year.";
        document.body.className = 'present';
        return;
    }

    const yearDiff = Math.abs(targetYear - currentYear);
    const formattedYears = yearDiff.toLocaleString();
    
    if (targetYear > currentYear) {
        resultDiv.textContent = `You have travelled ${formattedYears} years into the future!`;
        document.body.className = 'future';
    } else {
        resultDiv.textContent = `You have travelled ${formattedYears} years into the past!`;
        document.body.className = 'past';
    }
});
