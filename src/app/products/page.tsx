import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Headline from "@/components/Headline";
import Container from "@/components/Container";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Products",
  description: "Product specification and credits.",
};

type ProductRow = {
  index: string;
  title: string;
  description: string;
  role: string;
};

const rows: ProductRow[] = [
  {
    index: "01",
    title: "Site survey",
    description: "Existing conditions, access, utilities.",
    role: "Surveyor",
  },
  {
    index: "02",
    title: "Concept massing",
    description: "Volume studies and orientation options.",
    role: "Architect",
  },
  {
    index: "03",
    title: "Structure option A",
    description: "Steel frame with composite slabs.",
    role: "Engineer",
  },
  {
    index: "04",
    title: "Facade package",
    description: "Curtain wall, insulation, vapor control.",
    role: "Constructor",
  },
  {
    index: "05",
    title: "MEP coordination",
    description: "Risers, shafts, and ceiling zones.",
    role: "MEP lead",
  },
  {
    index: "06",
    title: "Interior fit-out",
    description: "Finishes, lighting intent, joinery.",
    role: "Interior architect",
  },
  {
    index: "07",
    title: "Landscape buffer",
    description: "Screening, drainage, planting palette.",
    role: "Landscape",
  },
  {
    index: "08",
    title: "Accessibility review",
    description: "Routes, door widths, signage.",
    role: "Consultant",
  },
  {
    index: "09",
    title: "Cost plan v2",
    description: "Elemental breakdown and risk allowance.",
    role: "Quantity surveyor",
  },
  {
    index: "10",
    title: "Fire strategy note",
    description: "Compartmentation and escape.",
    role: "Fire engineer",
  },
  {
    index: "11",
    title: "Acoustic brief",
    description: "Partitions, floors, services noise.",
    role: "Acoustic engineer",
  },
  {
    index: "12",
    title: "Specifications",
    description: "Performance specs for tender.",
    role: "Architect",
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <Container className={styles.productsContainer}>
          <div className={styles.mainRow}>
            <div className={styles.colAside}>
              <Breadcrumbs
                items={[
                  { label: "Главная", href: "/" },
                  { label: "Проекты" },
                ]}
              />
            </div>

            <div className={styles.colMain}>
              <Headline>Проекты</Headline>

              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.colIndex}>No</th>
                      <th className={styles.colTitle}>Название</th>
                      <th className={styles.colDesc}>Описание</th>
                      <th className={styles.colRole}>Роль</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.index}>
                        <td className={styles.colIndex}>{row.index}</td>
                        <td className={styles.colTitle}>{row.title}</td>
                        <td className={styles.colDesc}>{row.description}</td>
                        <td className={styles.colRole}>{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <Image
            src="/Lui.png"
            alt=""
            width={2390}
            height={1000}
            className={styles.productImage}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            aria-hidden
          />
          <Image
            src="/Zaton.png"
            alt=""
            width={2390}
            height={1000}
            className={styles.productImage}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            aria-hidden
          /> */}
        </Container>
      </section>
    </div>
  );
}
