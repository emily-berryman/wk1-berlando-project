
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
          quote: 'rowValue3'
        },
        {
          id: 8, 
          quote: 'rowValue3'
        },
        {
          id: 9, 
          quote: 'rowValue3'
        },
        {
          id: 10, 
          quote: 'rowValue3'
        }
      ]);
    });
};
