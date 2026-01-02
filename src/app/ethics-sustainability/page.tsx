"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EthicsPage() {
	const { t } = useLanguage();
	return (
		<div className="min-h-screen bg-[#f0f1f4]">
			<Header />

			{/* Page Banner */}
			<section className="bg-[#2b9280] py-6">
				<div className="container mx-auto px-4">
					<h1 className="text-white text-4xl font-bold text-center">CIBJO Japan & India Executives</h1>
				</div>
			</section>

			{/* Hero Image Section */}
			<section className="bg-[#2b9280] py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row gap-8 items-start xl:py-[18px]">
						<div style={{ width: '100%', maxWidth: '500px' }}>
							<img
								src="https://ugc.same-assets.com/NyTDxB7UWVSQIRgfbRkq4rndgKliMqi0.jpeg"
								alt="Bruce"
								style={{
									width: '100%',
									height: 'auto',
									minHeight: '400px',
									display: 'block'
								}}
							/>
						</div>
						<div className="lg:w-3/5 text-white">
							<h2 className="text-3xl font-bold mb-4 xl:text-[29px] xl:text-center xl:mx-[10px] xl:px-[50px] xl:py-[10px] text-[#d4ee17] rounded-[100px]">{t('jbma.bruce.name')}</h2>
							<p className="mb-4">
								{t('jbma.bruce.title')}
							</p>
							<p className="mb-4">
								{t('jbma.bruce.bio1')}
							</p>
							<p className="mb-4 xl:text-[17px]">
								{t('jbma.bruce.bio2')}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* JBMA Content Section (cloned from https://jbma.net/english/) */}
			<section id="jbma" className="bg-white py-12">

				{/* Ms. Lena Profile Section - Full Width with Photo to Edge */}
				<div className="mb-16 bg-gradient-to-br from-white to-gray-50 shadow-xl overflow-hidden border-y border-gray-100">
					<div className="flex flex-col lg:flex-row">
						{/* Photo on the left - extends to edge */}
						<div style={{ width: '100%', maxWidth: '500px' }}>
							<img
								src="https://ugc.same-assets.com/ll6kHYYFboCSPCW0Mz3KyRUOwVGPN0cd.jpeg"
								alt="Ms. Lena"
								style={{
									width: '100%',
									height: 'auto',
									minHeight: '400px',
									display: 'block'
								}}
							/>
						</div>

						{/* Bio on the right - with container padding */}
						<div className="lg:w-3/5 p-8 lg:p-12 container mx-auto">
								<div className="max-w-2xl">
									{/* Header */}
									<div className="mb-8 border-l-4 border-[#5f96bb] pl-6">
										<h3 className="text-3xl font-bold text-[#103052] mb-3 leading-tight">
											{t('jbma.lena.name')}
										</h3>
										<div className="space-y-1">
											<p className="text-xl font-semibold text-[#5f96bb]">
												{t('jbma.lena.title')}
											</p>
											<p className="text-base text-gray-600 font-medium">
												{t('jbma.lena.subtitle')}
											</p>
										</div>
									</div>

									{/* Bio Content */}
									<div className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
										<p className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#5f96bb] first-letter:mr-1 first-letter:float-left">
											{t('jbma.lena.bio1')}
										</p>

										<p className="bg-[#f8fafb] border-l-3 border-[#2b9280] p-4 rounded-r-lg">
											<span className="font-semibold text-[#103052]">{t('jbma.lena.credentials')}</span> {t('jbma.lena.bio2')}
										</p>

										<p>
											{t('jbma.lena.bio3')}
										</p>

										<p className="pt-3 border-t border-gray-200">
											{t('jbma.lena.bio4')}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

			</section>

			{/* Main Content */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="prose prose-lg max-w-none">
						<p className="mb-4">
							{t('ethics.p4')}
						</p>

						<p className="mb-4">
							{t('ethics.p5')}
						</p>

						<p className="mb-4">
							{t('ethics.p6')}
						</p>
					</div>
				</div>
			</section>

			{/* Responsible Sourcing Section */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="prose prose-lg max-w-none">
						<p className="mb-4">
							{t('ethics.responsible.p1')}
						</p>

						<p className="mb-4">
							{t('ethics.responsible.p2')}
						</p>

						<p className="mb-4">
							{t('ethics.responsible.p3')}
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
