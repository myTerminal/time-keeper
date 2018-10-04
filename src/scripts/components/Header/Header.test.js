/* global describe it */

import Vue from 'vue';
import Header from './Header.vue';

describe('Header', function () {
    it('reads the correct package details', function () {
        const packageDetails = require('../../../../package.json');

        const dataFromHeader = Header.data();

        dataFromHeader.packageDetails.name.should.equal(packageDetails.name);

        dataFromHeader.packageDetails.version.should.equal(packageDetails.version);
    });
});
