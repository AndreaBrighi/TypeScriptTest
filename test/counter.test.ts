import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { mock, instance } from 'ts-mockito';
import { Counter } from '../src/counter';
_chai.should();
@suite class CounterUnitTests {

  private counter: Counter;

  before() {
    this.counter = new Counter();
  }

  @test 'should have value 0 when created'() {
    // Assert
    this.counter.getCount().should.be.eq(0);
  }

  @test 'should increment when ask to increase'() {
    // Act
    this.counter.increment();
    // Assert
    this.counter.getCount().should.be.eq(1);
  }

}