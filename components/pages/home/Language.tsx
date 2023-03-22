import { Card, Container } from "@/components/common";

const Language = () => {
  return (
    <Container reverse>
      <Card title="Languages">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="fancy-card p-10">
                <p className="text-lg font-bold">Persian</p>
                <p className="text-sm">Native or bilingual proficiency</p>
            </div>
            <div className="fancy-card p-10 ">
            <p className="text-lg font-bold">English</p>
                <p className="text-sm">Professional working proficiency</p>
            </div>
        </section>
      </Card>
    </Container>
  );
};

export default Language;
