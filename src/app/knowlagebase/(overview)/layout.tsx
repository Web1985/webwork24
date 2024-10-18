export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <div className="container mx-auto px-4">
                <h1>Knowlage Base</h1>
                <div className="flex flex-row">
                    {children}
                </div>
            </div>

        </main>
    );
}