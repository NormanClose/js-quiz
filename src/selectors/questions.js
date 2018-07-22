// Get visible questions with filters applied

export default (questions, { level, category }) => {
  return questions.filter((question) => {
    const levelMatch = question.level.toLowerCase().includes(level.toLowerCase())
    const categoryMatch = question.category.toLowerCase().includes(category.toLowerCase());

    return categoryMatch && levelMatch;
  })
};