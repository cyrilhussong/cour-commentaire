
    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const messageInput = document.getElementById("message");
    const commentList = document.getElementById("comment-list");
    const errorMessage = document.getElementById("error-message");
  
    // Fonction pour ajouter un commentaire à la liste
    function addComment(firstName, lastName, message) {
      const commentContainer = document.createElement("div");
      commentContainer.classList.add("flex", "space-x-4", "text-sm", "text-gray-500", "border-t", "border-gray-200");
  
      commentContainer.innerHTML = `
        <div class="flex-1 py-10">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;
  
      commentList.appendChild(commentContainer);
    }
  
    // Fonction de validation du formulaire
    function validateForm() {
      return (
        firstNameInput.value.trim() !== "" &&
        lastNameInput.value.trim() !== "" &&
        messageInput.value.trim() !== ""
      );
    }
  
    // Gestionnaire de soumission de formulaire
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      if (validateForm()) {
        // Ajouter le commentaire et réinitialiser le formulaire
        addComment(firstNameInput.value, lastNameInput.value, messageInput.value);
        form.reset();
        errorMessage.style.display = "none";
      } else {
        // Afficher un message d'erreur si le formulaire est incomplet
        errorMessage.style.display = "block";
      }
    });
  
  