import type { Plan } from '@/lib/constants';

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article className={`card${plan.featured ? ' featured' : ''}`}>
      <p className="tag">{plan.tag}</p>
      <h2>{plan.name}</h2>
      <p className="price">
        {plan.price}
        {plan.unit && <span>{plan.unit}</span>}
      </p>
      <p className="desc">{plan.desc}</p>
      <ul>
        {plan.perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
      <button>{plan.cta}</button>
    </article>
  );
}
