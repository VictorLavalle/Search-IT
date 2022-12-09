export const languages = [
    {
        language: "Español",
        code: "es",
        flag: "es",
        imageSource: "assets/img/flags/mex.webp"
    },

];

export const notifications = [
    {
        title: "New user registered",
        icon: "bi bi-person-check-fill",
        time: "Just now",
        description: "Lorem Ipsum dolor sit"
    },
    {
        title: "New order received",
        icon: "bi bi-cart-check-fill",
        time: "2 min ago",
        description: "Lorem Ipsum dolor sit"
    },
    {
        title: "Server rebooted",
        icon: "bi bi-server",
        time: "5 min ago",
        description: "Lorem Ipsum dolor sit"
    },
];

export const userItems = [
    {
        title: "Profile",
        icon: "bi bi-person-circle",
        link: "session/files",
        function: ""
    },
    {
        title: "Settings",
        icon: "bi bi-gear-fill",
        route: "session/settings",
        function: ""
    },
    {
        title: "Logout",
        icon: "bi bi-box-arrow-right",
        function: "closeSession()"
    },
];
