import styles from "./page.module.css";
import { AlertBar } from "./components";

export default function Home() {
  return (
    <>
      <AlertBar />
      <main className={styles.main}>
        <div className={styles.fillScreen}>
          <div>
          <h1 className="text-3xl font-bold underline">Quality is what matters most</h1>
          <p>
            Neffy&apos;s Store is providing the safest and top-quality switches
            and menus, offering affordable and cheapest prices in the entire
            market.
          </p>
          <div>

          </div>
          </div>
        </div>
      </main>
    </>
  );
}