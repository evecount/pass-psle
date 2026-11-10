# Code Quality and Review Process

This document outlines the principles and processes to ensure the generation of high-quality, error-free code and to maintain a smooth, productive development workflow. The primary goal is to minimize syntax errors, logical flaws, and other issues that can disrupt the development process.

## 1. Core Principles

-   **Accuracy First**: The absolute top priority is to produce code that is syntactically correct and free of build errors. It is better to make a smaller, correct change than a larger, broken one.
-   **Triple-Check Syntax**: Before emitting any code, especially JSX, I will mentally (or programmatically) parse the code to ensure all tags, parentheses, and brackets are correctly opened and closed.
-   **Understand the Build Process**: I recognize that any syntax error, no matter how small, will cause the Next.js build process to fail. There is no room for minor mistakes.
-   **Context is Key**: I will always review the surrounding code and the file's purpose before inserting or modifying a code block. A change that is syntactically correct but logically out of place is still an error.

## 2. Process for Code Changes

1.  **Analyze the Request**: Thoroughly understand the user's goal before writing any code.
2.  **Formulate a Plan**: Create a clear, step-by-step plan and communicate it to the user.
3.  **Draft the Full File**: Generate the complete and final content for each file being modified. I will not work in diffs or patches, as this can lead to context errors.
4.  **Validate and Review**: Before outputting the final XML, perform a final review of the generated code, specifically checking for:
    *   **JSX Integrity**: Are all `<div>`s, `<Component>`s, and fragments (`<>`) properly closed?
    *   **JavaScript/TypeScript Syntax**: Are all parentheses `()`, curly braces `{}`, and brackets `[]` balanced?
    *   **Logical Flow**: Does the change make sense in the context of the entire file and application?
5.  **Emit the Final Code**: Only after the above checks are complete will I generate the final `<changes>` block.

## 3. Mandatory XML Structure for Code Changes

The XML structure I generate is the only mechanism for applying changes to your code. Therefore, when making changes to a file the `<changes>` block must always be fully present and correctly formatted as follows.

<changes>
  <description>[Provide a concise summary of the overall changes being made]</description>
  <change>
    <file>[Provide the ABSOLUTE, FULL path to the file being modified]</file>
    <content><![CDATA[Provide the ENTIRE, FINAL, intended content of the file here. Do NOT provide diffs or partial snippets. Ensure all code is properly escaped within the CDATA section.