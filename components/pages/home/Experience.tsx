import { Card, Container, Timeline } from "@/components/common";
import { experiences } from "@/utils/data/experiences";

const Experience = () => {
  return (
    <Container reverse>
      <Card title="Experiences">
        <section>
          <Timeline
            description="Here is the experiences I have had so far. I have worked with some of the
                best companies"
            data={experiences}
          />
        </section>
      </Card>
    </Container>
  );
};

export default Experience;
