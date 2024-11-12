function updateProfile() {
  // Get the new values from the input fields
  const newName = document.getElementById('new-name').value;
  const newBio = document.getElementById('new-bio').value;
  const newPicUrl = document.getElementById('new-pic-url').value;

  // Update the profile card's name if a new name is entered
  if (newName) {
      document.getElementById('profile-name').innerHTML = newName ;
  }

  // Update the bio if a new bio is entered
  if (newBio) {
      document.getElementById('profile-bio').innerHTML = newBio ;
  }

  // Update the profile picture if a new URL is entered
  if (newPicUrl) {
      document.getElementById('profile-pic').src = newPicUrl;
  }
}