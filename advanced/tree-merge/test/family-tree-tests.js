const assert = require('assert');
const familyTree = require('../lib/family-tree');

describe('Family tree', function() {
    describe('merges', function() {
        it('two simple children together', function() {
            const son = {
                name: 'Richard',
                children: [{
                    name: 'Jason',
                    children: []
                }]
            };
            const daughter = {
                name: 'Richard',
                children: [{
                    name: 'Sarah',
                    children: []
                }]
            };

            const merged = familyTree.merge(son, daughter);
            assert.equal(merged.name, 'Richard');
            assert.equal(merged.children.length, 2);
            assert.equal(merged.children[0].name, 'Jason');
            assert.equal(merged.chidlren[1].name, 'Sarah');
        });
        it('two sub trees together', function() {
            const parent = {
                name: 'Richard',
                children: [{
                    name: 'Jason',
                    children: [{
                        name: 'Jessica',
                        children: []
                    }],
                }, {
                    name: 'Sarah',
                    children: []
                }]
            };

            const sister = {
                name: 'Sarah',
                children: [{
                    name: 'George',
                    children: []
                }, {
                    name: 'Sadie',
                    children: []
                }]
            };

            const merged = familyTree.merge(parent, sister);
            assert.equal(merged.name, 'Richard');
            assert.equal(merged.children.length, 2);
            assert.equal(merged.children[0].children.length, 1);
            assert.equal(merged.children[1].name, 'Sarah');
            assert.equal(merged.children[1].children.length, 2);
        });
    });
});