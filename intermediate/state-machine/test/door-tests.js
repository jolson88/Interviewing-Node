const assert = require('assert');
const doorStateMachine = require('../lib/door');

describe('State machine', function() {
    describe('door', function() {
        let door;
        beforeEach(function() {
            door = doorStateMachine.create();
        });
        it('should start closed', function() {
            assert.equal(door.state(), 'door is closed');
        });
        it('should open and close', function() {
            door.action('open');
            assert.equal(door.state(), 'door is open');

            door.action('close');
            assert.equal(door.state(), 'door is closed');
        });
        it('should lock when closed', function() {
            door.action('lock');
            assert.equal(door.state(), 'door is locked');
        });
        it('should not open when locked', function() {
            door.action('lock');
            assert.throws(() => door.action('open'), /locked/);
        });
        it('should not lock when open', function() {
            door.action('open');
            assert.throws(() => door.action('lock'), /open/);
        })
    });
});