# Coding Conventions for Our Project

This document outlines the coding conventions and best practices to be followed in our project. Adhering to these conventions will help maintain code quality, readability, and consistency across the codebase.

We could use it as input for AI tools to generate code that adheres to these conventions.

## General Guidelines

### Naming conventions for files and directories

1. Use lowercase letters for all file and directory names.

2. Use hyphens (-) to separate words in file and directory names.
   For example, use `my-file` instead of `myfile` or `my_file` or `myFile`.

3. Avoid using spaces or special characters in names.

4. Use descriptive names that reflect the content or purpose of the file or directory.

### Comments and documentation

1. Write clear and concise comments to explain complex logic or important decisions in the code.

2. Helpers and utility functions should have docstrings that describe their purpose, parameters, and return values.

## Modularity and Structure

1. Organize code into modules and packages to promote reusability and maintainability.
2. Each module should have a clear responsibility and should not be overly large or complex.
3. Use index files (e.g., `index.ts`) to re-export symbols from a module, making it easier to import them elsewhere.
4. Follow a consistent folder structure that reflects the application's architecture (e.g., `components`, `hooks`, `utils`).
