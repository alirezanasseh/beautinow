import Subscribe from '@/app/components/footer/subscribe';
import JoinWhatsapp from '@/app/components/footer/join-whatsapp';

export default function CallToAction() {
	return (
		<div className="flex gap-4 px-8 py-4">
			<Subscribe />
			<JoinWhatsapp />
		</div>
	)
}