"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUpRight, Star, GitBranch, Mail, Download, Sun, Moon } from 'lucide-react';


const TypeScriptIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400"><title>TypeScript</title><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zM12 21.802l6.82-1.92L20.25 2.5H3.75l1.9 21.342L12 21.802zM8.25 10.5h3v3.375h-3v-3.375zm0-4.5h3V9h-3V6zM15 10.5h-3.375V15H15v-4.5zm0-4.5h-3.375v3.375H15V6z"/></svg>);
const JavaScriptIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400"><title>JavaScript</title><path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.262c.33-.66.494-1.485.494-2.474V8.21c0-2.144-.924-3.954-2.772-5.429C17.904 1.306 15.75 0 13.266 0H4.542v24h10.04c2.484 0 4.632-.924 6.444-2.772 1.812-1.848 2.724-4.16 2.724-6.966 0-1.452-.33-2.772-.99-3.954M8.166 4.3h4.5c1.22 0 2.23.396 3.024 1.188.792.756 1.188 1.764 1.188 3.024 0 1.22-.396 2.23-1.188 3.024-.792.792-1.804 1.188-3.024 1.188h-4.5V4.3zm8.22 11.232c-.756.792-1.734 1.188-2.928 1.188H8.166V13.8h7.29c1.254 0 2.274.396 3.06 1.188.786.792 1.178 1.812 1.178 3.06 0 1.254-.392 2.274-1.178 3.06z"/></svg>);
const ReactIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-300"><title>React</title><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.72-3.28a.75.75 0 0 0 1.06 1.06l3.18-3.18 3.18 3.18a.75.75 0 1 0 1.06-1.06L13.06 12l3.18-3.18a.75.75 0 1 0-1.06-1.06L12 10.94l-3.18-3.18a.75.75 0 0 0-1.06 1.06L10.94 12l-3.18 3.18z"/></svg>);
const NextjsIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-300"><title>Next.js</title><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.232 17.232l-1.414 1.414L12 14.828l-3.818 3.818-1.414-1.414L10.586 12 6.768 8.182l1.414-1.414L12 10.586l3.818-3.818 1.414 1.414L13.414 12l3.818 5.232z"/></svg>);
const TailwindIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500"><title>Tailwind CSS</title><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5zm1.5 3c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5z"/></svg>);
const JavaIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400"><title>Java</title><path fill="currentColor" d="M12.91 1.08c-.01 0-.02.01-.02.02l-1.03 4.3a.24.24 0 0 0 .23.29h2.92a.24.24 0 0 1 .24.24v1.38a.24.24 0 0 1-.24.24h-2.92a.24.24 0 0 0-.23.29l1.03 4.3c.01.03.04.05.07.05h4.1a.24.24 0 0 0 .24-.24V1.32a.24.24 0 0 0-.24-.24h-4.1zm-1.82 0h-4.1a.24.24 0 0 0-.24.24v10.38a.24.24 0 0 0 .24.24h4.1c.03 0 .06-.02.07-.05l1.03-4.3a.24.24 0 0 0-.23-.29H9.04a.24.24 0 0 1-.24-.24V5.98a.24.24 0 0 1 .24-.24h2.92a.24.24 0 0 0 .23-.29l-1.03-4.3a.06.06 0 0 0-.07-.02zM21.6 15.6H2.4a.24.24 0 0 0-.24.24v2.76a.24.24 0 0 0 .24.24h19.2a.24.24 0 0 0 .24-.24v-2.76a.24.24 0 0 0-.24-.24z"/></svg>);
const PostgresIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600"><title>PostgreSQL</title><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15V7h2v10h-2zm-4 0V7h2v10H7zm8 0V7h2v10h-2z"/></svg>);
const MongoDbIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500"><title>MongoDB</title><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2v-4zm0 6h2v2h-2v-2z"/></svg>);
const NodejsIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400"><title>Node.js</title><path fill="currentColor" d="M11.74 17.468c.404.09.82.135 1.248.135.392 0 .784-.035 1.176-.105.152.68.395 1.32.728 1.92h-3.84c.36-.627.616-1.285.792-1.95zm1.25-13.48a.56.56 0 0 0-.552-.56H5.164a.56.56 0 0 0-.552.56v12.04a.56.56 0 0 0 .552.56h.336v-1.788c0-.95.448-1.81 1.176-2.352.728-.543 1.68-.827 2.688-.827h1.01V6.23c0-.95.448-1.81 1.176-2.352.728-.543 1.68-.827 2.688-.827H18.8v-2.04h-5.81zM22.8 10.388h-5.46c-.952 0-1.812.284-2.52.852s-1.064 1.365-1.064 2.4v1.788h.896c1.32 0 2.536.515 3.444 1.428.908.913 1.424 2.133 1.424 3.456v.552h3.28V10.94a.56.56 0 0 0-.552-.552z"/></svg>);
const ExpressjsIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-300"><title>Express.js</title><path fill="currentColor" d="M24 14.852v-2.73c0-1.634-.734-3.21-2.03-4.28l-5.12-4.09A4.336 4.336 0 0 0 12.514 2h-1.028a4.336 4.336 0 0 0-4.336 4.336v11.328a4.336 4.336 0 0 0 4.336 4.336h1.028a4.336 4.336 0 0 0 4.336-4.336v-2.73h-4.622v.91c0 .44-.36.8-.8.8s-.8-.36-.8-.8v-5.46c0-.44.36-.8.8-.8s.8.36.8.8v.91h4.622z"/></svg>);
const DockerIcon = () => (<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500"><title>Docker</title><path fill="currentColor" d="M23.23 9.414l-2.21-2.21c-.47-.47-1.1-.7-1.77-.7H4.75c-.67 0-1.3.23-1.77.7L.77 9.414c-.47.47-.7 1.1-.7 1.77v6.6c0 .67.23 1.3.7 1.77l2.21 2.21c.47.47 1.1.7 1.77.7h13.06c.67 0 1.3-.23 1.77-.7l2.21-2.21c.47-.47.7-1.1.7-1.77v-6.6c0-.67-.23-1.3-.7-1.77zM12 19.5c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/><path d="M4.5 5h3v2h-3zM8.5 5h3v2h-3zM12.5 5h3v2h-3zM16.5 5h3v2h-3zM4.5 2h3v2h-3z" fill="currentColor"/></svg>);

