# CD Sandbox Project Overview

In today's software development landscape, there's a rush to move fast and embrace AI. However, as Dave Farley emphasizes in "Continuous Delivery", true speed comes from strong engineering foundations. The Digital Kudos Wall project serves as a CD sandbox - a real-world example that bridges the gap between simple code katas and complex production applications.

## Project Purpose

The CD sandbox project demonstrates:

1. How to implement XP and CD practices in a real-world context
2. The foundation required to move fast sustainably
3. A complete CI/CD pipeline with all necessary stages
4. Clean Architecture principles in action
5. Modern testing practices based on the Test Pyramid
6. Standards and SOPs for scaling engineering practices

## User Story Map

The Digital Kudos Wall project started with a collaborative user story mapping session to create shared understanding and define the MVP scope. The story map helps visualize:

- The end-to-end user journey
- Core user activities and tasks
- MVP feature scope
- Future enhancements and iterations

You can view our user story map below:

![User Story Map](../images/user-story-map.png)

[📥 Download User Story Map PDF](../images/user-story-map.pdf)

For more details about user story mapping and how we use it in our process, see our [Product Discovery Practices](../foundation/product-discovery.md) guide.

## Project Structure

The project is organized into multiple repositories, each with a specific purpose:

```
digital-kudos-wall/              # Main repository
├── docs/                        # Documentation
│   └── user-story-map.pdf      # Collaboration artifact
├── .github/workflows/          # CD Pipeline definitions
│   ├── release-uat.yml        # UAT deployment
│   ├── acceptance-stage-uat.yml # UAT testing
│   └── update-dashboard.yml   # Status updates
└── IMPLEMENTATION_PLAN.md      # Implementation guidelines

digital-kudos-wall-frontend/     # React frontend
├── docs/
│   ├── architecture/          # Clean Architecture guidelines
│   └── testing/              # Frontend testing SOPs

digital-kudos-wall-backend/      # Node.js backend
├── docs/
│   └── testing/              # Backend testing SOPs
└── .github/workflows/
    └── commit-stage.yml      # Commit stage pipeline

digital-kudos-wall-system-tests/ # System-level tests
├── docs/
│   ├── SOP-AcceptanceTests.md
│   └── SOP-SmokeTests.md
└── src/
    └── acceptance/           # Acceptance test suites

digital-kudos-wall-infrastructure/ # Infrastructure code
└── environments/            # Environment definitions
```

## Technical Implementation

### Clean Architecture

Both frontend and backend implementations follow Clean Architecture principles:

- Clear separation of concerns
- Domain-driven design
- Use case driven development
- Infrastructure independence
- Testability by design

### Testing Strategy

Implements a comprehensive testing approach:

1. **Unit Tests**

   - Sociable unit testing
   - Test doubles following SOPs
   - Clean test data management

2. **Component Tests**

   - Frontend component testing
   - Backend component testing
   - Contract testing between services

3. **System Tests**
   - Acceptance tests
   - Smoke tests
   - System-level integration

### CD Pipeline Implementation

A complete CD pipeline demonstrating:

1. **Commit Stage**

   - Fast feedback
   - Code quality checks
   - Unit and component tests
   - Contract verification

2. **Acceptance Stage**

   - System test execution
   - Integration validation
   - Performance checks

3. **UAT Stage**

   - Automated deployment
   - Environment management
   - Smoke test verification

4. **Release Stage**
   - Production deployment
   - Infrastructure management
   - Monitoring integration

## Standards and Practices

The project includes comprehensive Standard Operating Procedures (SOPs):

1. **Testing SOPs**

   - SOP-SociableUnitTests
   - SOP-ComponentTests
   - SOP-ContractTests
   - SOP-TestDataManagement
   - SOP-AcceptanceTests
   - SOP-SmokeTests

2. **Architecture SOPs**
   - SOP-Frontend-Clean-Architecture
   - Backend Clean Architecture guidelines

## Learning Path

This sandbox project serves as a learning tool:

1. Start with understanding XP and CD fundamentals
2. Study the implementation plan and architecture
3. Examine the testing strategy and SOPs
4. Explore the CD pipeline implementation
5. Practice implementing features following the guidelines

## Next Steps

1. [Test Strategy](./test-strategy.md) - Comprehensive testing approach
2. [Pipeline Overview](../pipeline/overview.md) - CD pipeline details
