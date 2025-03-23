import { useReducer } from "react";

function App() {
	return (
		<>
			<Navbar />
			<SignupBanner />
			<Hero />
		</>
	);
}

function Navbar() {
	return (
		<nav className="mx-auto flex max-w-7xl items-center gap-x-7 px-7">
			<img
				src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png"
				srcSet="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png 1x, https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black@2x.png 2x"
				alt="Slack"
				className="w-24"
			/>
			<nav className="flex grow items-center gap-x-4">
				<ul className="flex grow py-4 font-bold text-black text-sm">
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
				<a href="/sign-in" className="px-4 py-3 font-bold text-black text-sm">
					Sign In
				</a>
				<a
					href="/sales"
					className="rounded border border-slack-purple px-4 py-3 font-semibold text-slack-purple text-sm uppercase"
				>
					Talk to Sales
				</a>
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
		<div className="mx-auto max-w-7xl py-1">
			<div className="flex min-h-20 items-center rounded-full bg-slack-blue px-7 text-lg text-white">
				Slack is your digital HQ. Meet the new features keeping teams connected
				in a work-from-anywhere world.
				<a href="/try" className="mx-1 font-semibold text-base underline">
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
		<div className="mx-auto flex max-w-7xl items-center justify-between px-7 py-20">
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
				className="max-w-lg object-contain"
			/>
		</div>
	);
}

export default App;
