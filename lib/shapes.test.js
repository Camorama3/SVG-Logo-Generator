const {Triangle, Square, Circle} = require('./shapes')

describe('Triangle', () => {
    test('Should generate a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
}) 
