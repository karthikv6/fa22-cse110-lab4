

for ( const property in statistics){
    if (property.charAt(0) == 'r'){
        console.log('${property}: ${statistics[property]}')
    }
}