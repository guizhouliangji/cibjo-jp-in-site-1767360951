"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsPage() {
	const { t } = useLanguage();
	return (
		<div className="min-h-screen bg-[#f0f1f4]">
			<Header />
			<section className="bg-[#5f96bb] py-6">
				<div className="container mx-auto px-4">
					<h1 className="text-white text-4xl font-bold text-center">{t('nav.news')}</h1>
				</div>
			</section>
			<section className="py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<NewsCard image="https://ext.same-assets.com/2270911947/2658729033.jpeg" category={t('home.news.title')} title={t('home.news.pearl')} date="29 October 2025" />
						<NewsCard image="https://ext.same-assets.com/2270911947/1827268389.jpeg" category={t('home.news.title')} title={t('home.news.esg')} date="28 October 2025" />
						<NewsCard image="https://ext.same-assets.com/2270911947/726612299.jpeg" category={t('home.news.title')} title={t('home.news.ai')} date="28 October 2025" />
						<NewsCard image="https://ext.same-assets.com/2270911947/1356924134.jpeg" category={t('home.news.title')} title={t('home.news.bluelist')} date="28 October 2025" />
						<NewsCard image="https://ext.same-assets.com/2270911947/1358932098.jpeg" category={t('home.news.title')} title={t('home.news.africa')} date="28 October 2025" />
						<NewsCard image="https://ext.same-assets.com/2270911947/1741207390.jpeg" category={t('home.news.title')} title={t('home.news.education')} date="28 October 2025" />
						<NewsCard image="https://ext.same-assets.com/2270911947/1785338330.jpeg" category={t('home.news.title')} title={t('home.news.jade_opal_pearl_guides')} date="28 October 2025" />
						<NewsCard image="https://ext.same-assets.com/2270911947/403803331.jpeg" category={t('home.news.title')} title={t('home.news.confusion_natural_synthetics')} date="27 October 2025" />
						<NewsCard image="https://ext.same-assets.com/2270911947/1981403637.jpeg" category={t('home.news.title')} title={t('home.news.geopolitical_impact')} date="27 October 2025" />
					</div>
					<div className="flex justify-center mt-12">
						<button className="bg-[#5f96bb] text-white px-8 py-3 rounded hover:bg-[#475e99] transition-colors">{t('home.button.loadmore')}</button>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

function NewsCard({ image, category, title, date }: { image: string; category: string; title: string; date: string }) {
	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
			<img src={image} alt={title} className="w-full h-48 object-cover" />
			<div className="p-4">
				<div className="bg-[#5f96bb] text-white text-xs px-2 py-1 inline-block rounded mb-2">{category}</div>
				<h3 className="text-[#5f96bb] font-semibold mb-2 hover:text-[#475e99] cursor-pointer line-clamp-3">{title}</h3>
				<p className="text-sm text-gray-500">{date}</p>
			</div>
		</div>
	);
}
