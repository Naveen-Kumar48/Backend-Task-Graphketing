# BUG.md

## Bug Description
The JWT token verification middleware incorrectly assigns the decoded user ID (a string) directly to `req.user`, instead of the full decoded object or a user object. This causes all protected routes that rely on `req.user.id` to fail with an error (e.g., `Cannot read properties of undefined (reading 'id')` or similar undefined behavior), because `req.user` is a primitive string and does not have an `.id` property.

## Location
File: `middleware/authMiddlewares.js`
Line: 24 (approximately)

```javascript
// INCORRECT CODE
req.user = decoded.id; // Bug: req.user becomes a string, e.g., "64fc..."
```

## Correct Fix
Assign the whole decoded object or an object containing the ID to `req.user`.

```javascript
// CORRECTED CODE
req.user = decoded; // req.user becomes { id: "...", iat: ..., exp: ... }
```
Then `req.user.id` will correctly resolve to the user ID.

## Why This Matters
This bug breaks the entire task management feature for authenticated users. The controllers (`taskController.js`) expect `req.user` to be an object with an `id` property (e.g., accessing `req.user.id` to set `createdBy` or filter tasks). Since `req.user` is a string, `req.user.id` is `undefined`, leading to task creation failures (validation error for `createdBy`) or empty results when filtering by user. It demonstrates the importance of consistent data structures between middleware and controllers.

