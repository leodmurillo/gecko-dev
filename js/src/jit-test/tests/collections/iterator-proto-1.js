// All iterators of the same collection type share their immediate prototype.
// Those prototype objects in turn inherit directly from Iterator.prototype.

load(libdir + "iteration.js");

function test(obj0, obj1) {
    var iter0 = obj0[Symbol.iterator](), iter1 = obj1[Symbol.iterator]();
    var proto = Object.getPrototypeOf(iter0);
    assertEq(Object.getPrototypeOf(iter1), proto);
    assertEq(Object.getPrototypeOf(proto), Iterator.prototype);
}

test([], [1]);
test(new Map(), new Map([[1, 1]]));
test(new Set(), new Set([1]));
