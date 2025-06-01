const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: ''
};


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData = { ...formData, ...parsedData };
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch (e) {
    console.error('Помилка завантаження даних:', e);
  }
}


form.addEventListener('input', (evt) => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Заповніть всі поля');
    return;
  }

  console.log('Дані форми:', formData);


  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});