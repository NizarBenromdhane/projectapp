// Fetch all trainings when page loads
document.addEventListener('DOMContentLoaded', async () => {
    const trainingList = document.getElementById('training-list');
  
    try {
      const response = await fetch('/trainings'); // Fetch data from backend
      const trainings = await response.json(); // Parse JSON response
  
      trainings.forEach(training => {
        const listItem = document.createElement('li');
        listItem.textContent = `${training.title} (${training.field}) - ${training.numberOfDays} days`;
        trainingList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching trainings:', error);
    }
  });
  
  // Handle form submission to add a new training
  document.getElementById('add-training-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const trainingData = {
      title: document.getElementById('title').value,
      field: document.getElementById('field').value,
      numberOfDays: document.getElementById('numberOfDays').value,
      year: document.getElementById('year').value,
      month: document.getElementById('month').value,
      trainer: document.getElementById('trainer').value,
      numberOfParticipants: document.getElementById('numberOfParticipants').value,
    };
  
    try {
      const response = await fetch('/trainings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trainingData),
      });
  
      if (response.ok) {
        alert('Training added successfully!');
      } else {
        alert('Failed to add training.');
      }
    } catch (error) {
      console.error('Error adding training:', error);
    }
  });
  
  