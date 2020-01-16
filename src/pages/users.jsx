import React from "react";
import Header from "./header";

const UsersPage = () => {
    return (
        <div>
            <Header />
            <ul>
                {["Alex", "John", "Jaz", "fedrik", "missali"].map(
                    (user, idx) => {
                        return <li key={idx}>{user}</li>;
                    }
                )}
            </ul>
        </div>
    );
};

export default UsersPage;
