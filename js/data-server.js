import {randomUserImages} from './picture.js';
import {showAlert} from './util.js';

//получение данных с сервера

const getData = () => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      randomUserImages(photos);
    })
    .catch(() => {showAlert('Что-то пошло не так');});
};

// отправка данных на сервер

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {sendData, getData};
