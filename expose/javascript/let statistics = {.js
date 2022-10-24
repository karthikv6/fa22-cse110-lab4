let statistics = { 
    redcars : 21, 
    bluecar : 45,
    rarecar : 2
};

for ( const property in statistics){
    if (property[0] == 'r'){
        console.log('${property}: ${statistics[property]}')
    }
}