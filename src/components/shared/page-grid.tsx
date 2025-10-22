function GridItem() {
  return (
    <div className="bg-stone-900 p-20">
      <h2>Title</h2>
      <p>Description</p>
    </div>
  );
}

export default function PageGrid() {
  return (
    <section className="grid grid-cols-3 max-w-7xl mx-auto gap-5 w-full">
      <GridItem />
      <GridItem />
      <GridItem />
    </section>
  );
}
