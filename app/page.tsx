import Image from "next/image";
import { FaTwitter, FaTiktok, FaDiscord, FaTelegram } from "react-icons/fa";

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen p-6'>
			<Image
				src='/snelIconWhiteBG.png'
				alt='SNeL Memecoin Logo'
				width={200}
				height={200}
				className='mb-4'
			/>
			<h1 className='text-5xl font-bold mb-4 text-center'>Welcome to SNeL</h1>
			<p className='text-lg text-center max-w-2xl mb-8'>
				<strong>SNeL</strong> is immortal. A premium memecoin based on community
				and fairness. Built on Cardano.
			</p>
			<div className='flex space-x-4'>
				<a
					href='https://twitter.com/snel'
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
			<footer className='mt-12 text-center'>
				<p>
					© {new Date().getFullYear()} SNeL. Built with ❤️ by the community.
				</p>
			</footer>
		</main>
	);
}
