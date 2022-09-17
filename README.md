# Physician Food Diary
A doctor treating a patient may identify their diet is an issue (e.g., in the case of overweight and comorbidities related to weight). The physician will then order a food diary for patient with a preset number of days for the patient to track their daily eating habits (for a typical day). The patient will be prompted and reminded regularly throughout the diary request so that an accurate list of the patient's meals are captured in the system.

Once the diary is completed, the information is automatically sent (or accessible) by the physician for review. From there, the patient can import the data into the patient's chart on the electronic health record. The physician may then use this information to refer the patient to a dieticion to help with managing the patient's diet with better meal planning, understanding of food triggers, and other such diet management needs for the patient.

# How it Works
1. A physician orders a food diary for his/her patient. The requisition may specify a 3, 5, or 7-day food diary.
2. The patient receives an email for the food diary and journals their diet for the prescribed number of days.
3. The patient may receive email reminders 3x per day during normal meal times as reminder.
4. The physician recieves a summary of each day with the patient's meal journal, calorie intake, and total calories during the prescribed period.
5. The physician uses this information for further patient health guidance.


![Food Diary Screenshot](/src/assets/food-diary-screen.png)

# Setting Up Project
- `npm install`
- `npm run serve` Compiles and hot-reloads for development
- `npm run build` Compiles and minifies for production
- `npm run lint` Lints and fixes files

# Customize Vue Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
