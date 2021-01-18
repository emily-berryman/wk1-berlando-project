
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('first-half').del()
    .then(function () {
      // Inserts seed entries
      return knex('first-half').insert([
        {
          id: 1, 
          quote: 'some cute lil luxury item'
        },
        {
          id: 2, 
          quote: 'portal for healing'
        },
        {
          id: 3, 
          quote: 'youve worked like a machine'
        },
        {
          id: 3, 
          quote: 'rowValue3'
        },
        {
          id: 3, 
          quote: 'rowValue3'
        },
        {
          id: 3, 
          quote: 'rowValue3'
        },
        {
          id: 3, 
          quote: 'rowValue3'
        },
        {
          id: 3, 
          quote: 'rowValue3'
        },
        {
          id: 3, 
          quote: 'rowValue3'
        },
        {
          id: 3, 
          quote: 'rowValue3'
        }
      ]);
    });
};
