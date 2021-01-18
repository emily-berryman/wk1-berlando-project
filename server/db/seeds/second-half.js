
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('second-half').del()
    .then(function () {
      // Inserts seed entries
      return knex('second-half').insert([
        {
          id: 1, 
          quote: 'you do not have to be a fire, you could be a water'
        },
        {
          id: 2, 
          quote: 'be easy.'
        },
        {
          id: 3, 
          quote: 'do not wait for someone else to come and speak for you'
        },
        {
          id: 4, 
          quote: 'you are the sky.'
        },
        {
          id: 5, 
          quote: 'sometimes your heart needs more time to accept what your mind already knows'
        },
        {
          id: 6, 
          quote: 'things falling apart is a kind of testing and also a kind of healing.'
        },
        {
          id: 7, 
          quote: "the truth is that things don't really get solved. They come together and they fall apart."
        },
        {
          id: 8, 
          quote: "when we resist change, it's called suffering"
        },
        {
          id: 9, 
          quote: "I'm going to go out like a fucking meteor!"
        },
        {
          id: 10, 
          quote: 'so that by the time we wake up'
        }
      ]);
    });
};
