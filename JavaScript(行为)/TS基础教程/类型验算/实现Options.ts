interface Article {
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}
// & 交叉类型
// | 联合类型
// Omit 从 T 中排除 K
// Partial 将 T 中的所有属性设置为可选
// Pick 从 T 中选取 K
type OPtions<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type CreateArticleOptions = OPtions<Article, "author" | "date" | "readCount">;

function createArticle(options: CreateArticleOptions) {
  options.author = "admin";
}
