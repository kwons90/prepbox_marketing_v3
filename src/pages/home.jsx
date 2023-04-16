import HeroSection from '../components/sections/hero-section';
import StudentSection from '../components/sections/students-section';
import TestimonialsSection from '../components/sections/testimonials-section';
import TutorailSection from '../components/sections/tutorial-section';
import ProductSection from '../components/sections/product-section';
import TutorsSection from '../components/sections/tutors-section';
import PricingSection from '../components/sections/pricing-section';
import FaqSection from '../components/sections/faq-section';

const Home = () => {
    return (
        <>
            <HeroSection />
            <main>
                <section id='students-section'>
                    <StudentSection />
                    <TestimonialsSection />
                </section>
                <section id='product-section'>
                    <TutorailSection />
                    <ProductSection />
                </section>
                <TutorsSection />
                <PricingSection />
                <FaqSection />
            </main>
        </>
    );
};

export default Home;
