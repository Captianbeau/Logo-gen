// test for existances of the different options and if they work
// expect shape to be true ex
const {Shape,Circle,Square,Triangle} = require('./shapes.js')


describe("",() => {

    describe('', () => {
        it('', () => {
            logo.text = ''
            expect(logo.text).toEqual();
        })
    })

    describe('', () => {
        it('', async () => {
            const tColor = 'yellow';
            const logo = await logo();
            expect(logo.tColor), toEqual(tColor);
        })
    })

    describe('', () => {
        it('should set shape properly', async () => {
            const shape = 'circle';
            const logo = await logo(shape);
            expect(logo.shape).toEqual(shape);
        });
    });

    describe('', () => {
        it('should set shape properly', async () => {
            const sColor = 'pink';
            const logo = await logo(shape);
            expect(logo.sColor).toEqual(sColor);
        });
    });
})