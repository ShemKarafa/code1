function paye(grossSalary) {
    if (grossSalary <= 24000) {
        return grossSalary * (0.1);
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        return grossSalary * (0.25);
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        return grossSalary * (0.3)
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        return grossSalary * (0.325)
    } else {
        return grossSalary * (0.35)
    }
}
console.log(paye(75000)) // returns 22500

function nhifDeduction(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary >= 5999 && grossSalary <= 7999) {
        return 300;
    } else if (grossSalary >= 7999 && grossSalary <= 11999) {
        return 400;
    } else if (grossSalary >= 11999 && grossSalary <= 14999) {
        return 500;
    } else if (grossSalary >= 14999 && grossSalary <= 19999) {
        return 600;
    } else if (grossSalary >= 19999 && grossSalary <= 24999) {
        return 750;
    } else if (grossSalary >= 24999 && grossSalary <= 29999) {
        return 850;
    } else if (grossSalary >= 29999 && grossSalary <= 34999) {
        return 900;
    } else if (grossSalary >= 34999 && grossSalary <= 39999) {
        return 950;
    } else if (grossSalary >= 39999 && grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary >= 44999 && grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary >= 49999 && grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary >= 59999 && grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary >= 69999 && grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary >= 79999 && grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary >= 89999 && grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}
console.log(nhifDeduction(65000)) // returns 1300

function nssfDeduction(grossSalary) {
    if (grossSalary <= 6000) {
        return grossSalary * 0.06;
    } else if ( grossSalary > 6000 && grossSalary < 18000) {
        remainingAmount = grossSalary - 6000
        const tier1 = 6000 * 0.06;
        const tier2 = remainingAmount * 0.06;
        nssfDeductionAmount = tier1 + tier2;

    } else {
        const tier1 = 6000 * 0.06;
        const tier2 = 18000 * 0.06;
        nssfDeductionAmount = tier1 + tier2;
    }
    return nssfDeductionAmount;
}
console.log(nssfDeduction(50000)) // returns 1440

function calculateNetSalary(grossSalary) {
    const payeAmount = paye(grossSalary);
    const nhifAmount = nhifDeduction(grossSalary);
    const nssfAmount = nssfDeduction(grossSalary);

    const netSalary = grossSalary - payeAmount - nhifAmount - nssfAmount;
    return netSalary;
}
const grossSalary = 50000;
console.log("Net Salary:", calculateNetSalary(grossSalary)); //returns 32360