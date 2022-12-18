import { assert } from 'chai';
import { Counter } from '../../src/counter';
import {Given, Then, When} from "@cucumber/cucumber";

let counter: Counter;

Given(/^A counter starting from (\d)$/, function (value: number) {
  this.counter = new Counter(value);
});

When(/^Increment$/, function () {
  this.counter.increment()
});

Then(/^Counter value should be (\d)$/, function (expectedValue: number) {
  assert.equal(this.counter.getCount(), expectedValue);
});
