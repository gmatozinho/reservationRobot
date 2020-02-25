const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

function formatDate(date) {
    return moment(date.replace(/\//g, "-"), 'DD-MM-YYYY');
}

function range(start,end){    
    return moment.range(formatDate(start), formatDate(end));
}

module.exports = {
    formatDate,
    range
}