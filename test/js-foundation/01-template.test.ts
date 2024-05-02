import { emailTemplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01-template.js', () =>{
    test('emailTemplate should contain a greeting', () =>{

        expect( emailTemplate ).toContain('Hi,');
    });

    test('emailTemplate should conatin {{name}} and {{orderId}}',() => {
        expect( emailTemplate ).toMatch(/{{name}}/);
        expect( emailTemplate ).toMatch(/{{orderId}}/);

        expect( emailTemplate ).toContain('{{name}}');
        expect( emailTemplate ).toContain('{{orderId}}');
    });
});

