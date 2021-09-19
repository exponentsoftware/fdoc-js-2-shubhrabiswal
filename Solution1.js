// 1. Using the countries array create the following array of arrays. 
// The country name, the first three letters of the country name and 
// the length of the country name.


const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]

function createArrayOfArrays(countries){
    let result =[]
    for (let country of countries){
        let temp = []
        let val1 = country[0].toUpperCase()+country.substr(1,country.length).toLowerCase()
        temp.push(val1,country.substr(0,3),country.length)
        result.push(temp)
    }
    return result
}

console.log(createArrayOfArrays(countries))
