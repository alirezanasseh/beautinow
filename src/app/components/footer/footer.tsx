import CallToAction from '@/app/components/footer/call-to-action';
import SocialPosts from '@/app/components/footer/social-posts';
import FooterMenu from '@/app/components/footer/footer-menu';
import FooterNote from '@/app/components/footer/footer-note';
import FooterCurrencies from '@/app/components/footer/footer-currencies';
import Integrations from '@/app/components/footer/integrations';

export default function Footer() {
	return (
		<footer>
			<CallToAction />
			<SocialPosts />
			<FooterMenu />
			<FooterNote />
			<FooterCurrencies />
			<Integrations />
		</footer>
	);
}