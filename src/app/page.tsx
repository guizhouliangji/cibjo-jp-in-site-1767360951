"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
	const { t } = useLanguage();

	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
			<Header />

			{/* Hero Banner with Indian Luxury Frame */}
			<section className="relative overflow-hidden">
				{/* Ornate top border */}
				<div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 via-orange-400 via-pink-400 to-purple-400 z-10"></div>

				{/* Decorative corner patterns */}
				<div className="absolute top-8 left-8 w-20 h-20 border-4 border-yellow-400/60 rounded-full z-10"></div>
				<div className="absolute top-12 left-12 w-12 h-12 border-4 border-pink-400/60 rounded-full z-10"></div>
				<div className="absolute top-8 right-8 w-20 h-20 border-4 border-yellow-400/60 rounded-full z-10"></div>
				<div className="absolute top-12 right-12 w-12 h-12 border-4 border-pink-400/60 rounded-full z-10"></div>

				<img
					src="https://ext.same-assets.com/2270911947/3130562866.jpeg"
					alt="CIBJO Congress 2025 Paris"
					className="w-full h-[500px] object-cover border-8 border-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
				/>

				{/* Ornate bottom border */}
				<div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 z-10"></div>
			</section>

			{/* YouTube Video Section */}
			<section className="bg-gradient-to-r from-white via-pink-50 to-purple-50 py-12 relative">
				{/* Decorative pattern overlay */}
				<div className="absolute inset-0 opacity-5" style={{
					backgroundImage: `radial-gradient(circle at 15px 15px, currentColor 2px, transparent 2px)`,
					backgroundSize: '30px 30px',
					color: '#ec4899'
				}}></div>

				<div className="container mx-auto px-4 relative">
					<div className="max-w-4xl mx-auto">
						{/* Decorative title */}
						<div className="text-center mb-6">
							<div className="inline-flex items-center gap-3 text-pink-500 mb-4">
								<span className="text-2xl">✦</span>
								<span className="text-xl">❈</span>
								<span className="text-3xl">✧</span>
								<span className="text-xl">❈</span>
								<span className="text-2xl">✦</span>
							</div>
						</div>

						<div className="relative">
							{/* Ornate video frame */}
							<div className="absolute -inset-4 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 rounded-2xl blur-sm opacity-50"></div>
							<div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-400/50">
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/embed/6vrKePRvDxo"
									title="A look back at the experience of the 2025 CIBJO Congress in Paris"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="w-full h-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CIBJO News Section */}
			<section className="py-16 relative bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
				{/* Decorative pattern */}
				<div className="absolute inset-0 opacity-10" style={{
					backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(236, 72, 153, 0.1) 40px, rgba(236, 72, 153, 0.1) 80px)`,
				}}></div>

				<div className="container mx-auto px-4 relative">
					<div className="flex items-center justify-center gap-3 mb-12">
						<span className="text-3xl text-orange-500">✦</span>
						<div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-white px-8 py-3 rounded-full font-black text-lg uppercase shadow-xl border-3 border-pink-300/50">
							{t('home.news.title')}
						</div>
						<span className="text-3xl text-purple-500">✦</span>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<NewsCard
							image="https://ext.same-assets.com/2270911947/689945580.jpeg"
							category={t('home.news.title')}
							title={t('home.news.pearl')}
							date="29 October 2025"
						/>
						<NewsCard
							image="https://ext.same-assets.com/2270911947/2418154008.jpeg"
							category={t('home.news.title')}
							title={t('home.news.esg')}
							date="28 October 2025"
						/>
						<NewsCard
							image="https://ext.same-assets.com/2270911947/1044985771.jpeg"
							category={t('home.news.title')}
							title={t('home.news.ai')}
							date="28 October 2025"
						/>
						<NewsCard
							image="https://ext.same-assets.com/2270911947/1090484712.jpeg"
							category={t('home.news.title')}
							title={t('home.news.bluelist')}
							date="28 October 2025"
						/>
						<NewsCard
							image="https://ext.same-assets.com/2270911947/3491176738.jpeg"
							category={t('home.news.title')}
							title={t('home.news.africa')}
							date="28 October 2025"
						/>
					</div>

					<div className="flex justify-center gap-4 mt-12">
						<button className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
							<ChevronLeft className="w-6 h-6" />
						</button>
						<button className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full hover:from-pink-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
							<ChevronRight className="w-6 h-6" />
						</button>
					</div>
				</div>
			</section>

			{/* Newsletter Section - Indian Luxury Style */}
			<section className="relative bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 py-20 text-white overflow-hidden">
				{/* Ornate Pattern Background */}
				<div className="absolute inset-0 opacity-15">
					<div className="absolute inset-0" style={{
						backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
					}}></div>
				</div>

				{/* Decorative borders */}
				<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400"></div>
				<div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>

				{/* Corner decorations */}
				<div className="absolute top-6 left-6 w-16 h-16 border-3 border-yellow-300/50 rounded-full"></div>
				<div className="absolute top-6 right-6 w-16 h-16 border-3 border-pink-300/50 rounded-full"></div>

				<div className="container mx-auto px-4 text-center relative">
					<div className="max-w-3xl mx-auto">
						{/* Decorative symbols */}
						<div className="flex justify-center items-center gap-4 mb-6">
							<span className="text-4xl text-yellow-300">✦</span>
							<span className="text-3xl text-pink-300">❈</span>
							<span className="text-5xl text-orange-300">✧</span>
							<span className="text-3xl text-pink-300">❈</span>
							<span className="text-4xl text-yellow-300">✦</span>
						</div>

						<h2 className="text-5xl font-black mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]
							[text-shadow:_2px_2px_0_#f59e0b,_3px_3px_0_#d97706,_4px_4px_15px_rgba(0,0,0,0.3)]">
							{t('home.newsletter.title')}
						</h2>
						<p className="mb-8 text-xl text-yellow-100 font-semibold drop-shadow-md">{t('home.newsletter.subtitle')}</p>
						<button className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-purple-900 font-black px-12 py-4 rounded-full hover:from-yellow-300 hover:via-orange-300 hover:to-pink-300 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-110 border-3 border-white/50 text-lg uppercase">
							{t('home.newsletter.button')}
						</button>
					</div>
				</div>
			</section>

			{/* Jewellery Industry Voices Section */}
			<section className="bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 py-16 relative">
				{/* Decorative pattern */}
				<div className="absolute inset-0 opacity-10" style={{
					backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 2px, transparent 2px)`,
					backgroundSize: '40px 40px',
					color: '#ec4899'
				}}></div>
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row gap-8 items-start">
						<div className="lg:w-1/3">
							<img src="https://ext.same-assets.com/2270911947/2441111299.png" alt="Jewellery Industry Voices" className="w-64 mb-4" />
							<h2 className="text-3xl font-bold text-[#103052] mb-4">
								{t('home.webinar.title').split(' ').map((w, i) => i === 0 ? (<span key={i}>{w}<br /></span>) : (<span key={i} className="text-[#475e99]"> {w} </span>))}
							</h2>
							<div className="bg-[#5f96bb] text-white px-4 py-2 inline-block rounded font-bold mb-4">
								{t('home.webinar.subtitle')}
							</div>
							<p className="text-gray-700 mb-4">
								{t('home.webinar.desc')}
							</p>
						</div>
						<div className="lg:w-2/3">
							<img src="https://ext.same-assets.com/2270911947/232692084.jpeg" alt="Webinar Schedule" className="w-full rounded-lg shadow-lg mb-6" />
							<h3 className="font-bold text-lg mb-4 text-[#5f96bb]">{t('home.webinar.previous')}</h3>
							<div className="grid md:grid-cols-2 gap-4">
								<WebinarCard
									image="https://ext.same-assets.com/2270911947/1023564846.jpeg"
									title="Leveraging technology to drive sustainability and traceability in jewellery retail operations"
									date="September 7, 2025"
								/>
								<WebinarCard
									image="https://ext.same-assets.com/2270911947/3281052153.jpeg"
									title="The evolving perception of 'precious' in the jewellery industry"
									date="September 7, 2025"
								/>
								<WebinarCard
									image="https://ext.same-assets.com/2270911947/456209402.jpeg"
									title="Turning ESG principles into practice tools to advance jewellery sustainability"
									date="September 7, 2025"
								/>
								<WebinarCard
									image="https://ext.same-assets.com/2270911947/3823329073.jpeg"
									title="Sustainability in the gold and precious metals sectors"
									date="September 6, 2025"
								/>
							</div>

							<div className="grid md:grid-cols-2 gap-4 mt-8">
								<div className="bg-[#a3c5dd] p-8 rounded text-center">
									<h3 className="font-bold mb-4">{t('home.webinar.library')}</h3>
									<p className="text-sm mb-4">{t('home.webinar.library.desc')}</p>
									<button className="bg-[#5f96bb] text-white px-6 py-2 rounded hover:bg-[#475e99]">
										{t('home.button.clickhere')}
									</button>
								</div>
								<div className="bg-[#7ba8c9] p-8 rounded text-center flex flex-col justify-center">
									<h3 className="font-bold mb-4">{t('home.webinar.signup')}</h3>
									<p className="text-sm mb-4">{t('home.webinar.signup.desc')}</p>
									<button className="bg-[#5f96bb] text-white px-6 py-2 rounded hover:bg-[#475e99]">
										{t('home.button.clickhere')}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services & Resources Section */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-[#5f96bb] mb-8 text-center">
						{t('home.resources.title')}
					</h2>
					<div className="grid md:grid-cols-2 gap-6 mb-8">
						<ResourceCard
							image="https://ext.same-assets.com/2270911947/524719263.jpeg"
							title={t('home.resources.bluebooks')}
							description={t('home.resources.bluebooks.desc')}
						/>
						<ResourceCard
							image="https://ext.same-assets.com/2270911947/600223865.jpeg"
							title={t('home.resources.guide')}
							description={t('home.resources.guide.desc')}
						/>
						<ResourceCard
							image="https://ext.same-assets.com/2270911947/1165707725.jpeg"
							title={t('home.resources.toolkit')}
							description={t('home.resources.toolkit.desc')}
						/>
						<ResourceCard
							image="https://ext.same-assets.com/2270911947/1748916417.jpeg"
							title={t('home.resources.sustainability')}
							description={t('home.resources.sustainability.desc')}
						/>
						<ResourceCard
							image="https://ext.same-assets.com/2270911947/1778681470.jpeg"
							title={t('home.resources.greenhouse')}
							description={t('home.resources.greenhouse.desc')}
						/>
						<ResourceCard
							image="https://ext.same-assets.com/2270911947/2887795290.jpeg"
							title={t('home.resources.dosdonts')}
							description={t('home.resources.dosdonts.desc')}
						/>
					</div>
				</div>
			</section>

			{/* Industry Categories */}
			<section className="py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-6">
						<CategoryCard
							title={t('home.category.standards')}
							subtitle={t('home.category.standards.desc')}
							bgColor="bg-[#8b6b5c]"
						/>
						<CategoryCard
							title={t('home.category.ethics')}
							subtitle={t('home.category.ethics.desc')}
							bgColor="bg-[#5a8b7c]"
						/>
						<CategoryCard
							title={t('home.category.education')}
							subtitle={t('home.category.education.desc')}
							bgColor="bg-[#b8955f]"
						/>
					</div>
				</div>
			</section>

			{/* Special Reports Section */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4">
					<div className="flex items-center gap-4 mb-8">
						<img src="https://ext.same-assets.com/2270911947/1590085311.png" alt="CIBJO Congress 2025" className="h-20" />
						<div>
							<h2 className="text-2xl font-bold">{t('home.reports.title')}</h2>
							<p className="text-gray-700">{t('home.reports.desc')}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Membership CTA */}
			<section className="bg-gradient-to-r from-[#4a90e2] to-[#7cb8f7] py-16">
				<div className="container mx-auto px-4">
					<img src="https://ext.same-assets.com/2270911947/3727823571.jpeg" alt="Make Your Voice Heard" className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-8" />
					<div className="bg-white p-8 rounded-lg max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4">{t('home.member.title')}</h2>
						<p className="text-gray-700 mb-6">{t('home.member.desc')}</p>
						<button className="border-2 border-[#5f96bb] text-[#5f96bb] px-8 py-3 rounded hover:bg-[#5f96bb] hover:text-white transition-colors">{t('home.member.button')}</button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

function NewsCard({ image, category, title, date }: { image: string; category: string; title: string; date: string }) {
	return (
		<div className="group bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-transparent hover:border-pink-300/50 duration-300">
			<div className="relative overflow-hidden">
				<img src={image} alt={title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
				<div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
			</div>
			<div className="p-5 relative">
				<div className="absolute -top-3 left-4 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-white text-xs px-4 py-1.5 inline-block rounded-full font-bold shadow-lg border-2 border-white">{category}</div>
				<h3 className="mt-3 text-purple-800 font-bold mb-3 hover:text-fuchsia-700 cursor-pointer line-clamp-3 text-lg">{title}</h3>
				<p className="text-sm text-pink-600 font-semibold">{date}</p>
			</div>
		</div>
	);
}

function WebinarCard({ image, title, date }: { image: string; title: string; date: string }) {
	return (
		<div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border-3 border-orange-200/50 hover:border-pink-300 duration-300">
			<div className="relative overflow-hidden">
				<img src={image} alt={title} className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500" />
				<div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
			</div>
			<div className="p-4">
				<h4 className="text-sm font-bold text-fuchsia-700 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">{title}</h4>
				<p className="text-xs text-orange-600 font-semibold">{date}</p>
			</div>
		</div>
	);
}

function ResourceCard({ image, title, description }: { image: string; title: string; description: string }) {
	return (
		<div className="group bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-yellow-300/40 hover:border-orange-400/60 duration-300">
			<div className="relative overflow-hidden">
				<img src={image} alt={title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
				<div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
			</div>
			<div className="p-6 relative">
				<div className="absolute -top-3 left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-3 border-white shadow-lg"></div>
				<h3 className="font-black text-xl mb-3 text-purple-800 mt-2">{title}</h3>
				<p className="text-sm text-gray-700 mb-5 line-clamp-4 leading-relaxed">{description}</p>
				<button className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-500 hover:via-fuchsia-400 hover:to-pink-500 transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-pink-300/50">
					Click for more info
				</button>
			</div>
		</div>
	);
}

function CategoryCard({ title, subtitle, bgColor }: { title: string; subtitle: string; bgColor: string }) {
	return (
		<div className={`${bgColor} text-white rounded-lg p-8 text-center hover:opacity-90 transition-opacity cursor-pointer`}>
			<h3 className="text-2xl font-bold mb-4">{title}</h3>
			<p className="text-sm mb-6">{subtitle}</p>
			<button className="border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-gray-800 transition-colors">
				Click Here
			</button>
		</div>
	);
}
