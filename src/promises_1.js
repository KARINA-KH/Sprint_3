getData('data/todos.json')
    .then(data => {
        console.log('Processing data');
        return data;
    })
    .then(processedData => console.log('Validating data'))
    .catch(eror => console.log(error));



    /*
    applyForVisa()
        .then(bookHotel)
        .then(buyTickets)
        .then(cancelVacation);
    */
   