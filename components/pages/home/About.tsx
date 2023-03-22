import { Card, Container } from "@/components/common";

const About = () => {
  return (
    <Container reverse>
      <Card title="Summary">
        <p>👋 Hello, My name is Pourya. I&apos;m 26 and i live in 🇮🇷</p>
        <p>
          As a Senior Full-Stack Web | Mobile Developer with over 8 years of
          experience, I bring a deep knowledge and understanding of software
          development to every project I work on. My skills include proficiency
          in .NET Core API for backend development and expertise in SQL Server
          and MongoDB for database management. I&apos;m also highly skilled in
          Flutter for mobile application development and have extensive
          experience using React, NextJS, Vue, NuxtJS, and Angular for web
          application development.
        </p>

        <p>
          Throughout my career, I have demonstrated a solid ability to create
          high-quality software that meets business needs and delivers value to
          end users. I am highly adaptable and able to work well both
          independently and as part of a team, and I am always looking for new
          challenges and opportunities to learn and grow as a developer.
        </p>

        <p>
          Whether working on a mobile app, web application, or backend system, I
          am committed to delivering software that is efficient, reliable, and
          scalable. I take pride in my work and am passionate about creating
          software that makes a real difference in people&apos;s lives.
        </p>

        <p>
          During my experience as a senior full-stack developer in a company,
          I&apos;m familiar with microservices architecture. I have used tools
          such as Masstransit, RabbitMQ, and gRPC for communication between
          services. Additionally, I use clean and onion architecture for each
          service with a DDD and CQRS approach using mediator as well as EFCore,
          Dapper, Fluent API, and Fluent Validation.
        </p>

        <p>
          For mobile application development, I use Flutter with bloc state
          management and clean architecture and rely on Getit for dependency
          injection. For web application development, I am experienced in using
          Vue, Nuxt, React, Next, and Angular, with expertise in Vuex and Pinia
          state management for Vue, and Redux, Redux Toolkit, RTKQuery, Context
          API, React hooks for react and RxJS in Angular. I am also familiar
          with modular programming and micro frontend architecture using Webpack
          module federation. I also have good experience using TailwindCSS and
          Bootstrap for UI frameworks.
        </p>

      </Card>
    </Container>
  );
};

export default About;
