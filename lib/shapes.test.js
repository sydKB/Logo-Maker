const { Triangle } = require('./shapes');

describe('Triangle', () => {
  it('should render triangle with the correct points and fill color', () => {
    const shape = new Triangle();
    shape.setShapeColor('blue');
    expect(shape.render()).toEqual('<polygon points="180,50 274,214 86,214" fill="blue" />');
  });
});

// const shape = new Triangle();
// shape.setShapeColor("blue");
// expect(shape.render()).toEqual('<polygon points="180,50 274,214 86,214" fill="blue" />');
