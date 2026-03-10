import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import type { Product } from '@/data/types';
import PageTitleBlock from '@/components/ui/PageTitleBlock';
import ControlBar from './ControlBar';
import FilterBar from './FilterBar';
import ProductGrid from './ProductGrid';
import Pagination from '@/components/ui/Pagination';
import { parseNumberParam, parseStringParam } from '@/lib/query';
import { filterProducts } from '@/lib/filter';
import { sortProducts } from '@/lib/sort';
import { paginate } from '@/lib/pagination';

export default function ListingPage({
  title,
  description,
  data,
  forcedCategory
}: {
  title: string;
  description: string;
  data: Product[];
  forcedCategory?: string;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(parseStringParam(router.query.search, ''));
  const sort = parseStringParam(router.query.sort, 'default');
  const grid = parseNumberParam(router.query.grid, 4, 2, 4);
  const page = parseNumberParam(router.query.page, 1, 1, 999);
  const category = forcedCategory ?? parseStringParam(router.query.category, '');

  const filtered = useMemo(() => sortProducts(filterProducts(data, category, search), sort), [data, category, search, sort]);
  const pager = paginate(filtered, page, 12);

  const updateQuery = (next: Record<string, string | number>) => {
    void router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, ...next }
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <main>
      <section>
        <div className="container mx-auto px-4">
          <PageTitleBlock title={title} description={description} />
          <ControlBar
            count={filtered.length}
            sort={sort}
            setSort={(value) => updateQuery({ sort: value })}
            grid={grid}
            setGrid={(value) => updateQuery({ grid: value })}
          />

          <div className="py-10">
            <div className="mb-6 lg:hidden">
              <FilterBar search={search} setSearch={setSearch} />
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
              <div className="hidden lg:block">
                <FilterBar search={search} setSearch={setSearch} />
              </div>
              <div>
                <ProductGrid products={pager.items} />
              </div>
            </div>
          </div>

          <Pagination
            page={pager.page}
            totalPages={pager.totalPages}
            buildHref={(nextPage) => `${router.pathname}?page=${nextPage}&sort=${sort}&grid=${grid}`}
          />
        </div>
      </section>
    </main>
  );
}
