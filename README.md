# 📋 **Trainee Management Application** 🎓



























## ***✨ Project Description :***
This project is a web application for managing trainees in a class. It allows users to add trainees, input their grades, calculate their averages, and display their validation status dynamically. The application also provides statistics about the trainees and their performance. It is built using HTML, CSS, Bootstrap, and JavaScript.

## ***🔧 Features and Tools Used :***

### ****1. Add Trainees****

- **Functionality:** Users can input the trainee's name and grades for CC1, CC2, CC3, and EFM.

- **Tools Used :**
  - **HTML:** Input fields for name and grades.
  - **JavaScript:** *ajouterStagiaire()* function to validate inputs, calculate averages, and add trainees to the list.
  - **LocalStorage:** Saves trainees persistently in the browser.

### ****2. Edit Trainees****

- **Functionality:** Users can modify the details of an existing trainee.

- **Tools Used :**
  - **JavaScript:** *modifier(index)* function to populate the form with the trainee's data for editing.

### ****3. Delete Trainees****

- **Functionality:** Users can remove a trainee from the list.

- **Tools Used :**
  - **JavaScript:** *supprimer(index)* function to delete a trainee and update the list.

### ****4. Calculate Averages****

- **Functionality:** Automatically calculates the average of CC grades and combines it with the EFM grade using a weighted formula:
  - **Formula:** (Average of CCs * 0.33) + (EFM * 0.67)

- **Tools Used :**
  - **JavaScript:** Calculations are handled in the *afficherTable()* and *calculerStats()* functions.

### ****5. Dynamic Validation****

- **Functionality:** Trainees are marked as "Validated" (V) if their average is 10 or higher, otherwise "Not Validated" (NV).

- **Tools Used :**
  - **JavaScript:** Validation logic in *afficherTable()*.

### ****6. Statistics****

- **Functionality:** Displays:
  - Total number of trainees.
  - Class average.
  - Number of validated and non-validated trainees.
  - Success rate percentage.

- **Tools Used :**
  - **JavaScript:** *calculerStats()* function to compute and display statistics dynamically.

### ****7. Responsive Design****

- **Functionality:** The application is styled for a clean and responsive layout.

- **Tools Used :**
  - **Bootstrap:** Used for buttons, table styling, and responsive design.
  - **CSS:** Custom styles for animations, buttons, and layout.

### ****8. Print Functionality****

- **Functionality:** Users can print the trainee list directly from the application.

- **Tools Used :**
  - **JavaScript:** *window.print()* function triggered by a button.

### ****9. Persistent Data****

- **Functionality:** Trainee data is saved in the browser's local storage to persist across sessions.

- **Tools Used :**
  - **JavaScript:** localStorage API to save and retrieve trainee data.

### ****10. JavaScript Data Display****

- **Functionality:** Displays the trainee data in JSON format for debugging or exporting purposes.

- **Tools Used :**
  - **JavaScript:** *afficherJS()* function to display the *stagiaires* array in a *pre* tag.

## ***📷 Screenshots :***

### Home Page
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/2bdb82f8231f1e152ee651f76e4042b0ab8b230d/images/home.png" alt="image alt"/>
  <br>
  <em>🏠 Home Page - The main page of the application where you can manage trainees.</em>
</p><br>

### Form Display
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/91efc072ab5fe111a5038efc4ca3ba2c7eab2e29/images/add.png" alt="image alt" />
  <br>
  <em>➕ Add Trainee - The form is displayed to input trainee details (name and grades).</em>
</p><br>

### Trainee List
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/794a22a6960947ff2820e81a71a0f4451fa93730/images/TABLE.png" alt="image alt"/>
  <br>
  <em>📋 Trainee List - The table shows the list of trainees with their grades, averages, and validation status.</em>
</p><br>

### Delete Trainee
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/ad51d0ac97dc6bc8219d774e0cf521554f6f7605/images/DELETE.png" alt="image alt"/>
  <br>
  <em>❌ Delete Trainee - A confirmation prompt is shown to remove a trainee from the list.</em>
</p><br>

### Print Page
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/3ce63c11526748ce1b837da2717fd255c2c5e768/images/PRINT.png" alt="image alt"/>
  <br>
  <em>🖨️ Print Page - The print preview of the trainee list is ready for printing.</em>
</p><br>

### JavaScript Data
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/3ce63c11526748ce1b837da2717fd255c2c5e768/images/JSON.png" alt="image alt"/>
  <br>
  <em>📄 JavaScript Data - The trainee data is displayed in JSON format for debugging or exporting.</em>
</p><br>


## **🛠️ Technologies Used :**

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white) 
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3&logoColor=white) 
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-red?logo=Bootstrap&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-green?logo=javascript&logoColor=white)

## ***⚙️ Installation Steps :***

1. **📥 Clone the repository** to your machine or download the ZIP files:
   ```
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. **📂 Navigate to the project folder** and open it in Visual Studio Code:
   ```
   cd <repo-name> && code .
   ```

3. **📦 Install the dependencies**:
   ```
   npm install
   ```

4. **🌐 Start a local server** to view the project:
   ```
   npm run dev
   ```
   The project will be accessible at: [Trainee Management](https://bouglacemarouane.github.io/Trainee-Management/)

## ***🤝 Contribute :***

Contributions to this project are welcome! If you have suggestions, improvements, or bug fixes, please submit a pull request. Make sure to follow coding conventions and maintain consistent styles.

If you encounter issues or want to request a new feature, please open an issue in the repository with as many details as possible.

## ***⭐ Support :***

If you like this project, don't forget to leave a ⭐ on GitHub. Thank you and happy coding! 🚀


## ***📬 Stay in Touch:***

- 📧 Email: bouglacemarouane@gmail.com  
- 🌐 GitHub: [Bouglace Marouane](https://github.com/BouglaceMarouane)
- 🌍 LinkedIn: [Marouane Bouglace Linkedin](https://www.linkedin.com/in/marouane-bouglace-68b17333b/)

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=60&section=footer"/>
</p>
