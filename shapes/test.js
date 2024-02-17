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
            expect(shape.width), toBe(width);
        })
    })

    describe('Proper height', () => {
        it('should set height properly', async () => {
            const height = '200';
            const shape = new Shape(height);
            expect(shape.height).toBe(height);
        });
    });

    describe('Proper fill', () => {
        it('should set fill properly', async () => {
            const fill = 'pink';
            const shape = new Shape(fill);
            expect(shape.fill).toBe(fill);
        });
    });
    describe('Proper tFill (text fill)', () => {
        it('should set tFill properly', async () => {
            const tFill = 'white';
            const shape = new Shape(tFill);
            expect(shape.tFill).toBe(tFill);
        });
    });
    describe('Proper text', () => {
        it('should set text properly', async () => {
            const text = 'LPS';
            const shape = new Shape(text);
            expect(shape.text).toBe(text);
        });
    });
    // describe('', () => {
    //     it('', async () => {
    //         const  = '';
    //         const shape = new Shape();
    //         expect().toBe();
    //     });
    // });
})