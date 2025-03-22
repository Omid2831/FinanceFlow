name: Feature Suggestion
description: Propose a new feature or improvement.
title: "[Suggestion]: "
labels: ["enhancement", "discussion"]
projects: ["octo-org/1", "octo-org/44"]
assignees:
  - octocat
body:
  - type: markdown
    attributes:
      value: |
        Thank you for helping us improve! Please provide as much detail as possible for your suggestion.
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we reach out to you if we have further questions?
      placeholder: ex. email@example.com
    validations:
      required: false
  - type: textarea
    id: suggestion-overview
    attributes:
      label: Suggestion Overview
      description: Briefly summarize your suggestion or idea.
      placeholder: Provide a quick overview of your suggestion.
    validations:
      required: true
  - type: textarea
    id: benefits
    attributes:
      label: Benefits of the Suggestion
      description: How would this suggestion improve the software or user experience?
      placeholder: Outline the potential benefits.
    validations:
      required: true
  - type: textarea
    id: implementation
    attributes:
      label: Possible Implementation
      description: Do you have ideas on how this suggestion could be implemented? Share them here.
      placeholder: Optional but helpful details on implementation.
    validations:
      required: false
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this form, you agree to our Code of Conduct.
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true