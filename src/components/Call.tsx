import Container from "./Container";
import Headline from "./Headline";

export default function Call() {
    return (
        <section>
            <Container>
                <div>
                    <Headline>
                        Сейчас - лучший момент, чтобы начать диалог
                    </Headline>
                    <p>
                        Я буду рад обсудить ваш проект. Напишите мне или позвоните — я помогу разобраться в деталях и предложу варианты решения вашей задачи.
                    </p>
                </div>
            </Container>
        </section>
    );
}