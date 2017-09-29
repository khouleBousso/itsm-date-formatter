'use strict';

var expect = require('chai').expect;
var dateFormatter = require('../index');
var date = new Date();
describe('#dateFormatter', function() {

    it('should return friday',
        function() {
            var result = dateFormatter(date);

            /* Today Friday 29 September 2017
             * IT Should Return 'Friday'
             * */
            expect(result).to.equal('Friday');
        });
    it('should return vendredi',
        function() {
            var result = dateFormatter(date, 'fr');

            /* Today Friday 29 September 2017
             * IT Should Return 'Vendredi'
             * */
            expect(result).to.equal('Vendredi');
        });
    it('should return viernes',
        function() {
        var result = dateFormatter(date, 'es');

        /* Today Friday 29 September 2017
         * IT Should Return 'Viernes'
         * */
        expect(result).to.equal('Viernes');
    });
});