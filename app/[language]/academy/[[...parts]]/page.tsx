export const dynamic = 'force-static'
// export const revalidate = 60;

export default function Page({ params }: { params: { parts: string[] } }) {
  const now = new Date().toISOString();

  return <>
    <div>Parts: /catch-all-example/{params.parts?.join('/')}</div>
    <div>Generated at: {now}</div>
  </>
}

export async function generateStaticParams() {

  return [
    { parts: ['academy'], language: 'de' },
    { parts: ['academy', 'glossar'], language: 'de' },
    { parts: ['academy', 'glossar', 'index'], language: 'de' }
  ]
}