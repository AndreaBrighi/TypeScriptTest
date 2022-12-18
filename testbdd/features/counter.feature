# features/counter.feature
Feature: Counter

  Scenario Outline: increment
    Given A counter starting from <start>
    When Increment by <step>
    Then Counter value should be <end>

    Examples:
      | start | end | step |
      |  0    |   1 |   1  |
      |  20   |  22 |   2  |
      | 100   | 110 |  10  |