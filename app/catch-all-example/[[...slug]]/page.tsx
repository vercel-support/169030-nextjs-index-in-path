export default function Page({ params }: { params: { slug: string[] } }) {
  return <div>Slug: /catch-all-example/{params.slug?.join('/')}</div>
}