"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EducationPage() {
	const { t } = useLanguage();
	return (
		<div className="min-h-screen bg-[#f0f1f4]">
			<Header />

			{/* Page Banner */}
			<section className="bg-[#e7960f] py-6">
				<div className="container mx-auto px-4">
					<h1 className="text-white text-4xl font-bold text-center">{t('education.title')}</h1>
				</div>
			</section>

			{/* Hero Section */}
			<section className="bg-[#e7960f] py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row gap-8 items-center">
						<div className="lg:w-1/2">
							<img
								src="https://ext.same-assets.com/2270911947/2230925271.jpeg"
								alt="Jewellery Industry Voices"
								className="w-full rounded-lg shadow-lg"
							/>
							<p className="text-white text-sm mt-4 italic">
								{t('education.hero.caption')}
							</p>
						</div>
						<div className="lg:w-1/2 text-white">
							<h2 className="text-3xl font-bold mb-4">{t('education.heading')}</h2>
							<p className="mb-4">
								{t('education.p1')}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="prose prose-lg max-w-none">
						<p className="mb-4">
							{t('education.p2')}
						</p>

						<p className="mb-4">
							{t('education.p3')}
						</p>

						<p className="mb-4">
							{t('education.p4')}
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
