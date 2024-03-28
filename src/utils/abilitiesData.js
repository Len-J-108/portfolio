// Images
import css3Logo from '../Assets/images/abilities/CSS3_logo.svg.png';
import html5Logo from '../Assets/images/abilities/1200px-HTML5_Badge.svg.png';
import jsLogo from '../Assets/images/abilities/js.png';
import reactLogo from '../Assets/images/abilities/react.svg.png';
import bootstrapLogo from '../Assets/images/abilities/bootstrap.svg.png';
import gitLogo from '../Assets/images/abilities/git.png';
import tailwindLogo from '../Assets/images/abilities/tailwind.svg';
import responsiveLogo from '../Assets/images/abilities/responsive.png';
import nodeLogo from '../Assets/images/abilities/nodejsLogo.png';
import expressLogo from '../Assets/images/abilities/expressjs.svg';
import mongoDbLogo from '../Assets/images/abilities/mongodb.svg';
import tsLogo from  '../Assets/images/abilities/tsLogo.png';

const abilitiesData = [
  { id: 0, 
    name: 'CSS3',
    img: css3Logo,
    txt: 'used for styling and formatting web documents, enhancing their visual appeal.' 
    },
  { id: 1, 
    name: 'HTML5',
    img: html5Logo,
    txt: 'HTML is the standard markup language for creating web pages and applications.' 
    },
  { id: 2, 
    name: 'Javascript',
    img: jsLogo,
    txt: 'A versatile programming language used for creating interactive web elements.' 
    },
  { id: 3, 
    name: 'Typescript',
    img: tsLogo,
    txt: 'A superset of JavaScript, adding static typing for robust application development.' 
    },
  { id: 4, 
    name: 'React',
    img: reactLogo,
    txt: 'A JavaScript library for building user interfaces, known for its component-based architecture.' 
    },
  { id: 5, 
    name: 'Bootstrap',
    img: bootstrapLogo,
    txt: 'A popular front-end framework for building responsive and mobile-first websites.' 
    },
  { id: 6, 
    name: 'Tailwind',
    img: tailwindLogo,
    txt: 'Tailwind CSS is a utility-first CSS framework for building custom designs quickly.' 
    },
  { id: 7, 
    name: 'Git',
    img: gitLogo,
    txt: 'A distributed version control system for tracking changes in source code during software development.' 
    },
  {
    id: 9,
    name: 'Responsive Design',
    img: responsiveLogo,
    txt: 'Ensures web content adapts to various screen sizes and devices seamlessly.',
  },
  {id: 10, 
    name: 'NODE JS',
    img: nodeLogo,
    txt: 'A runtime environment that executes JavaScript code outside of a web browser.'
      },
  { id: 11, 
    name: 'Express.js',
    img: expressLogo,
    txt: 'A minimalist web application framework for Node.js, making server-side development easier.' 

    },
  { id: 12, 
    name: 'MongoDB',
    img: mongoDbLogo,
    txt: 'A relational database system, known for its flexibility and scalability in handling unstructured data.' 
    },
];

export default abilitiesData;
