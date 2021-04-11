const getRandomInArray = (max) => {
  return Math.ceil(Math.random() * (max - 1));
};

module.exports.get = (req, res) => {
  const answers = [
    { answer: 'ball', author: { name: 'Ivan', picture: 'some stock image' } },
    { answer: 'green', author: { name: 'Max', picture: 'some stock image' } },
    { answer: 'hax', author: { name: 'Olga', picture: 'some stock image' } },
    { answer: 'ball', author: { name: 'Ivan', picture: 'some stock image' } },
    { answer: 'green', author: { name: 'Max', picture: 'some stock image' } },
    { answer: 'pizza', author: { name: 'Olga', picture: 'some stock image' } },
    { answer: 'green', author: { name: 'Svetlana', picture: 'some stock image' } },
    { answer: 'ball', author: { name: 'Ivan', picture: 'some stock image' } },
    { answer: 'wind', author: { name: 'Max', picture: 'some stock image' } },
    { answer: 'spagetti', author: { name: 'Olga', picture: 'some stock image' } },
    { answer: 'spageti', author: { name: 'Svetlana', picture: 'some stock image' } }
  ];

  res.json({
    data: {
      items: answers[getRandomInArray(answers.length)]
    }
  });
};
