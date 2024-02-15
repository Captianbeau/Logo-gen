// test for existances of the different options and if they work
// expect shape to be true ex
const logo = require('./index.js');

describe("logo",() => {
    describe('Instantiate',  () => {
        it('should be an instance of Logo class', async () => {
            const nLogo = await logo();

            expect(nLogo).toBeInstanceOf(logo);
        });
    });

    describe('Initialize text', () => {
        it('should set text properly', async () => {
            const text = 'LPS';
            const logo = await logo();
            expect(logo.text).toEqual(text);
        })
    })

    describe('Initialize text', () => {
        it('should set shape properly', async () => {
            const tColor = 'yellow';
            const logo = await logo();
            expect(logo.tColor), toEqual(tColor);
        })
    })

    describe('Initialize shape', () => {
        it('should set shape properly', async () => {
            const shape = 'circle';
            const logo = await logo(shape);
            expect(logo.shape).toEqual(shape);
        });
    });

    describe('Initialize shape', () => {
        it('should set shape properly', async () => {
            const sColor = 'pink';
            const logo = await logo(shape);
            expect(logo.sColor).toEqual(sColor);
        });
    });
})