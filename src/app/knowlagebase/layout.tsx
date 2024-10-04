export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <h1>Knowlage Base</h1>
            {children}
        </main>
    );
}