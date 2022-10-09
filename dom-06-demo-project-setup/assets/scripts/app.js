
const btnAdd = document.getElementById('btnadd');
//const btnCancel = document.querySelector('.btn--passive');
const addMovieModal = document.getElementById('add-modal'); 
const backdrop = document.getElementById('backdrop'); 

const btnAddMovieCancel = document.getElementById('btn-cancel'); // document.getElementById('btnCancel1'); 
const addMovieButton = document.getElementById('AddMovieButton');



const userInputs = addMovieModal.querySelectorAll('input');


const entryTextSection = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');


const btnDeleteCancel = document.getElementById('btn-delete-cancel');
const btnDeleteConfirm = document.getElementById('btn-delete-confirm');

const deleteMovieModal = document.getElementById('delete-modal');


let movies = [];

const updateUI = () => {
   if(movies.length === 0){
      entryTextSection.style.display = 'block';
   }
   else
   {
      entryTextSection.style.display = 'none';
   }
}

const deletemovieHandler = (id) => { 
   alert('shaka bum');  
   deleteMovieModal.classList.add('visible');
   backdrop.classList.toggle('visible');

   btnDeleteConfirm.addEventListener('click', deletemovie.bind(null, id));
   btnDeleteCancel.addEventListener('click', Canceldelete);

   alert('shaka bum');
   
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

const ToggleBackdrop = () => {   
   backdrop.classList.toggle('visible');
 }

const closeMovieDeletionModal = () => {
   ToggleBackdrop();
   deleteMovieModal.classList.remove('visible');
 }

 const CloseMovieModal = () => {
   addMovieModal.classList.remove('visible');
   backdrop.classList.remove('visible');
 }

 const ShowMovieModal = () => {
   addMovieModal.classList.add('visible');
   ToggleBackdrop();
 }
 


const clearInputs = () => {
   for(const input of userInputs)
   {
      input.value = '';
   }
}

const closeMovieConfirmationModal = () => {
   deleteMovieModal.classList.remove('visible');
   backdrop.classList.toggle('visible');
}

const Canceldelete = () => {
   deleteMovieModal.classList.remove('visible');
   backdrop.classList.toggle('visible');

}

const CancelMovieHandler = () => {    
   CloseMovieModal();
    clearInputs();
    //ToggleBackdrop();
  }

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
     CloseMovieModal();
     clearInputs();
     ToggleBackdrop();
     updateUI();
     renderNewMovieElement(movie.id, titleValue,imageurlValue,ratingValue);

}


const BackdropClickHandler = () => {
   ToggleBackdrop();
   CloseMovieModal();
   closeMovieDeletionModal();
}


btnAdd.addEventListener('click', ShowMovieModal);
btnAddMovieCancel.addEventListener('click', CancelMovieHandler);
backdrop.addEventListener('click', BackdropClickHandler);
addMovieButton.addEventListener('click', AddMovieHandler);
