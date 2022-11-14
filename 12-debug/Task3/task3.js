const salaryOfJuniorDeveloper = 500
const numberOfJuniorDevelopers = 3
let taxPercentage = 13
let totalJuniorDevelopersSalary = 0 //не хватало '= 0'
console.log(salaryOfJuniorDeveloper, typeof salaryOfJuniorDeveloper)
console.log(numberOfJuniorDevelopers, typeof numberOfJuniorDevelopers)
console.log(taxPercentage, typeof taxPercentage)
console.log(totalJuniorDevelopersSalary, typeof totalJuniorDevelopersSalary)

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100
  totalJuniorDevelopersSalary += salaryWithTax
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)
