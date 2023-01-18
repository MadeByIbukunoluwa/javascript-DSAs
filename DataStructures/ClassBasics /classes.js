"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Student_tardies, _Student_scores;
class Student {
    constructor(firstName, lastName, year) {
        _Student_tardies.set(this, void 0);
        _Student_scores.set(this, void 0);
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        __classPrivateFieldSet(this, _Student_tardies, 0, "f");
        __classPrivateFieldSet(this, _Student_scores, [], "f");
    }
    fullName() {
        return `Your full name is ${this.firstName} has been late ${__classPrivateFieldGet(this, _Student_tardies, "f")} times`;
    }
    markLate() {
        __classPrivateFieldSet(this, _Student_tardies, __classPrivateFieldGet(this, _Student_tardies, "f") + 1, "f");
        if (__classPrivateFieldGet(this, _Student_tardies, "f") >= 3) {
            return "YOU ARE EXPELLED!!!!";
        }
        return `${this.firstName} ${this.lastName} has been late ${__classPrivateFieldGet(this, _Student_tardies, "f")} times`;
    }
    addScore(score) {
        __classPrivateFieldGet(this, _Student_scores, "f").push(score);
        return __classPrivateFieldGet(this, _Student_scores, "f");
    }
    calculateAverage() {
        let sum = __classPrivateFieldGet(this, _Student_scores, "f").reduce((acc, cur) => acc + cur);
        return sum / __classPrivateFieldGet(this, _Student_scores, "f").length;
    }
    static EnrollStudents() {
        return "ENROLLING STUDENTS ";
    }
}
_Student_tardies = new WeakMap(), _Student_scores = new WeakMap();
let firstStudent = new Student('Colt', 'Steele', 1);
let secondStudent = new Student('Blue', 'Steele', 2);
