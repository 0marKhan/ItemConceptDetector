# ItemDetector, a website that does general item recognition

## Uses the Clarifai API to access the trained general-image-recognition model

## (View the website live)[]

This website identifies a variety of concepts in images including objects, themes, and more. Trained with over 10,000 concepts and 20M images

<p align="center">
    <img src="./item-detector.png" alt="website image" width="1347"  border="10"/>
</p>

- takes an input URL from the user

<p align="center">
    <img src="./input-image.png" alt="website image" width="1347"  border="10"/>
</p>
  
- once the image is uploaded you get buttons to generate concepts or clear the image
- if you click on the clear button it removes the URL and the image
- if you click on the generate concepts button, it sets the API call pending state to true
- this pending state is passed to the API call, and after the API call is made the API pending state is set to false as the API call is made
- the concepts data is retrieved from the clarifai API and displayed for the inputed image

<p align="center">
    <img src="./concepts.png" alt="website image" width="1347"  border="10"/>
</p>

## Technologies Used

- [![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
- [![SCSS](https://img.shields.io/badge/-SCSS-CD6799?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
- [![Material UI](https://img.shields.io/badge/-Material%20UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://material-ui.com/)
- [![Clarifai](https://img.shields.io/badge/-Clarifai-FF8800?style=for-the-badge)](https://www.clarifai.com/)


## Click on the link to watch the video demo

[Item Detector](https://youtu.be/4lWT5P4UlUk)

## How to get the project working on your device

- clone the repository
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
- navigate to the project directory and install all dependencies
  ```sh
   npm install
   ```
- create an account on Clarifai
- to see the model API go to [Clarifai API](https://clarifai.com/clarifai/main/models/general-image-recognition)
- replace the pat key with your personal Clarifai pat key 
- run the project
   ```sh
     npm start
     ```

