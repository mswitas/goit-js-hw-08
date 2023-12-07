import { save, load } from "./storage";
import throttle from "lodash.throttle";

const formDataObject = {email: '', message: ''};

const saveInput = event => {
    
    switch (event.target.name) {
        case 'email':
            formDataObject.email = event.target.value;
        break;
        case 'message':
            formDataObject.message = event.target.value;
        break;
    }

    save('feedback-form-state', formDataObject);
};

const submitHandle = event => {
    event.preventDefault();
    const feedbackObject = load('feedback-form-state');
    console.log(feedbackObject);
    localStorage.removeItem('feedback-form-state');
    formDataObject.email = '';
    formDataObject.message = '';
    loadFormData();
};

const loadFormData = () => {
    const restoredForm = load('feedback-form-state');
    
    if (restoredForm !== undefined) {
        formDataObject.email = restoredForm.email;
        formDataObject.message = restoredForm.message;
    }

    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    emailInput.value = formDataObject.email;
    messageInput.value = formDataObject.message;
};

const form = document.querySelector('form');
form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', submitHandle);
window.addEventListener('load', loadFormData);
