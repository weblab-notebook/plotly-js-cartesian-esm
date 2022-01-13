import { expect } from '@esm-bundle/chai';
import { default as Plotly } from "plotly.js-cartesian-esm";

describe("test bundle", () => {
    it('', () => {
        expect(Plotly.newPlot).to.not.equal(undefined);
    })
});