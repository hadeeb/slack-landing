import { useReducer } from "react";

function App() {
	return (
		<>
			<Navbar />
			<SignupBanner />
			<Hero />
			<CookieBanner />
		</>
	);
}

function Navbar() {
	return (
		<nav className="mx-auto flex max-w-7xl items-center gap-x-7 px-4 py-3 md:px-7">
			<img
				src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png"
				srcSet="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png 1x, https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black@2x.png 2x"
				alt="Slack"
				className="w-24"
			/>
			<nav className="flex grow items-center gap-x-4">
				<ul className="hidden grow py-4 font-bold text-black text-sm md:flex">
					<li className="px-3 py-1">Product</li>
					<li className="px-3 py-1">
						<a href="/enterprise">Enterprise</a>
					</li>
					<li className="px-3 py-1">
						<a href="/resources">Resources</a>
					</li>
					<li className="px-3 py-1">
						<a href="/pricing">Pricing</a>
					</li>
				</ul>
				<a
					href="/sign-in"
					className="hidden px-4 py-3 font-bold text-black text-sm md:inline"
				>
					Sign In
				</a>
				<a
					href="/sales"
					className="hidden rounded border border-slack-purple px-4 py-3 font-semibold text-slack-purple text-sm uppercase md:inline"
				>
					Talk to Sales
				</a>
				<div className="w-0 grow md:hidden md:w-auto md:grow-0" />
				<a
					href="/try"
					className="rounded bg-slack-purple px-4 py-3 font-semibold text-sm text-white uppercase"
				>
					Try for Free
				</a>
			</nav>
		</nav>
	);
}

function SignupBanner() {
	const [showBanner, closeBanner] = useReducer(() => false, true);
	if (!showBanner) return null;

	return (
		<div className="mx-auto hidden max-w-7xl py-1 md:block">
			<div className="flex min-h-20 items-center rounded-full bg-slack-blue px-7 text-lg text-white">
				Slack is your digital HQ. Meet the new features keeping teams connected
				in a work-from-anywhere world.
				<a
					href="/try"
					className="mx-1 whitespace-nowrap font-semibold text-base underline"
				>
					Let's go -{">"}
				</a>
				<div className="grow" />
				<button
					aria-label="Close Banner"
					type="button"
					className="cursor-pointer"
					onClick={closeBanner}
				>
					X
				</button>
			</div>
		</div>
	);
}

function Hero() {
	return (
		<div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-4 px-4 py-4 md:flex-row md:px-7 md:py-20">
			<div className="flex flex-col gap-y-5">
				<h1 className="font-bold text-5xl">
					Slack is where the
					<br />
					future works
				</h1>
				<p>
					Transform the way you work with one place for
					<br />
					everyone and everything you need to get stuff done.
				</p>
				<div>
					<a
						href="/try"
						className="inline-block rounded bg-slack-purple px-8 py-3 font-medium text-sm text-white uppercase"
					>
						Try for Free
					</a>
				</div>
			</div>
			<video
				src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
				muted
				loop
				autoPlay
				className="max-w-full object-contain md:max-w-lg"
			/>
		</div>
	);
}

function CookieBanner() {
	// Cookie banner
	const [showBanner, closeBanner] = useReducer(() => false, true);
	if (!showBanner) return null;
	return (
		<div className="fixed right-0 bottom-0 w-full px-3 py-4 md:max-w-96">
			<div className="rounded-lg bg-white p-3 shadow-lg">
				<p className="font-medium text-black text-xs">
					This website uses cookies to enhance the user experience and to
					analyze performance and traffic on our website. We also share
					information about your use of our site with our social media,
					advertising and analytics partners.
					<a
						href="/cookies"
						className="mx-1 whitespace-nowrap text-blue-900 underline"
					>
						More info
					</a>
				</p>
				<div className="mt-3 grid gap-2">
					<button
						type="button"
						onClick={closeBanner}
						className="cursor-pointer rounded-lg bg-slack-purple p-4 text-sm text-white uppercase"
					>
						Accept All Cookies
					</button>
					<button
						type="button"
						className="cursor-pointer rounded-lg border-2 border-slack-purple bg-white p-4 text-slack-purple text-sm uppercase"
						onClick={closeBanner}
					>
						Decline
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