type Repo = { id: number; name: string; html_url: string; stargazers_count: number; forks_count: number; language: string | null; };
type GitHubRepo = { id: number; name: string; html_url: string; stargazers_count: number; forks_count: number; language: string | null; };
type Theme = 'light' | 'dark';


const useTheme = (): [Theme, () => void] => {
    const [theme, setTheme] = useState<Theme>('dark');
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        const initialTheme = storedTheme ? storedTheme : 'dark';
        setTheme(initialTheme);
        if (initialTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
    };
    return [theme, toggleTheme];
};


const ProjectCard = ({ repo }: { repo: Repo }) => (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex h-full flex-col rounded-lg border-2 border-cyan-400/30 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:-translate-y-2">
      <div className="flex-grow">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-cyan-300">{repo.name}</h3>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors duration-300 hover:text-fuchsia-500"><ArrowUpRight size={20} /></a>
        </div>
      </div>
      <div className="mt-auto flex items-center space-x-4 text-sm text-zinc-500">
        {repo.language && <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-fuchsia-300">{repo.language}</span>}
        <div className="flex items-center space-x-1"><Star size={16} /><span>{repo.stargazers_count}</span></div>
        <div className="flex items-center space-x-1"><GitBranch size={16} /><span>{repo.forks_count}</span></div>
      </div>
    </motion.div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="glitch mb-12 text-center text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl" data-text={children}>
    {children}
  </motion.h2>
);

const CursorFollower = () => {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);
    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            x.set(e.clientX - 16);
            y.set(e.clientY - 16);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [x, y]);
    return <motion.div style={{ translateX: springX, translateY: springY }} className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-500" />;
};


const Header = ({ toggleTheme, theme }: { toggleTheme: () => void; theme: Theme }) => {
    const resumeUrl = "/resume.pdf";
    return (
        <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 bg-black/80 backdrop-blur-lg border-b border-cyan-400/20">
            <span className="glitch font-bold text-lg" data-text="HMH">HMH</span>
            <div className="flex items-center gap-4">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border-2 border-fuchsia-500 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-300 transition-all duration-300 hover:bg-fuchsia-500/20 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                    <Download size={16} /> Resume
                </a>
                <button onClick={toggleTheme} className="p-2 rounded-full transition-colors duration-300 text-cyan-400 hover:bg-cyan-400/10">
                    <AnimatePresence mode="wait">
                        <motion.div key={theme} initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </div>
        </motion.header>
    );
};

