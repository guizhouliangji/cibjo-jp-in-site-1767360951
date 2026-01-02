"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function IndustryStandardsPage() {
	const { t } = useLanguage();
	return (
		<div className="min-h-screen bg-[#f0f1f4]">
			<Header />

			{/* Page Banner */}
			<section className="bg-[#ca614c] py-6">
				<div className="container mx-auto px-4">
					<h1 className="text-white text-4xl font-bold text-center">{t('standards.title')}</h1>
				</div>
			</section>

			{/* Hero Section */}
			<section className="bg-[#ca614c] py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row gap-8 items-center">
						<div className="lg:w-1/2">
							<img
								src="https://ext.same-assets.com/2270911947/1487154206.jpeg"
								alt="Industry Standards"
								className="w-full rounded-lg shadow-lg"
							/>
						</div>
						<div className="lg:w-1/2 text-white">
							<h2 className="text-3xl font-bold mb-4">{t('standards.heading')}</h2>
							<p className="mb-4">
								{t('standards.p1')}
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
							{t('standards.p2')}
						</p>

						<p className="mb-4">
							{t('standards.p3')}
						</p>

						<p className="mb-4">
							{t('standards.p4')}
						</p>
					</div>
				</div>
			</section>

			{/* ISO Standards Section */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="prose prose-lg max-w-none">
						<p className="mb-4">
							{t('standards.iso.p1')}
						</p>

						<p className="mb-4">
							{t('standards.iso.p2')}
						</p>

						<p className="mb-4">
							{t('standards.iso.p3')}
						</p>

						<p className="mb-4">
							{t('standards.iso.p4')}
						</p>
					</div>
				</div>
			</section>

			{/* Guidance Documents Section */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="prose prose-lg max-w-none">
						<p className="mb-4">
							{t('standards.guidance.p1')}
						</p>

						<p className="mb-4">
							{t('standards.guidance.p2')}
						</p>

						<p className="mb-4">
							{t('standards.guidance.p3')}
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
