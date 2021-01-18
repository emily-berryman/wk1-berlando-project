
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('first-half').del()
    .then(function () {
      // Inserts seed entries
      return knex('first-half').insert([
        {
          id: 1, 
          quote: 'some cute lil luxury item '
        },
        {
          id: 2, 
          quote: 'portal for healing '
        },
        {
          id: 3, 
          quote: 'youve worked like a machine '
        },
        {
          id: 4, 
          quote: 'gravely dissapointed with '
        },
        {
          id: 5, 
          quote: 'her shackles are very different from my own '
        },
        {
          id: 6, 
          quote: 'i am going to write fire '
        },
        {
          id: 7, 
          quote: 'how does the sea remember me '
        },
        {
          id: 8, 
          quote: 'when i dare to be powerful '
        },
        {
          id: 9, 
          quote: 'in the service of my vision'
        },
        {
          id: 10, 
          quote: 'whether i am afraid'
        }
      ]);
    });
};
