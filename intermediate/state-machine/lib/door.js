/*
    Our door can have the following states that it is in at any
    one time:
        - closed
        - open
        - locked

    If the door is in the proper supported state, you can perform
    the following actions:
        - close
        - open
        - lock
        - unlock

    When a door is closed, it can be:
        - opened
        - locked

    When a door is open, it can be:
        - closed

    When a door is locked, it can be:
        - unlocked

    If you try to perform an action that is not supported, the code
    should throw an Error with the current state of the door.
    For example, if the door is open and tries to be locked, it should
    throw a `new Error('door is open');`
*/

function action(actionName) {

}

function state() {
    return '';
}

exports.create = function() {
    return {
        action,
        state
    }
}