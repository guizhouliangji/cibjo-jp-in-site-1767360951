"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
	const { t } = useLanguage();

	// Smooth scrolling
	if (typeof window !== 'undefined') {
		try {
			document.documentElement.style.scrollBehavior = 'smooth';
		} catch {}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
			<Header />

			{/* Royal Indian Style Page Banner */}
			<section className="relative bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 py-20 overflow-hidden">
				{/* Ornate Pattern Background */}
				<div className="absolute inset-0 opacity-20">
					<div className="absolute inset-0" style={{
						backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
					}}></div>
					<div className="absolute inset-0" style={{
						backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,215,0,0.2) 0%, transparent 50%)`,
					}}></div>
				</div>

				{/* Decorative Top Border */}
				<div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 via-orange-400 via-pink-400 to-purple-400"></div>
				<div className="absolute top-3 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-rose-300 to-fuchsia-300"></div>

				{/* Mandala-style Corner Decorations */}
				<div className="absolute top-8 left-8 w-24 h-24 border-4 border-yellow-300/40 rounded-full"></div>
				<div className="absolute top-12 left-12 w-16 h-16 border-4 border-pink-300/40 rounded-full"></div>
				<div className="absolute top-8 right-8 w-24 h-24 border-4 border-yellow-300/40 rounded-full"></div>
				<div className="absolute top-12 right-12 w-16 h-16 border-4 border-pink-300/40 rounded-full"></div>

				<div className="container mx-auto px-4 relative">
					{/* Ornamental Frame */}
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-4">
							<div className="inline-block">
								<div className="flex items-center gap-3 text-yellow-300">
									<span className="text-3xl">✦</span>
									<span className="text-2xl">❈</span>
									<span className="text-4xl">✧</span>
									<span className="text-2xl">❈</span>
									<span className="text-3xl">✦</span>
								</div>
							</div>
						</div>

						<h1 className="text-white text-6xl md:text-7xl font-black text-center tracking-wide leading-tight
							drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]
							[text-shadow:_3px_3px_0_#f59e0b,_4px_4px_0_#d97706,_5px_5px_0_#b45309,_6px_6px_20px_rgba(0,0,0,0.5)]
							border-b-4 border-t-4 border-yellow-300/50 py-4
							bg-gradient-to-r from-transparent via-white/10 to-transparent"
							style={{
								WebkitTextStroke: '2px rgba(251, 191, 36, 0.3)',
							}}
						>
							{t('about.title')}
						</h1>

						<div className="text-center mt-4">
							<div className="inline-block">
								<div className="flex items-center gap-3 text-yellow-300">
									<span className="text-3xl">✦</span>
									<span className="text-2xl">❈</span>
									<span className="text-4xl">✧</span>
									<span className="text-2xl">❈</span>
									<span className="text-3xl">✦</span>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Decorative Wave */}
					<div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>
				</div>
			</section>

			{/* Ornate Sub Navigation Tabs */}
			<nav className="relative bg-gradient-to-r from-orange-100 via-pink-100 via-purple-100 to-fuchsia-100 border-b-4 border-gradient-to-r sticky top-0 z-30 shadow-2xl backdrop-blur-md">
				{/* Top accent border */}
				<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>

				{/* Decorative pattern overlay */}
				<div className="absolute inset-0 opacity-10" style={{
					backgroundImage: `radial-gradient(circle at 10px 10px, currentColor 1px, transparent 1px)`,
					backgroundSize: '20px 20px',
					color: '#ec4899'
				}}></div>

				<div className="container mx-auto px-4 relative">
					<ul className="flex flex-nowrap overflow-auto gap-3 text-xs sm:text-sm font-black text-purple-800 uppercase py-5">
						<li>
							<a href="#intro" className="group relative pb-3 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white shadow-lg border-2 border-yellow-300 transition-all whitespace-nowrap flex items-center gap-2">
								<span className="text-lg">✦</span>
								<span className="drop-shadow-md">{t('about.subnav.intro')}</span>
								<span className="text-lg">✦</span>
							</a>
						</li>
						<li>
							<a href="#officers" className="group relative pb-3 px-4 py-2 rounded-full bg-gradient-to-r from-white to-pink-50 text-fuchsia-700 hover:from-pink-200 hover:to-purple-200 hover:text-purple-800 shadow-md hover:shadow-xl border-2 border-transparent hover:border-pink-400 transition-all whitespace-nowrap font-bold">
								<span className="drop-shadow-sm">{t('about.subnav.officers')}</span>
							</a>
						</li>
						<li>
							<a href="#admin" className="group relative pb-3 px-4 py-2 rounded-full bg-gradient-to-r from-white to-purple-50 text-fuchsia-700 hover:from-purple-200 hover:to-pink-200 hover:text-purple-800 shadow-md hover:shadow-xl border-2 border-transparent hover:border-purple-400 transition-all whitespace-nowrap font-bold">
								<span className="drop-shadow-sm">{t('about.subnav.admin')}</span>
							</a>
						</li>
						<li>
							<a href="#membership" className="group relative pb-3 px-4 py-2 rounded-full bg-gradient-to-r from-white to-orange-50 text-fuchsia-700 hover:from-orange-200 hover:to-yellow-200 hover:text-orange-800 shadow-md hover:shadow-xl border-2 border-transparent hover:border-orange-400 transition-all whitespace-nowrap font-bold">
								<span className="drop-shadow-sm">{t('about.subnav.membership')}</span>
							</a>
						</li>
						<li>
							<a href="#sectors" className="group relative pb-3 px-4 py-2 rounded-full bg-gradient-to-r from-white to-pink-50 text-fuchsia-700 hover:from-pink-200 hover:to-rose-200 hover:text-pink-800 shadow-md hover:shadow-xl border-2 border-transparent hover:border-pink-400 transition-all whitespace-nowrap font-bold">
								<span className="drop-shadow-sm">{t('about.subnav.sectors')}</span>
							</a>
						</li>
						<li>
							<a href="#statutes" className="group relative pb-3 px-4 py-2 rounded-full bg-gradient-to-r from-white to-purple-50 text-fuchsia-700 hover:from-purple-200 hover:to-fuchsia-200 hover:text-purple-800 shadow-md hover:shadow-xl border-2 border-transparent hover:border-purple-400 transition-all whitespace-nowrap font-bold">
								<span className="drop-shadow-sm">{t('about.subnav.statutes')}</span>
							</a>
						</li>
						<li>
							<a href="#congresses" className="group relative pb-3 px-4 py-2 rounded-full bg-gradient-to-r from-white to-orange-50 text-fuchsia-700 hover:from-yellow-200 hover:to-orange-200 hover:text-orange-800 shadow-md hover:shadow-xl border-2 border-transparent hover:border-yellow-400 transition-all whitespace-nowrap font-bold">
								<span className="drop-shadow-sm">{t('about.subnav.congresses')}</span>
							</a>
						</li>
					</ul>
				</div>

				{/* Bottom decorative border */}
				<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
			</nav>

			{/* Luxury Jewelry Showcase */}
			<section id="intro" className="bg-gradient-to-b from-white via-amber-50/30 to-white py-16 scroll-mt-28">
				<div className="container mx-auto px-4">
					{/* Gallery Grid */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{/* Product 1 - Diamond Ring */}
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/40 bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-yellow-500">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
								<img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop" alt="Luxury Diamond Ring" className="w-full h-full object-contain" />
							</div>
							<div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-300 rounded-xl"></div>
						</div>

						{/* Product 2 - Gold Necklace */}
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/40 bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-yellow-500">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
								<img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop" alt="Gold Necklace" className="w-full h-full object-contain" />
							</div>
							<div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-300 rounded-xl"></div>
						</div>

						{/* Product 3 - Gold Bracelet */}
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/40 bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-yellow-500">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
								<img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop" alt="Gold Bracelet" className="w-full h-full object-contain" />
							</div>
							<div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-300 rounded-xl"></div>
						</div>

						{/* Product 4 - Diamond Earrings */}
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/40 bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-yellow-500">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
								<img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop" alt="Diamond Earrings" className="w-full h-full object-contain" />
							</div>
							<div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-300 rounded-xl"></div>
						</div>

						{/* Product 5 - Gold Ring Collection */}
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/40 bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-yellow-500">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
								<img src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop" alt="Gold Rings" className="w-full h-full object-contain" />
							</div>
							<div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-300 rounded-xl"></div>
						</div>

						{/* Product 6 - Pearl Jewelry */}
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/40 bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-yellow-500">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
								<img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop" alt="Pearl Jewelry" className="w-full h-full object-contain" />
							</div>
							<div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-300 rounded-xl"></div>
						</div>

						{/* Product 7 - Gemstone Ring */}
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/40 bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-yellow-500">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
								<img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop" alt="Gemstone Ring" className="w-full h-full object-contain" />
							</div>
							<div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-300 rounded-xl"></div>
						</div>

						{/* Product 8 - Luxury Watch */}
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/40 bg-white shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-yellow-500">
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
								<img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop" alt="Luxury Watch" className="w-full h-full object-contain" />
							</div>
							<div className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-300 rounded-xl"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-16 bg-gradient-to-br from-white via-amber-50/40 to-white">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="bg-white rounded-2xl shadow-2xl border-2 border-yellow-400/30 p-8 md:p-12 relative overflow-hidden">
						{/* Decorative background pattern */}
						<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full blur-3xl"></div>
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-3xl"></div>

						<div className="relative z-10">
							<h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent
								[text-shadow:_1px_1px_0_#d97706] drop-shadow-sm"
							>
								{t('about.org.title')}
							</h2>

							<div className="prose prose-lg max-w-none">
								<p className="mb-6 text-gray-800 leading-relaxed text-lg">{t('about.org.p1')}</p>
								<p className="mb-6 text-gray-800 leading-relaxed text-lg">{t('about.org.p2')}</p>
								<p className="mb-0 text-gray-800 leading-relaxed text-lg">{t('about.org.p3')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section id="sectors" className="py-16 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 scroll-mt-28">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
						{/* Shine effect */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>

						<h2 className="text-4xl font-black mb-8 text-white relative z-10
							drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]
							[text-shadow:_2px_2px_0_#d97706,_3px_3px_0_#b45309]"
						>
							{t('about.mission.title')}
						</h2>
						<div className="prose prose-lg max-w-none relative z-10">
							<p className="mb-6 text-white/95 leading-relaxed text-lg font-medium drop-shadow-sm">{t('about.mission.p1')}</p>
							<p className="mb-6 text-white/95 leading-relaxed text-lg font-medium drop-shadow-sm">{t('about.mission.p2')}</p>
							<p className="mb-6 text-white/95 leading-relaxed text-lg font-medium drop-shadow-sm">{t('about.mission.p3')}</p>
							<p className="mb-0 text-white/95 leading-relaxed text-lg font-medium drop-shadow-sm">{t('about.mission.p4')}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Commission / Structure Graphic */}
			<section id="statutes" className="py-16 bg-gradient-to-b from-white via-amber-50/30 to-white scroll-mt-28">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="bg-white rounded-2xl shadow-2xl border-2 border-yellow-400/30 p-8 md:p-12">
						<h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent
							[text-shadow:_1px_1px_0_#d97706] drop-shadow-sm"
						>
							{t('about.structure.title')}
						</h2>
						<div className="prose prose-lg max-w-none">
							<p className="mb-6 text-gray-800 leading-relaxed text-lg"><strong className="text-amber-700 font-bold">{t('about.structure.p0')}</strong></p>
							<p className="mb-6 text-gray-800 leading-relaxed">{t('about.structure.p1')}</p>
							<p className="mb-8 text-gray-800 leading-relaxed">{t('about.structure.p2')}</p>
						</div>

						<div className="relative my-10">
							<div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 via-amber-200/30 to-yellow-200/30 rounded-xl blur-xl"></div>
							<img
								src="https://ext.same-assets.com/2270911947/3581092801.png"
								alt="CIBJO Structure"
								className="w-full max-w-3xl mx-auto relative z-10 rounded-lg border-4 border-yellow-400/40 shadow-xl"
							/>
						</div>

						<div className="prose prose-lg max-w-none">
							<p className="mb-6 text-gray-800 leading-relaxed">{t('about.structure.p3')}</p>
							<p className="mb-0 text-gray-800 leading-relaxed">{t('about.structure.p4')}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Administration Section */}
			<section id="admin" className="py-16 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 scroll-mt-28">
				<div className="container mx-auto px-4 max-w-4xl">
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-yellow-400/30 p-8 md:p-12">
						<h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent
							[text-shadow:_1px_1px_0_#d97706] drop-shadow-sm"
						>
							{t('about.subnav.admin')}
						</h2>
						<div className="prose prose-lg max-w-none">
							<p className="mb-0 text-gray-800 leading-relaxed text-lg">{t('about.structure.p1')}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Image Gallery (1) */}
			<section id="officers" className="py-16 bg-gradient-to-b from-white via-amber-50/30 to-white scroll-mt-28">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-8">
						<div className="group">
							<div className="relative overflow-hidden rounded-xl border-4 border-yellow-400/40 shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
								<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent z-10"></div>
								<img src="https://ext.same-assets.com/2270911947/542087785.jpeg" alt="General Assembly 2012 Vicenza" className="w-full" />
							</div>
							<p className="text-sm text-amber-900 mt-4 italic font-medium leading-relaxed">The World Jewellery Confederation's General Assembly in session at the 2012 CIBJO Congress in Vicenza, Italy.</p>
						</div>
						<div className="group">
							<div className="relative overflow-hidden rounded-xl border-4 border-yellow-400/40 shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
								<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent z-10"></div>
								<img src="https://ext.same-assets.com/2270911947/2241392739.jpeg" alt="Board of Directors 2015 Brazil" className="w-full" />
							</div>
							<p className="text-sm text-amber-900 mt-4 italic font-medium leading-relaxed">A meeting of the Board of Directors at the 2015 CIBJO Congress in Salvador da Bahia, Brazil.</p>
						</div>
						<div className="group">
							<div className="relative overflow-hidden rounded-xl border-4 border-yellow-400/40 shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
								<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent z-10"></div>
								<img src="https://ext.same-assets.com/2270911947/1526482392.jpeg" alt="Precious Metals Commission 2018 Bogota" className="w-full" />
							</div>
							<p className="text-sm text-amber-900 mt-4 italic font-medium leading-relaxed">The Precious Metals Commission deliberates at the 2018 CIBJO Congress in Bogotá, Colombia.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Additional Photo Strip (to match original richness) */}
			<section id="membership" className="py-12 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 scroll-mt-28">
				<div className="container mx-auto px-4">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/50 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-yellow-900/20 to-transparent z-10"></div>
							<img src="https://ext.same-assets.com/2270911947/2808674820.jpeg" alt="Milestone Photo 1" className="w-full h-48 object-cover" />
						</div>
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/50 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-yellow-900/20 to-transparent z-10"></div>
							<img src="https://ext.same-assets.com/2270911947/1673206517.jpeg" alt="Milestone Photo 2" className="w-full h-48 object-cover" />
						</div>
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/50 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-yellow-900/20 to-transparent z-10"></div>
							<img src="https://ext.same-assets.com/2270911947/2571820695.jpeg" alt="Milestone Photo 3" className="w-full h-48 object-cover" />
						</div>
						<div className="group relative overflow-hidden rounded-xl border-4 border-yellow-400/50 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-yellow-900/20 to-transparent z-10"></div>
							<img src="https://ext.same-assets.com/2270911947/1219860861.jpeg" alt="Milestone Photo 4" className="w-full h-48 object-cover" />
						</div>
					</div>
				</div>
			</section>

			{/* Milestones Section */}
			<section id="congresses" className="py-16 bg-gradient-to-b from-white via-amber-50/30 to-white scroll-mt-28">
				<div className="container mx-auto px-4 max-w-4xl">
					<h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent
						[text-shadow:_1px_1px_0_#d97706] drop-shadow-lg"
					>
						{t('about.milestones.title')}
					</h2>
					<div className="space-y-6">
						<div className="group bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100 p-8 rounded-xl shadow-xl border-l-8 border-yellow-600 hover:shadow-2xl hover:border-amber-500 transition-all duration-300 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-all"></div>
							<h3 className="text-3xl font-black text-yellow-800 mb-3 drop-shadow-sm">1926</h3>
							<p className="text-gray-800 leading-relaxed relative z-10">{t('about.milestones.1926')}</p>
						</div>
						<div className="group bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 p-8 rounded-xl shadow-xl border-l-8 border-amber-600 hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all"></div>
							<h3 className="text-3xl font-black text-amber-800 mb-3 drop-shadow-sm">1961</h3>
							<p className="text-gray-800 leading-relaxed relative z-10">{t('about.milestones.1961')}</p>
						</div>
						<div className="group bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100 p-8 rounded-xl shadow-xl border-l-8 border-yellow-600 hover:shadow-2xl hover:border-amber-500 transition-all duration-300 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-all"></div>
							<h3 className="text-3xl font-black text-yellow-800 mb-3 drop-shadow-sm">2006</h3>
							<p className="text-gray-800 leading-relaxed relative z-10">{t('about.milestones.2006')}</p>
						</div>
						<div className="group bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 p-8 rounded-xl shadow-xl border-l-8 border-amber-600 hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all"></div>
							<h3 className="text-3xl font-black text-amber-800 mb-3 drop-shadow-sm">2008</h3>
							<p className="text-gray-800 leading-relaxed relative z-10">{t('about.milestones.2008')}</p>
						</div>
						<div className="group bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100 p-8 rounded-xl shadow-xl border-l-8 border-yellow-600 hover:shadow-2xl hover:border-amber-500 transition-all duration-300 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-all"></div>
							<h3 className="text-3xl font-black text-yellow-800 mb-3 drop-shadow-sm">2011</h3>
							<p className="text-gray-800 leading-relaxed relative z-10">{t('about.milestones.2011')}</p>
						</div>
						<div className="group bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 p-8 rounded-xl shadow-xl border-l-8 border-amber-600 hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all"></div>
							<h3 className="text-3xl font-black text-amber-800 mb-3 drop-shadow-sm">2013</h3>
							<p className="text-gray-800 leading-relaxed relative z-10">{t('about.milestones.2013')}</p>
						</div>
						<div className="group bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100 p-8 rounded-xl shadow-xl border-l-8 border-yellow-600 hover:shadow-2xl hover:border-amber-500 transition-all duration-300 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-all"></div>
							<h3 className="text-3xl font-black text-yellow-800 mb-3 drop-shadow-sm">2015 & 2020</h3>
							<p className="text-gray-800 leading-relaxed relative z-10">{t('about.milestones.2015_2020')}</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
