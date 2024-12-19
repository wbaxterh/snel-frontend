import Image from "next/image";
import { FaTwitter, FaTiktok, FaDiscord, FaTelegram } from "react-icons/fa";

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen p-6'>
			<section className='w-full min-h-screen  flex flex-col p-8 justify-center items-center'>
				<Image
					src='/snelIconWhiteBG.png'
					alt='SNeL Memecoin Logo'
					width={200}
					height={200}
					className='mb-4'
				/>

				<h1 className='text-5xl font-bold mb-4 text-center'>Welcome to SNeL</h1>
				<p className='text-lg text-center max-w-2xl mb-8'>
					<strong>SNeL</strong> is immortal. A premium memecoin based on
					community and fairness. Built on Cardano.
				</p>
				<div className='flex space-x-4'>
					<a
						href='https://x.com/snelcoin'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/x.svg'
							alt='Twitter X'
							width={40}
							height={40}
							className='hover:scale-110 transition'
						/>
					</a>
					<a
						href='https://tiktok.com/@snel'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/tiktok.svg'
							alt='TikTok'
							width={40}
							height={40}
							className='hover:scale-110 transition'
						/>
					</a>
					<a
						href='https://discord.gg/FN4s69CW'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/discord.svg'
							alt='Discord'
							width={40}
							height={40}
							className='hover:scale-110 transition'
						/>
					</a>
					<a href='https://t.me/snel' target='_blank' rel='noopener noreferrer'>
						<Image
							src='/icons/telegram.svg'
							alt='Telegram'
							width={40}
							height={40}
							className='hover:scale-110 transition'
						/>
					</a>
				</div>
			</section>
			{/* <div className='flex p-4 font-bold underline'>
				<a
					href='https://www.snek.fun/token/067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02.534e654c
'
					target='_blank'
				>
					<h2>We've just launched on snek.fun</h2>
				</a>
			</div> */}
			<section className='w-full bg-white rounded-lg p-6 mb-8'>
				<h2 className='text-3xl font-bold m-4 text-center'>How to Buy SNeL</h2>
				<ol className='list-decimal list-inside text-lg space-y-2 max-w-3xl mx-auto'>
					<li>
						Get Cardano (ADA) on a centralized exchange like{" "}
						<strong>Coinbase</strong> or <strong>Kraken</strong>.
					</li>
					<li>
						Download a Cardano wallet like <strong>Nami</strong>,{" "}
						<strong>Vespr</strong>, or a similar wallet.
					</li>
					<li>
						Transfer your Cardano from the exchange to your wallet’s address.
					</li>
					<li>
						Visit{" "}
						<a
							href='https://www.snek.fun/token/067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02.534e654c'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 underline hover:text-blue-800'
						>
							snek.fun
						</a>{" "}
						and swap your Cardano for SNeL!
					</li>
				</ol>
			</section>
			<div className='flex'>
				<h2 className='px-2'>Token Policy ID: </h2>
				<p>067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02</p>
			</div>
			<footer className='mt-12 text-center'>
				<p>
					© {new Date().getFullYear()} SNeL. Built with ❤️ by the community.{" "}
					<br />
					<small>
						SNEK is a memecoin with no intrinsic value or expectation of
						financial return. There is no formal team or roadmap. The coin is
						for entertainment purposes only.
					</small>
				</p>
			</footer>
		</main>
	);
}
