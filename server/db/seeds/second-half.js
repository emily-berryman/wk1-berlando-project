
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
