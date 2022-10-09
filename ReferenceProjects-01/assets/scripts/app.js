
// Buttons
const btnAdd = document.getElementById('btnadd');

//MODAL
const addMovieModal = document.getElementById('add-modal'); 
const deleteMovieModal = document.getElementById('delete-modal');

//MODAL Buttons
const modalAddMovieButton = document.getElementById('AddMovieButton'); 
const modalAddMovieCancelButton = document.getElementById('btn-cancel'); 

const btnDeleteModalCancel = document.getElementById('btn-delete-cancel');
const btnDeleteModalConfirm = document.getElementById('btn-delete-confirm');


//Backdrop
const backdrop = document.getElementById('backdrop');

const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');

const movies = [];


const ShowAddMovieModal = () => {
   addMovieModal.classList.add('visible');
   backdrop.classList.add('visible');
};

const HideAddMovieModal = () => {
   ToggleBackdrop();
   addMovieModal.classList.remove('visible');  
};



const ToggleBackdropHandler = () => {
   ToggleBackdrop();   
};

const ToggleBackdrop = () => {  
   backdrop.classList.toggle('visible');
   addMovieModal.classList.remove('visible');  
};


const AddMovieHandler = () => {
   const titleValue = userInputs[0].value;
   const imageurlValue = userInputs[1].value;
   const ratingValue = userInputs[2].value;
 
   if(titleValue.trim() === '' || imageurlValue === '' || ratingValue === ''
     || +ratingValue < 1 || +ratingValue > 5 )
     {
      alert('please enter valid values');
     }

     const movie = {
        id: Math.random().toString(), 
        title: titleValue,
        image: imageurlValue,
        rating: ratingValue
     };

     movies.push(movie); 
     
     updateUI();
     renderNewMovieElement(movie.id, titleValue,imageurlValue,ratingValue);

     CloseAddMovieModal();
     clearInputs();     
};

const updateUI = () => {
   if(movies.length === 0){
      entryTextSection.style.display = 'block';
   }
   else
   {
      entryTextSection.style.display = 'none';
   }
}

const renderNewMovieElement = (id, title, imageurl, rating) =>
{
   const newMovieElement = document.createElement('li');
   newMovieElement.className = 'movie-element';
   newMovieElement.innerHTML = `
   <div class ="movie-element__image">
   <img src="${imageurl}" alt="${title}">
   </div>
   <div class="movie-element__info">
   <h2>${title}</h2>
   <p>${rating} /5 stars</p>
   </div>
   `;

   newMovieElement.addEventListener('click', deletemovieHandler.bind(null, id));   
   movieList.append(newMovieElement);
}

const CloseAddMovieModal = () => {
   addMovieModal.classList.remove('visible');
   backdrop.classList.remove('visible');
 }

 const clearInputs = () => {
   for(const input of userInputs)
   {
      input.value = '';
   }
}

const deletemovieHandler = (id) => {   
   deleteMovieModal.classList.add('visible');
   backdrop.classList.toggle('visible');

   btnDeleteModalConfirm.addEventListener('click', deletemovie.bind(null, id));
   btnDeleteModalCancel.addEventListener('click', DeleteModalCancelHandler);

}

const deletemovie = (id) => {
   let movieIndex = 0;

   for(const mov of movies)
   {
      if(mov.id === id)
      {
         break;
      }
      else
      {
         movieIndex++;
      }
   }
   movies.splice(movieIndex,1);
   movieList.children[movieIndex].remove();
   //movieList.removeChild(movieList.children[movieIndex]);

   updateUI();

   deleteMovieModal.classList.remove('visible');
   backdrop.classList.toggle('visible');

}

const DeleteModalCancelHandler = () => {
   deleteMovieModal.classList.remove('visible');
   backdrop.classList.remove('visible');
}

const DeleteModalConfirmHandler = () => {
   deleteMovieModal.classList.remove('visible');
   backdrop.classList.remove('visible');
}

// Buttons
btnAdd.addEventListener('click', ShowAddMovieModal);

//Backdrop
backdrop.addEventListener('click', ToggleBackdropHandler);

modalAddMovieButton.addEventListener('click', AddMovieHandler);
modalAddMovieCancelButton.addEventListener('click', HideAddMovieModal);

//btnDeleteModalCancel.addEventListener('click', DeleteModalCancelHandler);
//btnDeleteModalConfirm.addEventListener('click', DeleteModalConfirmHandler);