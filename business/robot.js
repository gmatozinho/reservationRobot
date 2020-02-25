var rooms = require('./db.json')
var date = require('../utils/date')


function findFreeRooms(checkin, checkout) {
    const range = date.range(checkin, checkout)
    const inputRange = Array.from(range.by('day', { excludeEnd: false })).map(m => m.toISOString())

    let result = rooms.filter(room=>{
        var daysAvailable =  room.daysAvailable.map(day=>{
            return date.formatDate(day).toISOString();
        })
        return(inputRange.every(element => daysAvailable.indexOf(element) > -1))
    })
    
    return result;
}

module.exports = {
    findFreeRooms
}