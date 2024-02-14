// test for existances of the different options and if they work
// expect shape to be true ex
 const Logo = require('./index.js');

 describe("Logo-gen"), () => {
   describe('Instantiate',()=>{
    it('should be an instance of Logo class', () =>{
        const logo = new Logo();

        expect(logo).toBeInstanceOf(Logo);
    });
   });
   
   describe('Initialize shape', () => {
    it('should set shape properly', () => {
        const shape = 'square';
        const logo = new Logo(shape)
        expect(logo.shape).toEqual(shape)
    });
   });
    
    const font = 'sans serif'

    test("has a choice for shape", () =>{ 

    })
    test("has a choice for lText", () => { 
        const lText = 'LPS';
        expect(Logo.lText).toEqual(lText)
    })
    test("has a choice for color", () => {
        const color = 'pink';
        expect(Logo.color).toEqual(color)
    })
    test("has an instance font")
    
 }