import { Card, Container } from "@/components/common";

const About = () => {
  return (
    <Container reverse>
      <Card title="Summary">
        <p>👋 Hello, My name is Pourya. I&apos;m 29 and I live in 🇮🇷</p>
        <p>
          Senior Full-Stack Developer with 12+ years of experience building enterprise-grade distributed systems using .NET, Next.js, and Flutter. I specialize in Domain-Driven Design, microservices architecture, and AI-integrated platforms for complex business domains.
        </p>

        <p>
          <strong>Recent Work:</strong> I designed a 10+ microservices platform with MassTransit, RabbitMQ, Saga orchestration, and gRPC inter-service communication. I architected a modular monolith cybersecurity platform with Azure OpenAI integration, implementing a RAG pipeline using pgvector for semantic search and AI-powered vulnerability analysis. I also developed an enterprise Flutter B2B application (50K+ LOC) with real-time SignalR integration, GPS tracking, and offline-first architecture.
        </p>

        <p>
          <strong>Technical Expertise:</strong> Domain-Driven Design (DDD) and CQRS with Event Sourcing in production environments • Microservices & Modular Monolith architectural patterns with demonstrated ability to evaluate trade-offs • AI/ML Integration (Azure OpenAI, GPT-4, text embeddings, vector search, RAG) • AI Agentic Development with Claude Code and Cursor • Full-stack (.NET 10, Next.js 16, React 19, Flutter Bloc) • Event-driven architecture (MassTransit, RabbitMQ, EventStoreDB, SignalR) • Comprehensive testing (Unit, Integration, E2E, Architecture, Mutation)
        </p>

        <p>
          <strong>Tech Stack:</strong> Backend: .NET Core/10, C#, EF Core, PostgreSQL, SQL Server, MongoDB, Redis • Frontend: React, Next.js, Vue, Nuxt, Angular, TailwindCSS • Mobile: Flutter (Bloc), Clean Architecture • Infrastructure: Docker, Kubernetes, Azure DevOps, CI/CD automation • AI Tools: Claude Code, Cursor, Azure OpenAI, LangChain • Observability: OpenTelemetry, Serilog, Grafana, Elasticsearch, Kibana
        </p>

        <p>
          <strong>Architectural Philosophy:</strong> Strong advocate for Clean Architecture, Onion Architecture, and Vertical Slice Architecture. Proficient in both microservices and modular monolith patterns, making architecture decisions based on team structure, business requirements, and technical constraints. Committed to TDD, BDD, SOLID principles, and Agile/Scrum delivery.
        </p>

        <p>
          <strong>AI & Modern Development:</strong> Expert in leveraging Claude Code and Cursor for rapid prototyping, code generation, and architectural design. Skilled in context engineering and prompt engineering for LLM-based development workflows, enabling significant productivity gains in complex refactoring and greenfield projects.
        </p>
      </Card>
    </Container>
  );
};

export default About;
