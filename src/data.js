const skills = {
    softwareSkills: [
        {
            skillName: "Python",
            fontAwesomeClassname: "fab fa-python",
            miniSkills: ['Flask', 'Django', 'DRF']
            // svgIcon: require("./assets/images/icons8-python.svg"),
            // color: "#3776AB"
        },
        {
            skillName: "Javascript",
            fontAwesomeClassname: "fab fa-js-square",
            miniSkills: ['es6', 'React', 'Redux']
            // svgIcon: require("./assets/images/icons8-python.svg"),
            // color: "#3776AB"
        },
        {
            skillName: "Databases",
            fontAwesomeClassname: "fas fa-database",
            miniSkills: ['Postgresql']
            // svgIcon: require("./assets/images/icons8-python.svg"),
            // color: "#3776AB"
        },
        {
            skillName: "Devops",
            fontAwesomeClassname: "fab fa-docker",
            // svgIcon: require("./assets/images/icons8-graphql.svg"),
            // color: "#E10098"
            miniSkills: ['Git', 'Github', 'Graphql']
        },
        {
            skillName: "QA",
            fontAwesomeClassname: "fa fa-question",
            // svgIcon: require("./assets/images/icons8-typescript.svg"),
            // color: "#007ACC"
            miniSkills: ['Cucumber', 'Siteprism', 'Cabybara', 'Cypress']
        },
        {
            skillName: "Tools",
            fontAwesomeClassname: "fas fa-tools",
            // svgIcon: require("./assets/images/icons8-graphql.svg"),
            // color: "#E10098"
            miniSkills: ['Git', 'Github', 'Graphql']
        },
        // {
        //     skillName: "Apollo Graphql",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/icons8-apollo.svg"),
        //     color: "#311C87" 
        // },
        // {
        //     skillName: "Siteprism",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/siteprism.png"),
        // },
        // {
        //     skillName: "Cypress",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/cypress.svg"),
        //     color: "#17202C"
        // },
        // {
        //     skillName: "Cucumber",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/cucumber.png"),
        // },
        // {
        //     skillName: "Capybara",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/capybara.png"),
        // },
        // {
        //     skillName: "AWS",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/icons8-amazon-web-services.svg"),
        //     color: "#232F3E"
        // },
        // {
        //     skillName: "Docker",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/icons8-docker.svg"),
        //     color: "#232F3E"
        // },
        // {
        //     skillName: "Git",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/icons8-git.svg"),
        //     color: "#F05032"
        // },
        // {
        //     skillName: "Github",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/icons8-github.svg"),
        //     color: "#181717"
        // },
        // {
        //     skillName: "Magento",
        //     fontAwesomeClassname: "",
        //     svgIcon: require("./assets/images/icons8-magento.svg"),
        //     color: '#EE672F'
        // }
    ]
}

const workExperiences = {
    experience: [
        {
            role: "Software Engineer",
            company: "Concept 254",
            companylogo: require("./assets/images/concept.png"),
            date: "August 2020 - Present",
            desc: "Concept 254 is a company that offers development services to clients. Some of the projects I've worked on include : ",
            link: "https://www.kingdom316gifts.com",
            descBullets: [
                "Worked on integrating kingdom316gifts which is a magento site with Directsmile DSMI server which is a service that allows personalisation of products on the site before adding them to cart.",
            ]
        },
        {
            role: "Software Engineer",
            company: "Bricklane Technologies",
            companylogo: require("./assets/images/bricklane.png"),
            date: "June 2019 - February 2020",
            desc: "Bricklane is an investment company in London, UK that allows it's customers to invest in expertly choosen property in various cities across the UK returning dividends from rental income of the properties. \n Some of my achievements while in Bricklane include:",
            link: "https://www.bricklane.com",
            descBullets: [
                "Working as a full-stack engineer, added several features to the company's applications (frontend, backend and admin site).",
                "Upgraded the company's stripe integration in line with the new EU rules on customer privacy.",
                "Added QA tests for existing and every new features.",
                "Main technologies used include Python(Flask, Flask Admin), React/Redux, Typescript, Graphql, Capybara, Siteprism."
            ]
        },
        {
            role: "Software Engineer",
            company: "Andela Kenya",
            companylogo: require("./assets/images/andela.png"),
            date: "August 2018 - April 2020",
            desc: "Andela is a software development company that employs promising developers in Africa and provides them with work experience to enable them level up their skills. Some of the noteworthy experiences in Andela include:",
            link: "https://www.andela.com",
            descBullets: [
                "Worked on wire, a workplace incident reporting application for Andela using React/Redux for the frontend and node/express for the back-end.",
                "Worked in a remote team to build Activo, an asset management application for Andela using React/Redux and Typescript for the frontend and Python(Flask) for the backend. Managed to deliver MVP for the product in a relatively short time.",
                "During my internship, I worked on Authors Haven, an application that allows authors to share creative ideas. The application uses React/Redux for the frontend and Python(Django REST framework) for the back-end."
            ]
        },
    ]
}

export {skills, workExperiences}