# Design Patterns: Design Patterns Effective sol for common challenges
1. Design Patterns that are specific to React and have emerged from personal experience and industry best practice
2. Best Practice for managing from state
3. Functional programming in the context of ReactJS

`Important React Design Pattern - Container Components`
* Container Components in a sense are react components responsible for handling data loading and data management on behalf of their child components.(Challenge arises when multiple child components need to share the same logic for data loading. this is where container components come.they address this issue by extracting the data loading logic into a dedicated component)
* Components are inaware of the source or management of their data