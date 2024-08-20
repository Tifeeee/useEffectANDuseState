import React, { useState, useEffect } from 'react';

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section>
                    <h1>Welcome to the useState class</h1>
                </section>
            )}
        </>
    );
}

export default LandingPage;