const HeroSection = ({ setGithubUsername }: { setGithubUsername: (u: string) => void; }) => {
    const [inputValue, setInputValue] = useState(''); // Default is now empty

    const handleUpdate = () => {
        if (inputValue) {
            setGithubUsername(inputValue);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleUpdate();
        }
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="z-10 flex flex-col items-center p-4">
                <h1 className="glitch mb-4 text-5xl font-extrabold tracking-tighter text-cyan-400 md:text-7xl" data-text="Hashim Meer Hashim">
                    Hashim Meer Hashim
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
                    A passionate Full Stack Developer, bridging the gap between slick front-end experiences and robust back-end architecture. Currently diving deep into the decentralized future and exploring Web3 technologies.
                </p>
                <div className="mb-8 flex w-full max-w-md items-center space-x-2 rounded-full border-2 border-cyan-400/30 bg-black/50 p-2 backdrop-blur-sm">
                    <Github className="ml-2 text-cyan-400" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="hashimhashmi02"
                        className="w-full flex-1 bg-transparent text-cyan-300 placeholder-zinc-500 focus:outline-none"
                    />
                    <button 
                        onClick={handleUpdate}
                        className="rounded-full bg-cyan-500/80 px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                    >
                        Load
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/hashimhashmi02" target="_blank" rel="noopener noreferrer" className="group rounded-full bg-white/10 p-3 text-zinc-300 transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-300 hover:scale-110"><Github /></a>
                    <a href="https://www.linkedin.com/in/hashim-hashmi" target="_blank" rel="noopener noreferrer" className="group rounded-full bg-white/10 p-3 text-zinc-300 transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-300 hover:scale-110"><Linkedin /></a>
                    <a href="https://x.com/Swakji" target="_blank" rel="noopener noreferrer" className="group rounded-full bg-white/10 p-3 text-zinc-300 transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-300 hover:scale-110"><Twitter /></a>
                </div>
            </motion.div>
        </section>
    );
};

const AboutSection = () => (
    <section id="about" className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
            <SectionTitle>About Me</SectionTitle>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center text-lg text-zinc-400">
                <p className="mb-4">
                    Hello! I&apos;m a Full Stack Developer with a sharp focus on building the future of the web. My expertise lies in <strong>TypeScript</strong>, crafting secure, scalable, and high-performance applications.
                </p>
                <p>
                    I am passionate about clean code and creating seamless user experiences. I am currently expanding my skills into the <strong>Web3</strong> space, exploring decentralized technologies and blockchain development to build the next generation of digital experiences.
                </p>
            </motion.div>
        </div>
    </section>
);

