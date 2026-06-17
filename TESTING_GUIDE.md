# Testing Guide

## Existing Credentials

### Admin Account

Email: [admin@example.com](mailto:admin@example.com)

Password: Password@123

---

## Application URLs

Frontend:

http://localhost:5173

Backend:

http://localhost:5000

---

# Test Cases

## Test Case 1 - Admin Login

Steps:

1. Open Login Page
2. Enter Admin credentials
3. Click Login

Expected Result:

* Admin Dashboard opens successfully

---

## Test Case 2 - View Dashboard Statistics

Steps:

1. Login as Admin

Expected Result:

Dashboard displays:

* Total Users
* Total Stores
* Total Ratings

---

## Test Case 3 - Create Store Owner

Steps:

1. Login as Admin
2. Click Create Store Owner
3. Enter valid information
4. Submit

Expected Result:

* Store Owner created successfully

---

## Test Case 4 - View Users

Steps:

1. Login as Admin
2. Open Users Page

Expected Result:

* All users displayed in table

---

## Test Case 5 - Store Owner Login

Steps:

1. Login using Store Owner credentials

Expected Result:

* Store Owner Dashboard displayed

---

## Test Case 6 - Create Store

Steps:

1. Login as Store Owner
2. Click Create Store
3. Enter valid store information
4. Submit

Expected Result:

* Store created successfully

---

## Test Case 7 - View Store Analytics

Steps:

1. Login as Store Owner

Expected Result:

Dashboard displays:

* Store Name
* Total Stores
* Total Ratings
* Average Rating

---

## Test Case 8 - User Registration

Steps:

1. Open Register Page
2. Enter valid information
3. Submit

Expected Result:

* User account created successfully

---

## Test Case 9 - User Login

Steps:

1. Login with registered user

Expected Result:

* User Dashboard displayed

---

## Test Case 10 - Browse Stores

Steps:

1. Login as User
2. Open Stores

Expected Result:

* Store list displayed

---

## Test Case 11 - Submit Rating

Steps:

1. Select a store
2. Click Rate Store
3. Select rating using stars
4. Submit

Expected Result:

* Rating submitted successfully

---

## Test Case 12 - Update Rating

Steps:

1. Open previously rated store
2. Select different rating
3. Click Update Rating

Expected Result:

* Rating updated successfully

---

## Test Case 13 - Verify Average Rating

Steps:

1. Login as Store Owner

Expected Result:

Average rating updates based on submitted ratings.

---

## Test Case 14 - Logout

Steps:

1. Click Logout

Expected Result:

* User redirected to Login Page
* Protected routes become inaccessible

---

## Security Verification

### Protected Routes

Verify:

* USER cannot access Admin pages
* STORE_OWNER cannot access Admin pages
* Unauthenticated users cannot access protected routes

Expected Result:

* User redirected to Login Page

---

## End-to-End Flow

Admin
→ Create Store Owner

Store Owner
→ Create Store

User
→ Register
→ Login
→ Browse Stores
→ Submit Rating
→ Update Rating

Store Owner
→ View Analytics

Admin
→ Verify Dashboard Statistics

Expected Result:

All operations complete successfully without errors.
