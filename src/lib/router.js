import NextRouter, { useRouter as useNextRouter } from 'next/router';

export function useRouter() {
	const router = useNextRouter();
	const [pathname, queryString = ''] = router.asPath.split('?'); //получаем путь и query параметры
	const searchParams = new URLSearchParams(queryString); //создаем объект для работы с query параметрами запроса

	const params = { ...router.query }; //получаем параметры запроса в виде {paramName: paramValue}
	const query = {};

	searchParams.forEach((value, key) => {
		if (params[key]) {
			delete params[key];
		}
		if (Array.isArray(query[key])) {
			query[key].push(key);
			return;
		}
		if (typeof query[key] === 'string') {
			query[key] = [query[key], value];
			return;
		}
		query[key] = value;
	});

	return Object.assign({}, router, { pathname, queryString, query, params });
}

function push(url, options) {
	return NextRouter.push(url, null, options);
}

function replace(url, options) {
	return NextRouter.replace(url, null, options);
}

const Router = {
	...NextRouter,
	push,
	replace,
};

export default Router;
