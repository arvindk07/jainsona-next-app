'use client';
import Collaborations from './Collaborations';
import Hero from './Hero';
// import QuoteForm from "./QuoteForm"
import Quote from '../../component/form/quote';
import Header from '@/component/header/header';
import { useEffect } from 'react';
import Footer from '@/component/footer/footer';
const CollaborationPage = () => {
	const ScrollToTop = () => {
		useEffect(() => {
			if (typeof window !== 'undefined') {
				window.scrollTo(0, 0);
			}
		}, []);

		return null;
	};

	return (
		<>
			<ScrollToTop />
			<Header />
			<Hero />
			<Collaborations />
			<Quote />
			<Footer />
		</>
	);
};

export default CollaborationPage;
