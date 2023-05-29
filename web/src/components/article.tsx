import classNames from "classnames";

interface IProps {
  className?: string;
}
export default function Article({ className }: IProps) {
  return (
    <article className={classNames(`prose`, className)}>
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
        Flowbite is just awesome. It contains tons of predesigned components and
        pages starting from login screen to complex dashboard. Perfect choice
        for your next SaaS application.
      </blockquote>
      <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
      </p>
      एमाले अध्यक्ष ओली भन्छन् : नेपालमा छानबिन कसरी हुन्छ, थाहा छ एमाले अध्यक्ष
      केपी शर्मा ओलीले भुटानी शरणार्थी प्रकरणमा कारकापमा पारेर आफ्नो पार्टीका
      नेताहरूको नाम लिन लगाइएको बताएका छन् । पार्टी केन्द्रीय कार्यालय च्यासलमा
      आयोजित भ्रातृ संगठनहरूको भेलालाई सम्बोधन गर्दै अध्यक्ष ओलीले &apos;नेपालमा
      छानबिन कसरी हुन्छ&apos; भन्ने थाहा भएको बताएका छन् । संग्रह सेयर मधेश
      प्रदेश सरकारबाट माओवादी बाहिरियो मधेश प्रदेश सरकारबाट माओवादी(केन्द्र)
      बाहिरिएको छ । मुख्यमन्त्री सरोजकुमार यादवले गठबन्धनमा भएको सहमतिअनुसार
      नचलेको भन्दै माओवादी(केन्द्र)ले मधेश प्रदेश सरकारबाट आफ्ना एक मन्त्री र एक
      राज्यमन्त्रीलाई मंगलबार फिर्ता बोलाएको हो ।
    </article>
  );
}
