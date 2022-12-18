import { suite, test } from '@testdeck/mocha';
import { should, expect } from 'chai';
import { mock, instance } from 'ts-mockito';
import { Counter } from '../src/counter';
should();
@suite 
export class CounterUnitTests {

  @test 
  'should have value 0 when created'() {
    const counter = new Counter();
    // Assert
    expect(counter.getCount()).to.be.eq(0);
  }

  @test 
  'should have the input value when created'() {
    const value = 5;
    const counter = new Counter(value);
    // Assert
    expect(counter.getCount()).to.be.eq(value);
  }

  @test 
  'should increment when ask to increase'() {
    const counter = new Counter();
    // Act
    counter.increment();
    // Assert
    expect(counter.getCount()).to.be.eq(1);
  }

}