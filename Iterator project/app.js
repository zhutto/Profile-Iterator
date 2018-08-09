//alert('js working');
 const data = [
    {
     name: 'Jon Snow',
     facton: `The Night's Watch`,
     homeland: 'Winterfell',
   },
    {
    name: 'Jamie Lanister',
    faction: `The King's Guard`,
    homeland: 'Casterly Rock',
  },
    {
    name: 'Ramsey Bolton',
    faction: `The North`,
    homeland: 'The Dreadfort',
  },
    {
    name: 'Stannis Baratheon',
    faction: `The Stormlands`,
    homeland: `Storm's End`,
    }
 ];

 const profiles = profileIterator(data);

nextProfile();

 document.getElementById('next').addEventListener('click', nextProfile);

 function nextProfile()  {
   const currentProfile = profiles.next().value;

   if(currentProfile !== undefined) {
   document.getElementById('profileDisplay').innerHTML = `
   <ul class="list-group">
      <li class ="list-group-item">Name: ${currentProfile.name}</li>
      <li class ="list-group-item">Faction: ${currentProfile.faction}</li>
      <li class ="list-group-item">Homeland: ${currentProfile.homeland}</li>
   </ul>`;
  } else {
   window.location.reload();
  }
 }

// Iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
}
