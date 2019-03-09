exports.getDate = function(){
    const today = new Date();
    const options = {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
    }
    return today.toLocaleDateString('en-GB', options);
}
 

