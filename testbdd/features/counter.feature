# features/counter.feature
Feature: Counter

Scenario: increment
  Given A counter starting from 0
  When Increment
  Then Counter value should be 1