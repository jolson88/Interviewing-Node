const assert = require('assert');
const familyTree = require('../lib/family-tree');

describe('Family tree', function() {
    describe('merges', function() {
        beforeEach(function() {
        });
        it('two trees together', function() {
            const parentTree = {
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

            const sisterTree = {
                name: 'Sarah',
                children: [{
                    name: 'George',
                    children: []
                }, {
                    name: 'Sadie',
                    children: []
                }]
            };

            const mergedTree = familyTree.merge(parentTree, sisterTree);
            assert.equal(mergedTree.name, 'Richard');
            assert.equal(mergedTree.children.length, 2);
            assert.equal(mergedTree.chidlren[0].children.length, 1);
            assert.equal(mergedTree.children[1].name, 'Sarah');
            assert.equal(mergedTree.children[1].children.length, 2);
        });
    });
});