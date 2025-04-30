import { FaReact, FaHtml5, FaPhp, FaCss3Alt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiStyledcomponents, SiJavascript, SiTypescript} from 'react-icons/si';

const technologies = [
  {
    icon: <SiTypescript className="text-3xl text-white" />,
    title: 'TypeScript',
    description: 'Commonly employed across all of my projects, it provides optional static typing and modern features, enhancing robust development practices.',
  },
  {
    icon: <SiJavascript className="text-3xl text-yellow-400" />,
    title: 'JavaScript & jQuery',
    description: 'JavaScript, celebrated for its optional static typing and contemporary features, stands as a cornerstone in virtually all of my projects, ensuring robust development practices and fostering innovation.',
  },
  {
    icon: <FaReact className="text-3xl text-cyan-400" />,
    title: 'React, Zustand',
    description: 'A cutting-edge JavaScript library for front-end development, offering a component-based approach for efficient rendering and dynamic user interfaces.',
  },
  {
    icon: <SiNextdotjs className="text-3xl text-white" />,
    title: 'Next',
    description: 'React simplifies front-end development with server-side rendering, automatic code splitting, and SEO-friendly features, empowering developers to create dynamic and responsive web applications with ease.',
  },
  {
    icon: <FaPhp className="text-3xl text-purple-400" />,
    title: 'PHP, Twig',
    description: 'A versatile scripting language powering dynamic web development with its server-side capabilities, database integration, and extensive library support.',
  },
  {
    icon: <FaHtml5 className="text-3xl text-orange-500" />,
    title: 'HTML',
    description: 'The cornerstone of modern web development, it furnishes the essential structure and semantics necessary for crafting interactive and accessible websites that cater to diverse user needs and preferences.',
  },
  {
    icon: <FaCss3Alt className="text-3xl text-blue-500" />,
    title: 'CSS, Sass, & Tailwind',
    description: 'The styling language that brings life to web pages, offering powerful design capabilities for responsive and visually engaging user interfaces.',
  },
  {
    icon: <SiStyledcomponents className="text-3xl text-pink-400" />,
    title: 'Styled Components',
    description: 'A CSS-in-JS library tailored for React, it empowers developers to effortlessly style components using JavaScript.',
  },
  {
    icon: <FaFigma className="text-3xl text-purple-500" />,
    title: 'UI design in Figma',
    description: 'A collaborative design tool revolutionizing the way teams create, prototype, and collaborate on digital interfaces.',
  },
];

export default function Technologies() {
  return (
    <section className="bg-gradient-custom text-white py-16 md:px-0 px-6 max-w-7xl mx-auto mt-30">
      <div className="text-left mb-12">
        <h2 className="text-4xl font-bold">Technologies</h2>
        <p className="mt-4 text-gray-400 max-w-xl">
          Discover my skills and experience in various technologies through my personal website, where I share insights and innovative solutions
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-gradient-custom rounded-xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#334155] p-3 rounded-lg">{tech.icon}</div>
              <h3 className="text-xl font-bold">{tech.title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
