const CategoryDetails = async ({ params }) => {
  const { category } = await params;

  return <div>hello {category}</div>;
};

export default CategoryDetails;
