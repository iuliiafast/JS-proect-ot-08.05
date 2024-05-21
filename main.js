
  const events = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      date: new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 75,
    },
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      category: "Health and Wellbeing",
      distance: 15,
    },
  ];
  document.addEventListener("DOMContentLoaded", function() {
    const eventsGallery = document.getElementById("events-gallery");
    const typeSelect = document.getElementById("type-select");
    const distanceSelect = document.getElementById("distance-select");
    const categorySelect = document.getElementById("category-select");

    function clearEvents() {
        while (eventsGallery.firstChild) {
            eventsGallery.removeChild(eventsGallery.firstChild);
        }
    }

    function renderEvents(eventsData) {
        clearEvents();
        eventsData.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("event-image");

            const image = document.createElement("img");
            image.src = event.image;
            image.alt = event.title;
            imageContainer.appendChild(image);

            const detailsContainer = document.createElement("div");
            detailsContainer.classList.add("event-details");

            const date = document.createElement("p");
            date.textContent = `${event.date.toLocaleString()}`;

            const title = document.createElement("h3");
            title.textContent = event.title;

            const category = document.createElement("p");
            category.textContent = `${event.category} ${event.distance} km`;

            const attendees = document.createElement("p");
            attendees.textContent = `${event.attendees || 0} attendees`;

            detailsContainer.appendChild(date);
            detailsContainer.appendChild(title);
            detailsContainer.appendChild(category);
            detailsContainer.appendChild(attendees);

            eventCard.appendChild(imageContainer);
            eventCard.appendChild(detailsContainer);

            eventsGallery.appendChild(eventCard);
        });
    }

    function filterEvents() {
        const typeValue = typeSelect.value;
        const distanceValue = distanceSelect.value === "any" ? Infinity : parseInt(distanceSelect.value);
        const categoryValue = categorySelect.value;

        const filteredEvents = events.filter(event => {
            const matchesType = typeValue === "any" || event.type === typeValue;
            const matchesDistance = event.distance <= distanceValue;
            const matchesCategory = categoryValue === "any" || event.category === categoryValue;

            return matchesType && matchesDistance && matchesCategory;
        });

        // Дальнейшие действия с отфильтрованными событиями, например, их отображение
        renderEvents(filteredEvents);
    }

    // Вызываем функцию renderEvents() для отображения всех событий при загрузке страницы
    renderEvents(events);

    // Добавляем слушатели событий для фильтрации событий при изменении селектов
    typeSelect.addEventListener("change", filterEvents);
    distanceSelect.addEventListener("change", filterEvents);
    categorySelect.addEventListener("change", filterEvents);
});
