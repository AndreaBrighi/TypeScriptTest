# features/counter.feature
Feature: Counter

  Scenario Outline: increment
    Given A counter starting from 20
    When Increment
    Then Counter value should be 21

    Examples:
      | start | end |
      |  0    |   1 |
      |  20   |  21 |
      | 100   | 101 |