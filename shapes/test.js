
const { Shape, Circle, Square, Triangle } = require('./shapes.js')

//Shape tests
describe("Shape", () => {

    describe('Instance', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        })
    })

    describe('Proper width', () => {
        it('should set width properly', async () => {
            const width = '300';
            const shape = new Shape(width);
            expect(shape.width).toBe(width);
        })
    })

    describe('Proper height', () => {
        it('should set height properly', async () => {
            const height = '200';
            const shape = new Shape('300', height);
            expect(shape.height).toBe(height);
        });
    });

    describe('Proper fill', () => {
        it('should set fill properly', async () => {
            const fill = 'pink';
            const shape = new Shape('300', '200', fill);
            expect(shape.fill).toBe(fill);
        });
    });

    describe('Proper tFill (text fill)', () => {
        it('should set tFill properly', async () => {
            const tFill = 'white';
            const shape = new Shape('300', '200', 'pink', tFill);
            expect(shape.tFill).toBe(tFill);
        });
    });

    describe('Proper text', () => {
        it('should set text properly', async () => {
            const text = 'LPS';
            const shape = new Shape('300', '200', 'pink', 'white', text);
            expect(shape.text).toBe(text);
        });
    });
})
//Shape end

//Circle tests
describe('Circle', () => {

    describe('Instance', () => {
        it('should be instance of Circle', async () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });
    });

    //inherited variables
    describe('Proper width', () => {
        it('should inherit width properly', async () => {
            const width = '300'
            const circle = new Circle(width);
            expect(circle.width).toBe(width);
        });
    });

    describe('Proper text', () => {
        it('should inherit text properly', async () => {
            const text = 'LPS'
            const circle = new Circle('300', '200', 'pink', 'white', text);
            expect(circle.text).toBe(text);
        });
    });
    //inherited variables end

    describe('Proper cx (shape center x position)', () => {
        it('should inherit cx properly', async () => {
            const cx = '150'
            const circle = new Circle('300', '200', 'pink', 'white', 'LPS', cx);
            expect(circle.cx).toBe(cx);
        });
    });

    describe('Proper cy (shape center y position)', () => {
        it('should inherit cy properly', async () => {
            const cy = '100'
            const circle = new Circle('300', '200', 'pink', 'white', 'LPS', '150', cy);
            expect(circle.cy).toBe(cy);
        });
    });

    describe('Proper r (shape radius)', () => {
        it('should inherit r properly', async () => {
            const r = '50'
            const circle = new Circle('300', '200', 'pink', 'white', 'LPS', '150', '100', r);
            expect(circle.r).toBe(r);
        });
    });
})
//Circle end

//Square tests 
describe('Square', () => {

    describe('Instance', () => {
        it('should be instance of Square', async () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });
    });

    //inherited variables
    describe('Proper width', () => {
        it('should inherit width properly', async () => {
            const width = '300'
            const square = new Square(width);
            expect(square.width).toBe(width);
        });
    });

    describe('Proper text', () => {
        it('should inherit text properly', async () => {
            const text = 'LPS'
            const square = new Square('300', '200', 'pink', 'white', text);
            expect(square.text).toBe(text);
        });
    });
    //inherited variables end

    describe('Proper x', () => {
        it('should inherit x properly', async () => {
            const x = '100'
            const square = new Square('300', '200', 'pink', 'white', 'LPS', x);
            expect(square.x).toBe(x);
        });
    });

    describe('Proper y', () => {
        it('should inherit y properly', async () => {
            const y = '100'
            const square = new Square('300', '200', 'pink', 'white', 'LPS', '100', y);
            expect(square.y).toBe(y);
        });
    });

    describe('Proper sWidth', () => {
        it('should inherit sWidth properly', async () => {
            const sWidth = '100'
            const square = new Square('300', '200', 'pink', 'white', 'LPS', '100', '100', sWidth);
            expect(square.sWidth).toBe(sWidth);
        });
    });

    describe('Proper sHeight', () => {
        it('should inherit sHeight properly', async () => {
            const sHeight = '100'
            const square = new Square('300', '200', 'pink', 'white', 'LPS', '100', '100', '100', sHeight);
            expect(square.sHeight).toBe(sHeight);
        });
    });
})
//Square end

//Triangle tests
describe('Triangle', () => {

    describe('Instance', () => {
        it('should be instance of Triangle', async () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });

    //inherited variables
    describe('Proper width', () => {
        it('should inherit width properly', async () => {
            const width = '300'
            const triangle = new Triangle(width);
            expect(triangle.width).toBe(width);
        });
    });

    describe('Proper text', () => {
        it('should inherit text properly', async () => {
            const text = 'LPS'
            const triangle = new Triangle('300', '200', 'pink', 'white', text);
            expect(triangle.text).toBe(text);
        });
    });
    //inherited variables end

    describe('Proper points', () => {
        it('should inherit points properly', async () => {
            const points = '220,10 325,210 120,210'
            const triangle = new Triangle('300', '200', 'pink', 'white', 'LPS', points);
            expect(triangle.points).toBe(points);
        });
    });
})
//Triangle end