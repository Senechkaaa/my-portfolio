import Image from 'next/image'
import Header from './components/Header'
import StackList from './components/StackList'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'

export default function Home() {
    return (
        <>
            <Wrapper>
                <Header />
                <main className="flex justify-center flex-col">
                    <section className=" mt-40 flex items-center justify-around main">
                        <div className=" flex flex-col text-info">
                            <h1 className="text-8xl mb-3 max-w-xl -ml-2 title">
                                Frontend Developer
                            </h1>
                            <p className=" max-w-xl text-slate-500 description">
                                Hello, I am Senya! Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Ut, quidem quae.
                                Officia expedita quo totam? Dignissimos
                                perferendis quae vel eveniet dolorem quia
                                deleniti totam ducimus natus, ea veniam labore!
                                Dignissimos!
                            </p>
                        </div>
                        <div>
                            <Image
                                className="rounded-3xl img_author"
                                alt="author"
                                src="/img/author.PNG"
                                width={350}
                                height={350}
                            />
                        </div>
                    </section>
                    <section className="flex items-center mt-16 justify-around section_stack ">
                        <h2 className="text-xl font-extrabold title_stack">My Stack</h2>
                        <StackList />
                    </section>
                    <About />
                    <Portfolio />
                    <Contacts />
                </main>
            </Wrapper>
            <Footer />
        </>
    )
}
