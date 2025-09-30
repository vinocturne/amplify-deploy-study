import "./../app/app.css";

// SSR 배포 위해 동적 렌더링 선언
export const dynamic = 'force-dynamic';

async function getData() {
    return await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json)
}


export default async function App() {
    const data = await getData();
    console.log(data)
  return (
    <main>
        {
            data.map((item: any) => (
                <div key={item.id} style={{ padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span>{item.title}</span>
                    <span>{item.userId}</span>
                </div>
            ))
        }

    </main>
  );
}
