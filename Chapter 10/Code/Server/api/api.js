'use strict';

module.exports = function (request, response) {
    let data = [
        { id: 1, name: 'Verdie Gulgowski' },
        { id: 2, name: 'Dr. Markus Davis' },
        { id: 3, name: 'Mr. Retha Abernathy' },
        { id: 4, name: 'Macey Dickinson' },
        { id: 5, name: 'Kane Daniel III' }
    ];

    response.json(data);
};