basic_salary = Number(prompt('Enter your basic salary:'))

benefits = Number(prompt('Enter the benefits you accrue:'))

function gross_salary_calc(basic_salary, benefits) {

    let gross_salary = basic_salary + benefits
    return gross_salary

}
function nhif_calc(gross_salary) {

    let nhif_rates = [
        [5999, 150],
        [7999, 300],
        [11999, 400],
        [14999, 500],
        [19999, 600],
        [24999, 750],
        [29999, 850],
        [34999, 900],
        [39999, 950],
        [44999, 1000],
        [49999, 1100],
        [59999, 1200],
        [69999, 1300],
        [79999, 1400],
        [89999, 1500],
        [99999, 1600]
    ]
    for (let i = 0; i < nhif_rates.length; i++) {
        if (gross_salary <= nhif_rates[i][0]) {
            return nhif_rates[i][1]
        }
    }

    return 1700
}

function nssf_calc(gross_salary) {

    let pay_used

    if (gross_salary > 18000) {

        pay_used = 18000
    }
    else {
        pay_used = gross_salary
    }
    let nssf = pay_used * 0.06

    return nssf

}

function nhdf_calc(gross_salary) {

    let nhdf = gross_salary * 0.015

    return nhdf
}
function taxable_income_calc(gross_salary, nhif, nhdf, nssf) {

    let taxable_income = gross_salary - (nhif + nhdf + nssf)

    return taxable_income
}

function payee_calc(taxable_income) {

    let payee

    if (taxable_income <= 24000) {
        payee = taxable_income * 0.10
    }
    else if (taxable_income <= 32333) {
        payee = taxable_income * 0.25
    }
    else if (taxable_income <= 500000) {
        payee = taxable_income * 0.30
    }
    else if (taxable_income <= 800000) {
        payee = taxable_income * 0.325
    }
    else {
        payee = taxable_income * 0.35
    }
    return payee

}

function net_salary_calc(gross_salary, nhif, nhdf, nssf, payee) {
    let net_salary = gross_salary - (nhif + nhdf + nssf + payee)
    return net_salary

}
let gross_salary = gross_salary_calc(basic_salary, benefits)

let nhif = nhif_calc(gross_salary)

let nssf = nssf_calc(gross_salary)

let nhdf = nhdf_calc(gross_salary)

let taxable_income = taxable_income_calc(gross_salary, nssf, nhdf, nhif)

let payee = payee_calc(taxable_income)

let net_salary = net_salary_calc(gross_salary, nhif, nhdf, nssf, payee)

console.log('Gross Salary is', gross_salary)
console.log('NHIF rate is', nhif)
console.log("NSSF rate is", nssf)
console.log('NHDF rate is', nhdf)
console.log('Taxable Income is', taxable_income)
console.log('PAYEE is', payee)
console.log('Net Salary is', net_salary)