const SkillsSection = () => {
    const skills = [
        { name: 'TypeScript', icon: <TypeScriptIcon /> }, 
        { name: 'JavaScript', icon: <JavaScriptIcon /> }, 
        { name: 'React', icon: <ReactIcon /> }, 
        { name: 'Next.js', icon: <NextjsIcon /> }, 
        { name: 'Node.js', icon: <NodejsIcon /> },
        { name: 'Express.js', icon: <ExpressjsIcon /> },
        { name: 'Tailwind CSS', icon: <TailwindIcon /> }, 
        { name: 'Java', icon: <JavaIcon /> }, 
        { name: 'PostgreSQL', icon: <PostgresIcon /> }, 
        { name: 'MongoDB', icon: <MongoDbIcon /> },
        { name: 'Docker', icon: <DockerIcon /> },
    ];
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    return (
        <section id="skills" className="py-20 bg-black/30">
            <div className="container mx-auto max-w-5xl px-4">
                <SectionTitle>My Tech Stack</SectionTitle>
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex flex-wrap justify-center gap-8">
                    {skills.map((skill) => (
                        <motion.div key={skill.name} variants={itemVariants} className="group flex flex-col items-center gap-2">
                            <motion.div className="rounded-full border border-cyan-400/20 bg-black p-4 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]" whileHover={{ scale: 1.1, y: -5 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>{skill.icon}</motion.div>
                            <span className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-cyan-300">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ProjectsSection = ({ repos, loading, error }: { repos: Repo[]; loading: boolean; error: string | null }) => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } } };
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto max-w-6xl px-4">
                <SectionTitle>My Work</SectionTitle>
                <AnimatePresence>
                    {loading && <motion.div exit={{ opacity: 0 }} className="text-center text-zinc-400">Loading projects...</motion.div>}
                    {error && (
                        <motion.div 
                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }} 
                            className="text-center text-red-400 border border-red-400/50 bg-red-500/10 p-4 rounded-lg"
                        >
                            {error}
                        </motion.div>
                    )}
                    {!loading && !error && repos.length === 0 && <motion.div exit={{ opacity: 0 }} className="text-center text-zinc-400">Enter GitHub username to see projects.</motion.div>}
                </AnimatePresence>
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {repos.map((repo) => (<ProjectCard key={repo.id} repo={repo} />))}
                </motion.div>
            </div>
        </section>
    );
};

const ContactSection = () => (
    <section id="contact" className="py-20 border-t-2 border-cyan-400/20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
            <SectionTitle>Get In Touch</SectionTitle>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-8 text-lg text-zinc-400">
                I&apos;m always open to discussing new projects and opportunities. Feel free to reach out if you like my work.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                <a href="mailto:hashimhashim86@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-cyan-400 bg-cyan-500/10 px-8 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                    <Mail size={20} /> Email Me
                </a>
            </motion.div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-8 text-center text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Hashim Meer Hashim. All Rights Reserved.</p>
        <p className="text-sm font-['Orbitron',_sans-serif]">Built with passion ❤️</p>
    </footer>
);


const App = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [githubUsername, setGithubUsername] = useState(''); // Default is now empty
    const [theme, toggleTheme] = useTheme();

    useEffect(() => {
        const fetchRepos = async () => {
            if (!githubUsername) {
                setRepos([]);
                return;
            }
            setLoading(true);
            setError(null);
            
            try {
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`);
                if (!response.ok) {
                    if (response.status === 404) throw new Error('GitHub user not found. Please check the username.');
                    if (response.status === 403) throw new Error('API rate limit exceeded. Please wait a moment and try again.');
                    throw new Error(`Failed to fetch projects. Status: ${response.status}`);
                }
                const data: GitHubRepo[] = await response.json();
                if (data.length === 0) {
                    setError("This user doesn&apos;t have any public repositories.");
                    setRepos([]);
                    return;
                }
                setRepos(data.slice(0, 9));
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
                setRepos([]); // Clear repos on error
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, [githubUsername]);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
                html.dark {
                   /* This class enables dark mode */
                }
                body {
                    background-color: #ffffff;
                    font-family: 'Orbitron', sans-serif;
                }
                html.dark body {
                    background-color: #000000;
                }
                .font-orbitron {
                    font-family: 'Orbitron', sans-serif;
                }
                .glitch {
                    position: relative;
                    color: #00ffff;
                    text-shadow: 0.05em 0 0 rgba(255,0,0,.75), -0.025em -0.05em 0 rgba(0,255,0,.75), 0.025em 0.05em 0 rgba(0,0,255,.75);
                }
                .glitch[data-text]::before, .glitch[data-text]::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: black;
                    overflow: hidden;
                    animation: glitch-anim 3s infinite linear alternate-reverse;
                }
                .dark .glitch[data-text]::before, .dark .glitch[data-text]::after {
                    background: black;
                }
                html:not(.dark) .glitch[data-text]::before, html:not(.dark) .glitch[data-text]::after {
                    background: white;
                }
                html:not(.dark) .glitch {
                    color: #000;
                    text-shadow: 0.05em 0 0 rgba(0,255,255,.75), -0.025em -0.05em 0 rgba(255,0,0,.75), 0.025em 0.05em 0 rgba(0,0,255,.75);
                }

                .glitch[data-text]::before {
                    left: 2px;
                    text-shadow: -2px 0 #ff00ff;
                    animation: glitch-anim-2 2s infinite linear alternate-reverse;
                }
                .glitch[data-text]::after {
                    left: -2px;
                    text-shadow: -2px 0 #00ffff;
                    animation: glitch-anim-3 2.5s infinite linear alternate-reverse;
                }
                 @keyframes glitch-anim { 0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); } 10% { clip-path: polygon(0 78%, 100% 78%, 100% 82%, 0 82%); } 20% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); } 30% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); } 40% { clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%); } 50% { clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); } 60% { clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%); } 70% { clip-path: polygon(0 90%, 100% 90%, 100% 95%, 0 95%); } 80% { clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%); } 90% { clip-path: polygon(0 25%, 100% 25%, 100% 35%, 0 35%); } 100% { clip-path: polygon(0 5%, 100% 5%, 100% 15%, 0 15%); } }
                 @keyframes glitch-anim-2 { 0% { clip-path: inset(5% 0 90% 0); } 100% { clip-path: inset(80% 0 5% 0); } }
                 @keyframes glitch-anim-3 { 0% { clip-path: inset(90% 0 5% 0); } 100% { clip-path: inset(5% 0 80% 0); } }
                .cyber-grid {
                    background-image: linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 4rem 4rem;
                }
            `}</style>
            <div className="bg-white dark:bg-black text-zinc-800 dark:text-zinc-200 font-orbitron transition-colors duration-300 dark:cyber-grid">
                <CursorFollower />
                <Header toggleTheme={toggleTheme} theme={theme} />
                <main>
                    <HeroSection setGithubUsername={setGithubUsername} />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection repos={repos} loading={loading} error={error} />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default App;
