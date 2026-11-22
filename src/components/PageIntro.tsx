export default function PageIntro({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
        {intro}
      </p>
    </div>
  );
}
