import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900">
                
                {/* Header */}
                <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
                    <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
                        laravel-auth-breeze-react
                    </h1>
                    <nav className="space-x-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="text-sm text-gray-700 dark:text-gray-200 hover:underline"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="text-sm text-gray-700 dark:text-gray-200 hover:underline"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="text-sm text-gray-700 dark:text-gray-200 hover:underline"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main Content */}
                <main className="flex-grow flex items-center justify-center text-center text-gray-800 dark:text-white">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Laravel Breeze with React + Inertia</h2>
                        <p>Tailwind CSS</p>
                        <p>Login, register, dashboard</p>
                    </div>
                </main>

                {/* Footer */}
                <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    Laravel v{laravelVersion} (PHP v{phpVersion})
                </footer>
            </div>
        </>
    );
}
