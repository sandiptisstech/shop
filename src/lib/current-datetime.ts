export  function currentDatetime() {

     
    return new Date().toISOString().split('.')[0] + '.000000Z';
}