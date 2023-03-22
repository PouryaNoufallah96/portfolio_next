import { Card, Container, Timeline } from "@/components/common";
import { certificates } from "@/utils/data/certificates";

const Certificate = () => {
  return (
    <Container reverse>
      <Card title="Certificates">
        <section>
          <Timeline
            description="Here are some certificates that I have granted thus far."
            data={certificates}
          />
        </section>
      </Card>
    </Container>
  );
};

export default Certificate;
