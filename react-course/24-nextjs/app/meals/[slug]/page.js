export default function MealDetailPage({params}) {
  return <main>
    <h1>Meals detail</h1>
    <p>{params.slug}</p>
  </main>
}