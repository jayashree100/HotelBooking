const { useSearchParams } = require('react-router-dom');
const { _DBG_set_checkOptions } = require('readline-sync');
let hotelobj = require('./hotel.json');
//console.log(hotelobj);
let hotels = require('./HotelBL')
search();
check();