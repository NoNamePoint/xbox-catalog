import Head from 'next/head';
import Image from 'next/image';
import ActiveLink from './ActiveLink';
import ResetButton from './ResetButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Xbox Catalog</title>
      </Head>
      <main className="flex">
        <aside className="py-5 pl-5 flex-shrink-0 max-w-xs w-full">
          <h3 className="text-2xl font-bold">Collections</h3>
          <hr className="mt-5 mb-1 border-gray-400" />
          <ul className="pl-2.5">
            <li className="navbar-categories pt-5 transform transition duration-500 ease-in-out">
              <ActiveLink href="/" shallow>
                Все игры
              </ActiveLink>
            </li>
            <li className="navbar-categories pt-5 transform transition duration-500 ease-in-out">
              <ActiveLink href="/console" shallow>
                Для консолей
              </ActiveLink>
            </li>
            <li className="navbar-categories pt-5 transform transition duration-500 ease-in-out">
              <ActiveLink href="/new-releases" shallow>
                Новинки
              </ActiveLink>
            </li>
            <li className="navbar-categories pt-5 transform transition duration-500 ease-in-out">
              <ActiveLink href="/most-popular" shallow>
                Самые популярные
              </ActiveLink>
            </li>
          </ul>
          <h3 className="pt-5 text-2xl font-bold">Filters</h3>
          <form>
            <ResetButton className="font-extrabold uppercase text-green-700 mt-5">
              Clear Filters
            </ResetButton>
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
        <section className="mt-7 ml-20">
          <div className="text-sm">Показано результатов: 1-50 из 2304</div>
          <ResetButton className="font-extrabold uppercase text-green-700 mt-2">
            Clear Filters
          </ResetButton>
          <div className="flex gap-10 flex-wrap">
            {[...new Array(6)].map((_, index) => (
              <article
                className="product w-[200px] mt-3 relative"
                key={index + 1}
              >
                <div className="product-image transform transition duration-500 ease-in-out">
                  <Image
                    src="https://store-images.s-microsoft.com/image/apps.33719.71220804959101191.bad88979-60b4-40b4-af6d-182d4534c987.ecf3220f-0497-4cf1-9cee-d46d9d86ecc3"
                    width={200}
                    height={300}
                    alt=""
                  />
                </div>
                <a
                  className="game-link hover:underline font-medium text-xl break-words"
                  href="#"
                >
                  Far Cry®3 Classic Editional
                </a>
                <span className="block text-lg">29,99&nbsp;$</span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
