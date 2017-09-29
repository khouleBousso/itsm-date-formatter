/**
 * Created by a621275 on 29/09/2017.
 */
'use strict';
const isUndefined = require("is-undefined");

/**
 * Gets day of week
 * @param {date} date
 * @return {string}
 */
module.exports = function(date, locale) {

    var day = date.getDay();

    var dateFormat = {
        fr : ['Dimanche', 'Lundi',
            'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
        ],
        es : ['Domingo', 'Lunes','Martes' , 'Miercoles',
            'Jueves' ,'Viernes', 'Sabado'],
        en : [
            'Sunday', 'Monday',
            'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };

    if(isNaN(date))
    {
        throw TypeError('Invalid date');
    }



    return  isUndefined(locale) ? dateFormat.en[day] : dateFormat[locale][day] ;
};