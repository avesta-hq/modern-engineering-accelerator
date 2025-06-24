# Test Strategy

The Digital Kudos Wall project implements a modern testing strategy based on the Modern Test Pyramid approach. This strategy moves beyond the traditional test pyramid (unit, integration, E2E) to provide more effective testing for modern architectures.

## Modern Test Pyramid Overview

![Modern Test Pyramid Overview](../images/test-strategy/Screenshot%20from%202025-06-24%2018-24-42.png)

Our testing strategy is organized into three main levels:

1. System Level Tests
2. Component Level Tests
3. Unit Level Tests

## System Level Tests

![System Level Tests](../images/test-strategy/Screenshot%20from%202025-06-24%2018-25-45.png)

### Smoke Tests

- **Purpose**: Verify that the system is up and running
- **Implementation**: `digital-kudos-wall-system-tests/src/smoke`
- **SOP**: [SOP-SmokeTests.md](../../digital-kudos-wall-system-tests/docs/SOP-SmokeTests.md)
- **Scope**: System and External System Stubs
- **Examples**:
  - Homepage loads successfully
  - Basic navigation works
  - Core features are accessible

### E2E Tests

- **Purpose**: Verify system behavior in production-like environment
- **Environment**: UAT
- **Scope**: System and External System Test Instances
- **Limitations**: Limited to critical paths due to complexity
- **Examples**:
  - Complete user registration flow
  - Kudos creation and display
  - Basic analytics dashboard operation

### Acceptance Tests

- **Purpose**: Verify system behavior against acceptance criteria
- **Implementation**: `digital-kudos-wall-system-tests/src/acceptance`
- **SOP**: [SOP-AcceptanceTests.md](../../digital-kudos-wall-system-tests/docs/SOP-AcceptanceTests.md)
- **Scope**: System and External System Stubs
- **Advantages**:
  - Full scenario coverage
  - Deterministic execution
  - Reliable results

### External System Contract Tests

- **Purpose**: Verify external system integration contracts
- **Implementation**: Contract test suites for each external dependency
- **Verification**: Ensures stubs match real external system behavior
- **Examples**:
  - Authentication service contracts
  - Email service integration
  - Analytics service API

## Component Level Tests

![Component Tests](../images/test-strategy/Screenshot%20from%202025-06-24%2018-26-22.png)

### Component Tests

- **Purpose**: Verify behavior of individual components
- **Implementation**:
  - Frontend: `digital-kudos-wall-frontend/src/__tests__/components`
  - Backend: `digital-kudos-wall-backend/src/__tests__/components`
- **SOPs**:
  - [SOP-ComponentTests.md](../../digital-kudos-wall-backend/docs/testing/SOP-ComponentTests.md)
  - [SOP-ComponentTests-FE.md](../../digital-kudos-wall-frontend/docs/testing/SOP-ComponentTests-FE.md)
- **Scope**: Individual components with stubbed dependencies
- **Examples**:
  - Frontend UI component testing
  - Backend service API testing
  - Microservice isolation testing

### Contract Tests

- **Purpose**: Verify communication between components through Consumer-Driven Contract Testing
- **Implementation**:
  - Consumer (Frontend): `digital-kudos-wall-frontend/src/features/auth/repositories/__tests__/UserRepository.pact.test.ts`
  - Provider (Backend): `digital-kudos-wall-backend/src/__tests__/contract/provider.contract.test.ts`
  - Contract Definition: `digital-kudos-wall-frontend/pacts/DigitalKudosWallFrontend-DigitalKudosWallBackend.json`
- **SOPs**:
  - [SOP-ContractTests.md](../../digital-kudos-wall-backend/docs/testing/SOP-ContractTests.md)
  - [SOP-ContractTests-FE.md](../../digital-kudos-wall-frontend/docs/testing/SOP-ContractTests-FE.md)

#### Contract Flow

1. **Consumer Testing**:

   - Frontend defines expected API behavior
   - Pact tests generate contract files
   - Contracts published to Pact Broker

2. **Provider Verification**:

   - Backend verifies it can meet contract requirements
   - Automated verification in CI pipeline
   - Results published back to Pact Broker

3. **Continuous Verification**:
   - Webhooks trigger provider verification on contract changes
   - Fast feedback loop for API compatibility
   - Can-I-Deploy checks in deployment pipeline

## Unit Level Tests

### Unit Tests

- **Purpose**: Verify business logic behavior
- **Implementation**: Sociable unit testing approach
- **SOPs**:
  - [SOP-SociableUnitTests.md](../../digital-kudos-wall-backend/docs/testing/SOP-SociableUnitTests.md)
  - [SOP-SociableUnitTests-FE.md](../../digital-kudos-wall-frontend/docs/testing/SOP-SociableUnitTests-FE.md)
- **Characteristics**:
  - Focus on behavior over implementation
  - Minimal mocking
  - Natural object collaboration

### Narrow Integration Tests

- **Purpose**: Verify presentation and infrastructure behavior
- **Implementation**: Focused integration testing
- **SOP**: [SOP-NarrowIntegrationTests.md](../../digital-kudos-wall-backend/docs/testing/SOP-NarrowIntegrationTests.md)
- **Examples**:
  - Database access layer testing
  - External API client testing
  - UI state management testing

## Test Data Management

- **Purpose**: Ensure consistent and reliable test data
- **SOPs**:
  - [SOP-TestDataManagement.md](../../digital-kudos-wall-backend/docs/testing/SOP-TestDataManagement.md)
  - [SOP-TestDataManagement-FE.md](../../digital-kudos-wall-frontend/docs/testing/SOP-TestDataManagement-FE.md)
