import { useRouter } from 'lib/router';
import Link from 'next/link';

export default function ActiveLink({ children, ...props }) {
	const { pathname } = useRouter();
	const active = pathname === props.href;
	return (
		<Link {...props}>
			<a
				className={`font-semibold ${
					active && 'px-3 text-green-600'
				}`}
			>
				{children}
			</a>
		</Link>
	);
}
