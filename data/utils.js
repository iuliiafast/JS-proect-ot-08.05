export const createEventElement = (data) => {
  const element = document.createElement('div');
  element.textContent = data.title;
  return element;
};

export const renderEvents = (arr) => {
  const eventsBox = document.querySelector('.events');
  if (!eventsBox) {
    console.error('Element with class "events" not found.');
    return;
  }
  eventsBox.innerHTML = ''; // Очистка предыдущих событий
  arr.forEach((eventData) => {
    const element = createEventElement(eventData);
    eventsBox.append(element);
  });
};