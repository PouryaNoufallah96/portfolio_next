import { Card, Container, Timeline } from "@/components/common";
import { educations } from "@/utils/data/educations";

const Education = () => {
  return (
    <Container  >
      <Card title="Educations">
        <section>
          <Timeline
            reverse
            description="Here is a rundown of my educational background thus far."
            data={educations}
          />
        </section>
      </Card>
    </Container>
  );
};

export default Education;
