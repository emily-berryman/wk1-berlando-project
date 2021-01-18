
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('second-half').del()
    .then(function () {
      // Inserts seed entries
      return knex('second-half').insert([
        {
          id: 1, 
          quote: 'rowValue1'
        },
        {
          id: 2, 
          quote: 'rowValue2'
        },
        {
          id: 3, 
          quote: 'rowValue3'
        },
        {
          id: 4, 
          quote: 'rowValue3'
        },
        {
          id: 5, 
          quote: 'rowValue3'
        },
        {
          id: 6, 
          quote: 'rowValue3'
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
