// test for existances of the different options and if they work
// expect shape to be true ex
const {Shape,Circle,Square,Triangle} = require('./shapes.js')


describe("Shape",() => {

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
            const shape = new Shape('300',height);
            expect(shape.height).toBe(height);
        });
    });

    describe('Proper fill', () => {
        it('should set fill properly', async () => {
            const fill = 'pink';
            const shape = new Shape('300','200',fill);
            expect(shape.fill).toBe(fill);
        });
    });
    describe('Proper tFill (text fill)', () => {
        it('should set tFill properly', async () => {
            const tFill = 'white';
            const shape = new Shape('300','200','pink',tFill);
            expect(shape.tFill).toBe(tFill);
        });
    });
    describe('Proper text', () => {
        it('should set text properly', async () => {
            const text = 'LPS';
            const shape = new Shape('300','200','pink','white',text);
            expect(shape.text).toBe(text);
        });
    });
    // describe('', () => {
    //     it('', async () => {
    //         const  = '';
    //         const  = new ('300','200','pink','white','LPS');
    //         expect().toBe();
    //     });
    // });
})

describe('Circle',() => {
    describe('Instance', () => {
        it('should be instance of Circle', async () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });
    });
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
            const circle = new Circle('300','200','pink','white', text);
            expect(circle.text).toBe(text);
        });
    });
    describe('Proper cx (shape center x position)', () => {
        it('should inherit cx properly', async () => {
            const cx = '150'
            const circle = new Circle('300','200','pink','white', 'LPS',cx);
            expect(circle.cx).toBe(cx);
        });
    });
    describe('Proper cy (shape center y position)', () => {
        it('should inherit cy properly', async () => {
            const cy = '100'
            const circle = new Circle('300','200','pink','white', 'LPS','150',cy);
            expect(circle.cy).toBe(cy);
        });
    });
    describe('Proper r (shape radius)', () => {
        it('should inherit r properly', async () => {
            const r = '50'
            const circle = new Circle('300','200','pink','white', 'LPS','150','100',r);
            expect(circle.r).toBe(r);
        });
    });
})
describe('Square',() => {
    describe('Instance', () => {
        it('should be instance of Square', async () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });
    });
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
            const square = new Square('300','200','pink','white', text);
            expect(square.text).toBe(text);
        });
    });
})