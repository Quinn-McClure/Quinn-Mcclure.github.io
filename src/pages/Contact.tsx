import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from '../components/Button';

const schema = z.object({
    name: z.string().min(2, "Please enter your name."),
    email: z.email("Please enter a valid email"),
    message: z.string().min(10, "Message is too short.")
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({ resolver: zodResolver(schema) });
    
    const onSubmit = async (data: FormData) => {
        
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <section>
                <p className="text-4xl font-bold text-text">Contact</p>
            </section>
            <section className="mt-10 max-w-2xl">
                <div className="bg-bg-card text-on-bg-card rounded-lg p-6 md:p-8 shadow-md">
                    <p className="text-2xl font-semibold mb-2">Send me a message</p>
                    <p className="text-sm opacity-80 mb-6">
                        Have a project, collaboration, or question? I’d love to hear from you.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold">
                                Name
                            </label>
                            <input
                                id="name"
                                {...register("name")} 
                                type="text" 
                                placeholder="Your name" 
                                className="w-full rounded-md border border-on-bg-card/20 bg-bg-elevated px-4 py-3 text-on-bg-card placeholder:text-on-bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold">
                                Email
                            </label>
                            <input 
                                id="email"
                                {...register("email")} 
                                type="email" 
                                placeholder="you@example.com" 
                                className="w-full rounded-md border border-on-bg-card/20 bg-bg-elevated px-4 py-3 text-on-bg-card placeholder:text-on-bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold">
                            Message
                            </label>
                            <textarea
                            id="message"
                            {...register("message")}
                            rows={6}
                            placeholder="Tell me a little about what you’re building..."
                            className="w-full rounded-md border border-on-bg-card/20 bg-bg-elevated px-4 py-3 text-on-bg-card placeholder:text-on-bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            {errors.message && <p className="text-sm text-red-700">{errors.message.message}</p>}
                        </div>

                        <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full md:w-auto">
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </div>
            </section>
            <section className="md:py-6 ">
                <p className="text-lg text-text-muted">Connect with me!</p>
                <br/>
                <ul className="flex gap-6">
                    <li>
                        <a
                            href="https://github.com/Quinn-McClure"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
                        >
                            <FaGithub className="w-8 h-8" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/quinn-mcclure-b35379227"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
                        >
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
  };
  
  export default Contact;