- **Key Practices**:
  - Test data factories
  - Isolated test databases
  - Deterministic data generation
  - Clean state between tests

## Test Doubles Strategy

- **Purpose**: Provide reliable test isolation
- **SOP**: [SOP-TestDoubles.md](../../digital-kudos-wall-backend/docs/testing/SOP-TestDoubles.md)

### Types of Test Doubles

1. **Dummy**

   - Simplest form of test double
   - Never actually used
   - Just fills parameter lists
   - Used when method signature requires a parameter that won't be used

2. **Stub**

   - Returns hard-coded values
   - Simplest possible implementation
   - No conditional logic
   - Used for providing indirect inputs to tests

3. **Spy**

   - Records information about how it was called
   - Used to verify behavior indirectly
   - Extends stub functionality
   - Useful for verifying indirect outputs

4. **Mock**

   - Contains built-in verification
   - Knows what they are testing
   - Tests behavior rather than state
   - Used when behavior verification is more important than state verification

5. **Fake**
   - Has actual business behavior
   - Like a simulator
   - More complex implementation
   - Used when you need a lightweight version of a real dependency

### Best Practices

1. **Prefer Simpler Doubles**

   - Use stubs over mocks when possible
   - Spies for minimal behavior verification
   - Avoid complex fakes unless necessary

2. **Test Double Selection**

   - Dummies: For unused parameters
   - Stubs: For providing indirect inputs
   - Spies: For verifying indirect outputs
   - Mocks: For behavior verification
   - Fakes: For complex scenarios requiring business logic

3. **Avoid Over-mocking**

   - Mock at architectural boundaries
   - Don't mock value objects
   - Don't mock everything

4. **Maintainable Tests**
   - Keep test doubles simple
   - Document test double purpose
   - Follow consistent naming conventions

### Implementation in Our Codebase

1. **Frontend Tests**

   - API client stubs for component tests
   - Service worker mocks for offline testing
   - Local storage fakes for persistence testing

2. **Backend Tests**

   - Database stubs for repository tests
   - Message queue spies for event testing
   - External service mocks for integration tests

3. **System Tests**
   - Third-party API stubs
   - Authentication service fakes
   - Monitoring system mocks

For specific implementation details and examples, refer to:

- [SOP-TestDoubles.md](../../digital-kudos-wall-backend/docs/testing/SOP-TestDoubles.md)
- [SOP-ComponentTests.md](../../digital-kudos-wall-backend/docs/testing/SOP-ComponentTests.md)
- [SOP-ComponentTests-FE.md](../../digital-kudos-wall-frontend/docs/testing/SOP-ComponentTests-FE.md)

## Page Objects Pattern

- **Purpose**: Encapsulate UI structure and provide application-specific testing API
- **Implementation**: `digital-kudos-wall-system-tests/src/acceptance/drivers/web/pages/`
- **Key Principles**:
  - Hide HTML/UI implementation details
  - Provide domain-specific interface for tests
  - Return other page objects or primitive types
  - Keep assertions in test code, not page objects

### Design Guidelines

1. **Responsibility**

   - Wrap UI fragments with application-specific API
   - Handle UI element finding and manipulation
   - Manage asynchronous UI operations
   - Abstract away UI framework details

2. **Structure**

   - Model significant UI elements, not entire pages
   - Represent composite UI structures when meaningful to users
   - Handle navigation between different pages
   - Encapsulate waiting and synchronization logic

3. **Best Practices**
   - Keep page objects free of assertions
   - Return fundamental types or other page objects
   - Hide UI framework specifics (e.g., Playwright selectors)
   - Use meaningful business-oriented method names

### Implementation in Our System Tests

1. **Base Page Object**

   - Common functionality for all pages
   - Shared navigation methods
   - Reusable UI interaction patterns
   - Standard waiting mechanisms

2. **Feature-Specific Pages**

   - Account registration
   - Kudos creation
   - Wall viewing
   - Analytics dashboard

3. **Component Pages**
   - Header and footer
   - Navigation menu
   - Common UI elements
   - Reusable widgets

For specific implementation details and examples, refer to:

- [SOP-AcceptanceTests.md](../../digital-kudos-wall-system-tests/docs/SOP-AcceptanceTests.md)
- [SOP-SmokeTests.md](../../digital-kudos-wall-system-tests/docs/SOP-SmokeTests.md)

## Pipeline Integration

The test strategy is integrated into our CD pipeline:

1. **Commit Stage**

   - Unit tests
   - Component tests
   - Contract tests
   - Narrow integration tests

2. **Acceptance Stage**

   - Acceptance tests
   - Contract verification

3. **UAT Stage**
   - Smoke tests
   - E2E tests
   - Manual validation

## Benefits of Modern Test Pyramid

1. **Improved Reliability**

   - Deterministic test execution
   - Reduced flakiness
   - Better isolation

2. **Faster Feedback**

   - Quick unit and component tests
   - Targeted integration tests
   - Efficient acceptance tests

3. **Better Coverage**

   - Comprehensive system testing
   - Thorough component verification
   - Solid unit test foundation

4. **Maintainable Tests**
   - Clear test boundaries
   - Reduced test coupling
   - Easier debugging

## References

1. [Modern Test Pyramid](https://journal.optivem.com/p/new-test-pyramid)
2. [Modern Test Pyramid - Illustrated](https://journal.optivem.com/p/modern-test-pyramid-visual)

## Next Steps

1. [Pipeline Overview](../pipeline/overview.md)
2. [Commit Stage](../pipeline/commit-stage.md)
