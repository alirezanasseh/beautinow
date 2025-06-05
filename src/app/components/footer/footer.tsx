import CallToAction from '@/app/components/footer/call-to-action';
import SocialPosts from '@/app/components/footer/social-posts';
import FooterMenu from '@/app/components/footer/footer-menu';
import FooterNote from '@/app/components/footer/footer-note';
import FooterCurrencies from '@/app/components/footer/footer-currencies';
import PaymentPartners from '@/app/components/footer/payment-partners';

export default function Footer() {
	return (
		<footer>
			<CallToAction />
			<div className="bg-black text-white py-4">
				<SocialPosts />
				<FooterMenu />
				<FooterNote />
				<FooterCurrencies />
				<PaymentPartners />
			</div>
		</footer>
	);
}