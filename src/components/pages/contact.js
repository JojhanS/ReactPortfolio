import React from 'react';

const preventDefault = () => {
    document.getElementById("submit").addEventListener("click", function(event){
        event.preventDefault()
      });
}

function Contact() {
    return(
        <div>
            <h2>Contact</h2>
            <form>
                <label for="name">Name:</label><br></br>
                <input type="text" id="name" name="name"></input><br></br>
                <label for="email">Email:</label><br></br>
                <input type="text" id="email" name="email"></input><br></br>
                <label for="message">Message:</label><br></br>
                <textarea id="message" name="message" rows="5" cols="20"></textarea><br></br>
                <input type="submit" id="submit" value="Submit" onClick={preventDefault}></input>
            </form>

            <div>
                Email Me Here: silvajojhan@gmail.com<br></br>
                <a href="https://github.com/JojhanS">My GitHub Profile</a>
            </div>
        </div>
    );
}

export default Contact;
