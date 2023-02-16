const modalAlert = (message) => {
  const modal = picoModal(message);

  modal.show();
};

window.alert = modalAlert;

alert('Invatam chestii');
