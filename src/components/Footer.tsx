"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
	const { t } = useLanguage();

	return (
		<footer className="bg-[#5f96bb] text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-sm">
						<p>{t('footer.copyright')}</p>
						<div className="flex gap-4 mt-2 flex-wrap">
							<a href="#" className="hover:underline">{t('footer.contact')}</a>
							<a href="#" className="hover:underline">{t('footer.press')}</a>
							<a href="#" className="hover:underline">{t('footer.kit')}</a>
							<a href="#" className="hover:underline">{t('footer.privacy')}</a>
							<a href="#" className="hover:underline">{t('footer.cookie')}</a>
							<a href="#" className="hover:underline">{t('footer.terms')}</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
