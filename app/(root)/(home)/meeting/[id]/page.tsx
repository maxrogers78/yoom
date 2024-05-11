export default function MeetingPage({ params }: MeetingPageParams) {
  const { id } = params;

  return (
    <section>
      <h1>
        Meeting Room: <strong>#{id}</strong>
      </h1>
    </section>
  );
}
