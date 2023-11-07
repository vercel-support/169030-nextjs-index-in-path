export const revalidate = 60;

export default function Page({ params }: { params: { slug: string[] } }) {
  const now = new Date().toISOString();

  return <>
    <div>Slug: /catch-all-example/{params.slug?.join('/')}</div>
    <div>Generated at: {now}</div>
  </>
}