---
name: "\U0001FAB6Task"
about: a task is a structured input field that helps guide users when submitting issues
title: ''
labels: ''
assignees: ''

---

name: Agile Task / User Story
description: Track tasks and user stories using Agile methodology.
title: "[Agile Task]: "
labels: ["task", "agile", "sprint"]
projects: ["your-org/your-project"]
assignees:
  - your-github-username
body:
  - type: markdown
    attributes:
      value: |
        ### 🚀 Agile Task/User Story
        This issue follows Agile methodology to track tasks and user stories throughout the sprint.
        - **User Stories**: Break down features into smaller, manageable pieces of work.
        - **Sprints**: Tasks should be part of a sprint (usually 1-4 weeks).
        - **Backlog**: All user stories and tasks should be captured in the backlog for future sprints.
  - type: input
    id: user-story-title
    attributes:
      label: User Story Title
      description: A concise title for this user story or task.
      placeholder: e.g., Implement user authentication system
    validations:
      required: true
  - type: textarea
    id: user-story-description
    attributes:
      label: User Story Description
      description: Provide a detailed explanation of the user story or task.
      placeholder: Describe the goal, functionality, or feature.
    validations:
      required: true
  - type: dropdown
    id: sprint
    attributes:
      label: Sprint
      description: Select the sprint this task/user story will be completed in.
      options:
        - Sprint 1
        - Sprint 2
        - Sprint 3
        - Sprint 4
    validations:
      required: true
  - type: dropdown
    id: task-priority
    attributes:
      label: Task Priority
      description: Select the priority level of this task/user story.
      options:
        - High 🔥
        - Medium ⚡
        - Low 💤
    validations:
      required: true
  - type: checkboxes
    id: task-status
    attributes:
      label: Task Status
      description: What is the current status of this task/user story?
      options:
        - label: 📥 To Do
        - label: 🚧 In Progress
        - label: ✅ Done
    validations:
      required: true
  - type: textarea
    id: acceptance-criteria
    attributes:
      label: Acceptance Criteria
      description: Define the conditions that must be met for the task/user story to be considered complete.
      placeholder: e.g., The login feature works with email and password authentication.
    validations:
      required: true
  - type: textarea
    id: blockers
    attributes:
      label: Blockers or Dependencies
      description: Are there any obstacles preventing progress? Mention dependencies here.
      placeholder: List any issues, blockers, or dependencies affecting this task.
    validations:
      required: false
  - type: checkboxes
    id: terms
    attributes:
      label: Agreement
      description: Confirm that you have reviewed and understood the task requirements.
      options:
        - label: I acknowledge this task follows Agile principles.
          required: true
