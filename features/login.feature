Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario: Login failed
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill a wrong email and password
    And I try to login
    Then I expect to not be able to login
  Examples:
      | email            | password | error                    |
      |                  |          | "Ingresa una contraseña"   |
      | miso@gmail.com   |    1234  | "Oops! Revisa tu contraseña"      |

Scenario: Login success
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill a good email and password
    And I try to login
    Then I expect to be able to login
  Examples:
      | email            | password | error                    |
      |                  |          | "Ingresa una contraseña"   |
      | miso@gmail.com   |    1234  | "Oops! Revisa tu contraseña"      |