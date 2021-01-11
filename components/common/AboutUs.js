import React from 'react';
import Head from 'next/head'
import Logo from 'components/common/Logo'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
export const AboutUsPage = () => {
    return (
        <>
            <Head>
                <title>Belief Challenge - About Us </title>
                <meta title='Belief Challenge - About Us' />
            </Head>
            <Header />
            <div className='container pb-35 home-main bg-dark'>
                <Logo />
                <div className='row about-us-panel'>
                    {/* <div className='col-sm-12 bg-white mt-25 p-50'>
                        About Belief Challenge
        
        When was the last time you changed your mind?
        
        We always think other people are wrong.
        
        Wrong about politics.
        
        Wrong about religion.
        
        Wrong about science.
        
        Here’s a radical thought:
        
        What if we’re wrong?
        
        That’s the question that Belief Challenge encourages you to ask.
        
        Why now?
        
        Because we’ve forgotten how to talk to our neighbors.
        
        Families fight at the dinner table.
        
        Friendships end in tears.
        
        All because we no longer know how to say:
        
        “I never thought of that.”
        
        “I see your point.”
        
        And most importantly:
        
        “I want to learn more.”
        
        Our children deserve a better example than we are giving them now.
        
        Belief Challenge is the first step to improving the way we communicate with each other.
        
        Take a journey into your own mind.
        
        What are you willing to question?
        
        Because questioning core beliefs is vital to finding the truth.
        
        Not that long ago, nearly all people believed that the Earth was flat and that it was the center of the universe.
        
        Only through honest re-examination was progress made.
        
        This is a forum for people bold enough to honestly confront their fundamental beliefs.
        
        The one question that matters most is: what would it take to change your mind? If you do not have a well thought-out answer to that question, there’s a good chance your view is a lot less grounded than you think.
        
        If the unexamined life is not worth living, we believe that the unexamined belief is not worth believing. Of course, you’re welcome to change our minds about that too.
        
        All people from around the world are welcome to re-examine their beliefs with honesty and courage.
        
        Do you have what it takes to question everything?
        
        
        Who we are
        
        We are a group of concerned citizens trying to take back the power of reasoned discourse. We are philosophers, technologists, policy experts, musicians, artists and more.
        
        We have chosen to remain anonymous for a simple reason: it doesn't matter who we are. We are here to encourage people to examine ideas, not the people who believe them.
        
        Beliefs are either well supported or they are not.
        
        Too often in today's hyper-polarized world, the baby is thrown out with the bathwater. If the wrong person says something, it is automatically discounted by half the population.
        
        That is nonsense.
        
        We can do better.
        
        We must do better.
        
        Regardless of your background, gender, religion, ethnicity, accent or skin color, let us collectively examine the logic of our beliefs-- and, even, our belief in logic.
        
        This won't only help you.
        
        It will help us.
        
        It will help all of humanity.
        
        
                </div> */}
                    <div className='col-sm-12 bg-white mt-25 p-50'>
                        <h2 className='text-center'>About Belief Challenge</h2>
                        <p>When was the last time you changed your mind?</p>

                        <p>We always think other people are wrong.</p>
                        <p>Wrong about politics. Wrong about religion. Wrong about science.</p>
                        <p>Here&rsquo;s a radical thought: What if we&rsquo;re wrong?</p>
                        <p>That&rsquo;s the question that Belief Challenge encourages you to ask.</p>
                        <p>Why now? Because we&rsquo;ve forgotten how to talk to our neighbors.</p>
                        <p>Families fight at the dinner table. Friendships end in tears. Co-workers avoid each other in the office.</p>
                        <p>All because we no longer know how to say:&nbsp;</p>
                        <p>&ldquo;I never thought of that.&rdquo;&nbsp;</p>
                        <p>&ldquo;I see your point.&rdquo;</p>
                        <p>And most importantly:</p>
                        <p>&ldquo;I want to learn more.&rdquo;</p>
                        <p>The most important question we can ask ourselves &ndash; and the one that we least often ask &ndash; is: What would it take to change my mind?</p>
                        <p>This question opens the door to wisdom and understanding.</p>
                        <p>We have a choice. We can continue to close our minds and do nothing as people become more hostile to each other. Or we can come together and set an example for all humanity.</p>
                        <p>Let&rsquo;s change for the better.</p>
                        <p>Belief Challenge is the first step to improving the way we communicate.</p>
                        <p>Take a journey into your own mind. Become a Belief Challenger.</p>
                        <p>What are you willing to question?</p>
                        <p><strong>Founders</strong></p>
                        <p>We are a group of concerned residents of Planet Earth. We are philosophers, technologists, policy experts, musicians, artists, educators, and more.</p>
                        <p>Together, we aspire to take back the power of reasoned discourse and restore sanity to our everyday conversations.</p>
                        <p>We are Belief Challengers.</p>
                        <p>We have chosen to remain anonymous for a simple reason: It doesn't matter who we are. We are here to encourage people to examine ideas, not the people who believe them.&nbsp; Over time, we hope to reach every country, on every continent, in every language.</p>
                        <p>All people, regardless of age, gender, color, or creed, are welcome to explore their minds and open their hearts at Belief Challenge.</p>
                        <p><strong>Contact <br /> </strong>&nbsp;<a href="mailto:admin@beliefchallenge.com">admin@beliefchallenge.com</a></p>
                        {/* <p className='text-center font-weight-bold'>Too often in today's hyper-polarized world, the baby is thrown out with the bathwater. If the wrong person says something,
it is automatically discounted by half the population.</p>
                        <p className='text-center font-weight-bold'>That is nonsense.<br/>
We can do better.<br/>
We must do better.</p>
                        <p className='text-center'>Regardless of your background, gender, religion, ethnicity, accent or skin color, let us collectively examine the logic of
our beliefs-- and, even, our belief in logic..</p>
                        <p className='text-center font-weight-bold'>This won't only help you.<br/>
                        It will help us.<br/>
It will help all of humanity..</p> */}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
