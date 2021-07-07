import Head from 'next/head';
import Link from 'next/link';
import ActiveLink from './ActiveLink';

export default function Home() {
  return (
    <>
      <Head>
        <title>Xbox Catalog</title>
      </Head>
      <main>
        <aside className="p-5 flex-shrink-0 max-w-xs">
          <h3 className="text-2xl font-bold">Collections</h3>
          <hr className="mt-5 mb-1 border-gray-400" />
          <ul className="pl-2.5">
            <li className="pt-5 hover:px-3">
              <ActiveLink href="/" shallow>
                Все игры
              </ActiveLink>
            </li>
            <li className="pt-5 hover:px-3">
              <ActiveLink href="/console" shallow>
                Для консолей
              </ActiveLink>
            </li>
            <li className="pt-5 hover:px-3">
              <ActiveLink href="/new-releases" shallow>
                Новинки
              </ActiveLink>
            </li>
            <li className="pt-5 hover:px-3">
              <ActiveLink href="/most-popular" shallow>
                Самые популярные
              </ActiveLink>
            </li>
          </ul>
          <h3 className="pt-5 text-2xl font-bold">Filters</h3>

          <form>
            <button
              type="reset"
              className="font-extrabold uppercase text-green-600 mt-5"
            >
              Clear All
            </button>
            <hr className="mt-5 border-gray-400" />
            <details className="cursor-pointer relative">
              <summary className="hover:bg-gray-300 p-5 pl-2.5 mt-2 hover:shadow">
                Availiable on
              </summary>
              <ul>
                <li className="hover:bg-gray-200 mt-2 ">
                  <input
                    id="xbox-series"
                    type="radio"
                    name="radio"
                    className="active-radio absolute invisible h-0 w-0"
                  ></input>
                  <label
                    className="active-label hover:cursor-pointer block w-auto h-auto p-2"
                    htmlFor="xbox-series"
                  >
                    Xbox Series X|S
                  </label>
                </li>
                <li className="hover:bg-gray-200 mt-2">
                  <input
                    id="xbox-one"
                    type="radio"
                    name="radio"
                    className="active-radio absolute invisible h-0 w-0"
                  ></input>
                  <label
                    className="active-label hover:cursor-pointer block w-auto h-auto p-2"
                    htmlFor="xbox-one"
                  >
                    Xbox One
                  </label>
                </li>
              </ul>
            </details>
          </form>
        </aside>
        <section>
          <div></div>
        </section>
      </main>
    </>
  );
}
