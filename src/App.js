import logo from './logo.svg';
import './App.css';
import  * as squatch from '@saasquatch/squatch-js'
import RegistrationForm from './components/form';
import { useEffect } from 'react';

  

function autoFillScript (){

  // 1. When squatch.js is ready, run the following function.
  squatch.ready(function() {
    // 2. Retrieve the element you want to auto-fill the referral code into from the DOM.
    // The are many methods to do this but some of the most common include:
    // getElementbyId - Retrieve the element by using its id https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    // getElementByClassName - Retrieve the element by its className https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
    // getElementByTag - Retrive the element by using its tag https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
    const element = document.getElementById("referralCodeField");

    // 3. Make the request to retrieve referral information from the dropped cookie
    // Cookies are dropped after a user clicks on a sharelink
    // This cookie includes important referral information such as the referrer's referral code
    // To read more on our referral cookies see https://docs.saasquatch.com/developer/squatchjs/cookies/
    squatch
    .api()
    .squatchReferralCookie()
    .then(function(response) {
      // 4. Retrieve a specific programs referral code from the response and set it on your element
      // The response returns referral codes within an object called "codes"
      // This object is key value pair where the key is the program id and the value is the referral code
      // Example:
      // {
      // "program-1": "REFERRALCODE1",
      // "program-2": "REFERRALCODE2"
      // }
      // Use your program id to access and apply the correct referral code to your element
      element.value = response.codes["purchase-based-referral"];
    });
  });
}


function App() {
  useEffect(() => {
    window.squatchTenant = "test_aqguqd9d73adj";
    autoFillScript()
  })

  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

export default App;
