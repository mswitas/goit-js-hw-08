import { save, load } from "./storage";
import throttle from "lodash.throttle";

const formDataObject = { email: '', message: '' };

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
    loadFormData();
};

const loadFormData = () => {
    const formData = load('feedback-form-state');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    if (formData !== undefined) {
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    } else {
        emailInput.value = '';
        messageInput.value = '';
    }
};

const form = document.querySelector('form');
form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', submitHandle);
window.addEventListener('load', loadFormData);
