import Flex from 'quarks/Flex';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

export const audioData = [
  {
    id: 'nasa',
    title: 'NASA: First All Female Space Walk',
    subhead: 'Poor Audio Quality, Background Noise, Multiple Speakers, Multiple Genders, Cross-Talk, Lengthy Audio',
    url: 'https://www.datocms-assets.com/96965/1682518529-nasa-exp61_eva.m4a',
    audioLength: '43 min 19 sec',
    difficulty: '9 out of 10',
    description:
      'Why? It’s much lengthier than your average “Hey Google,” conversation. It’s also got multiple speakers, genders, and the audio quality is not the clearest because, well…it’s partially in outer space. 🚀',
    note: 'audio and text clipped here for site performance. Analysis data calculated on full length audio against ground truth transcript.',
    google: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] …and Jessica <Text className="text-deletion">and</Text> Christina, we are so proud of you.
            You’re <Text className="text-insertion">going to</Text> do great today. We’ll be waiting for you here in a
            couple hours when you get home. I’m <Text className="text-insertion">going to</Text> hand you over to
            Stephanie now. Have a great great EVA.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:]{' '}
            <Text className="text-deletion">
              Drew, thank you so much. And our pleasure working with you this morning, and what can I get that [unsure]
              hatch open and I can report.It’s open and stowed.
            </Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] <Text className="text-deletion">Thank you, Drew.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Thank you so much.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 4:] [unsure], on your DCMs, take your power switches to bat. Stagger switch{' '}
            <Text className="text-insertion">throws</Text> and expect <Text className="text-insertion">a</Text> warning
            tone. <Text className="text-insertion">own</Text>Final steps{' '}
            <Text className="text-deletion">for the beginning spacewalk.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">before they begin to spacewalk</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 4:] Tracy, how important is this… the the guiding it through…{' '}
            <Text className="text-insertion">is sounds</Text> like {'<'} <Text className="text-insertion">it</Text>{' '}
            seems like a lot to remember on your own.
          </Paragraph>
          <Paragraph>[SPEAKER 5:] Absolutely.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Take power EV one EV two. Two switches to off, o f f.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 5:] <Text className="text-deletion">Yeah.</Text> Christina and Jessica have enough work with their
            hands and feet and their brain outside that it really helps to have someone like Stephanie.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Two power both off.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 4:] DCMs. Disconnect your <Text className="text-insertion">se use</Text> from your DCMs and stow
            the <Text className="text-insertion">se use</Text> in the pouch.
          </Paragraph>
          <Paragraph>
            [SPEAKER 6:] <Text className="text-deletion">Coming to </Text>
            <Text className="text-insertion">ouch</Text>.
          </Paragraph>
          <Paragraph>[SPEAKER 5:] So not only does Stephanie…</Paragraph>
          <Paragraph>
            [SPEAKER 3:] Thirty eight AM central time. A little ahead of schedule, about twelve minutes, but that gets
            us started on today’s historic <Text className="text-insertion">space walk.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 4:] <Text className="text-insertion">an</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] <Text className="text-insertion">injury</Text> Morgan{' '}
            <Text className="text-insertion">they’re</Text> wishing the crew luck.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] [unsure] <Text className="text-deletion">in pouch and DCM cover close.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] <Text className="text-deletion">Copy. EV two.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Pouch?</Text> [unsure]{' '}
            <Text className="text-deletion">cover closed.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] <Text className="text-deletion">Copy for EV one.</Text>
          </Paragraph>
        </Flex>
      ),
      speed: '5 min 39.84 sec',
      wer: '30.15%',
      accuracy: '69.85%',
    },
    deepgram: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] …and Jessica <Text className="text-deletion">and</Text> Christina, we are so proud of you.{' '}
            <Text className="text-insertion">I’m</Text> gonna do great today. We’ll be waiting for you here in a couple{' '}
            <Text className="text-insertion">of</Text> hours when you get home. I’m gonna hand you over to Stephanie
            now. Have a great great EVA.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Drew, thank you so much. <Text className="text-deletion">And</Text> our pleasure working with
            you this morning, and <Text className="text-insertion">I’m working on getting my EV hat</Text> open and I
            can report. <Text className="text-insertion">Is</Text> open and stowed.
          </Paragraph>
          <Paragraph>[SPEAKER 3:] Thank you, Drew.</Paragraph>
          <Paragraph>[SPEAKER 2:] Thank you so much.</Paragraph>
          <Paragraph>
            [SPEAKER 4:] [unsure], <Text className="text-insertion">pickup by</Text> your{' '}
            <Text className="text-insertion">DCMs</Text>, take your power switches to bat. Stagger switch{' '}
            <Text className="text-insertion">throws</Text> and expect a warning tone. Final steps{' '}
            <Text className="text-insertion">before they begin the space launch.</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Copy. Check. Display switch functional.</Paragraph>
          <Paragraph>
            [SPEAKER 4:] Tracy, how important is this… the the guiding it through…{' '}
            <Text className="text-insertion">I’m thinking if there is sounds</Text> like a lot to remember on your own.
          </Paragraph>
          <Paragraph>[SPEAKER 5:] Absolutely.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Take power <Text className="text-insertion">e b</Text> one{' '}
            <Text className="text-insertion">e b</Text> two <Text className="text-insertion">to switch it</Text> to off,
            o f f.
          </Paragraph>
          <Paragraph>
            [SPEAKER 5:] <Text className="text-insertion">And.</Text> Christina and Jessica have enough work with their
            hands and feet and their brain outside that it really helps to have someone like Stephanie.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">New</Text> power <Text className="text-insertion">broke</Text>{' '}
            off.
          </Paragraph>
          <Paragraph>
            [SPEAKER 4:] <Text className="text-insertion">DCM.</Text> Disconnect your SCUs from your DCMs and stow the
            SCUs in the pouch.
          </Paragraph>
          <Paragraph>
            [SPEAKER 6:] <Text className="text-deletion">Coming to interrupt.</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 5:] So not only does Stephanie…</Paragraph>
          <Paragraph>
            [SPEAKER 3:] Thirty eight AM central time. A little ahead of schedule, about twelve minutes, but that gets
            us started on today’s historic spacewalk.
          </Paragraph>
          <Paragraph>
            [SPEAKER 4:] <Text className="text-insertion">an</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] <Text className="text-insertion">Andrey</Text> Morgan there{' '}
            <Text className="text-insertion">he’s been</Text> wishing the crew luck.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] [unsure] <Text className="text-insertion">He’s being made</Text> in pouch and DCM cover{' '}
            <Text className="text-insertion">close.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] Copy. <Text className="text-insertion">You need to accounts</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">current credit</Text> [unsure] closed.
          </Paragraph>
          <Paragraph>[SPEAKER 3:] Copy for EV one.</Paragraph>
        </Flex>
      ),
      speed: '0 min 14.06 sec',
      wer: '17.68%',
      accuracy: '82.32%',
    },
    amazon: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] …and Jessica <Text className="text-deletion">and</Text> Christina, we are so proud of you.
            You’re gonna do great today. We’ll be waiting for you here in a couple{' '}
            <Text className="text-insertion">of</Text> hours when you get home. I’m{' '}
            <Text className="text-insertion">going to</Text> hand you over to Stephanie now. Have a great great{' '}
            <Text className="text-insertion">to.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">do,</Text> thank you so much. And our pleasure working with
            you this morning, and <Text className="text-insertion">I’m working on getting an easy</Text> hatch open and
            I can report. <Text className="text-deletion">open and</Text> <Text className="text-insertion">opened</Text>
            .
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] <Text className="text-insertion">Instead the future</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Thank you so much.</Paragraph>
          <Paragraph>
            [SPEAKER 4:] [unsure], <Text className="text-insertion">Tika</Text> on your{' '}
            <Text className="text-insertion">DCMs</Text>, take your power switches{' '}
            <Text className="text-insertion">to</Text> bat. Stagger switch <Text className="text-insertion">first</Text>{' '}
            and expect <Text className="text-insertion">the</Text> warning tone. Final steps{' '}
            <Text className="text-deletion">before they begin</Text> spacewalk.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Copy. Check. Display switch functional.</Paragraph>
          <Paragraph>
            [SPEAKER 4:] Tracy, how important is this… the the guiding it{' '}
            <Text className="text-deletion">through… seems like</Text> seems like a lot to remember on your own.
          </Paragraph>
          <Paragraph>[SPEAKER 5:] Absolutely.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Take power <Text className="text-deletion">eighty one eighty</Text> two. Two switches to off,{' '}
            <Text className="text-deletion">o </Text> <Text className="text-insertion">so let</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 5:] <Text className="text-insertion">Yeah.</Text> Christina and Jessica have enough work with their
            hands and feet and their brain outside that it really helps to have someone like Stephanie.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Two power both</Text>{' '}
            <Text className="text-insertion">oh</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 4:] <Text className="text-insertion">DCM.</Text> Disconnect your{' '}
            <Text className="text-insertion">see us</Text> from your DCMs and stow the{' '}
            <Text className="text-insertion">s c u s</Text> in the pouch.
          </Paragraph>
          <Paragraph>
            [SPEAKER 6:] <Text className="text-deletion">Coming to interrupt.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 5:] So not only does <Text className="text-insertion">detonate...</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] Thirty eight AM central time. A little ahead of schedule, about twelve minutes, but that gets
            us started on today’s historic spacewalk.
          </Paragraph>
          <Paragraph>[SPEAKER 4:] Yep.</Paragraph>
          <Paragraph>[SPEAKER 3:] Andrew Morgan there wishing the crew luck.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] [unsure] <Text className="text-deletion">in</Text> pouch and{' '}
            <Text className="text-insertion">dpm</Text> cover close.
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] Copy. <Text className="text-deletion">me too</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Past</Text> [unsure]{' '}
            <Text className="text-insertion">and critical</Text>.
          </Paragraph>
          <Paragraph>
            [SPEAKER 3:] Copy for <Text className="text-insertion">everyone</Text>
          </Paragraph>
        </Flex>
      ),
      speed: '5 min 5.73 sec',
      wer: '21.99%',
      accuracy: '78.01%',
    },
  },
  {
    id: 'podcast',
    title: 'Podcast: Deep Learning’s Effect on Science',
    subhead: 'Multiple Speakers, Cross-Talk, Jargon, Lengthy Audio',
    url: 'https://www.datocms-assets.com/96965/1687800112-how-is-machine-learning-and-deep-learning-affecting-science-ai-show.mp3',
    audioLength: '32 min 26 sec',
    difficulty: '8 out of 10',
    description:
      'Why? It’s much lengthier than your average “Hey Google,” conversation. Also, not sure if you’ve met Scott and Susan, but let’s just say there’s a lot of fast-paced, cross-talking, jargon-flying happening on this podcast. And Deepgram still knocks it out at over 90%. 💥',
    note: 'audio and text clipped here for site performance. Analysis data calculated on full length audio against ground truth transcript.',
    google: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:]I’m in. <Text className="text-insertion">yeah, I mean</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Welcome to the AI Show. I’m Scott Stephenson, co founder of{' '}
            <Text className="text-insertion">deep g</Text> . With me is Jeff Ward aka Susan. He’s a navy pilot,
            acclaimed dad joke <Text className="text-insertion">right</Text> … we’ve never had you give a dad joke. We
            need to do that. <Text className="text-insertion">claim</Text> dad joke{' '}
            <Text className="text-insertion">right</Text> .
          </Paragraph>
          <Paragraph>[SPEAKER 1:] …yeah. Well, ok. Knock knock.</Paragraph>
          <Paragraph>[SPEAKER 2:] Who’s there?</Paragraph>
          <Paragraph>[SPEAKER 1:] Spell.</Paragraph>
          <Paragraph>[SPEAKER 2:] Spell who?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">who</Text> who <Text className="text-insertion">who</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 5:] Absolutely.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Oh, good one <Text className="text-insertion">morning handsome</Text>. That’s a that’s a{' '}
            <Text className="text-insertion">real</Text> good one. He’s also an AI scientist at{' '}
            <Text className="text-insertion">deep g.</Text> . On the AI Show, we talk about all things AI. What is it?
            What can you do with it? How does it affect you? Where is it going? We’re live and ready to answer your
            questions. Comment on YouTube and Twitch or tweet at <Text className="text-insertion">deep g</Text> AI to
            join in. Today, we’re asking the question, <Text className="text-insertion">are</Text> big question, how is
            machine learning, or deep learning, affecting science?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Actually, I’m asking <Text className="text-insertion">a silly</Text> question of you.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Good. I’m ready to answer. What’s the question?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] For those that do not know, Scott here has a little bit of a science background —
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Little bit.</Paragraph>
          <Paragraph>[SPEAKER 1:] — and a little bit of machine learning in science background.</Paragraph>
          <Paragraph>[SPEAKER 2:] That’s true. Yeah.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] So so Scott, can you at least give us a… just give us{' '}
            <Text className="text-deletion">the</Text> the the ten thousand foot overview{' '}
            <Text className="text-deletion">of</Text> of a little bit of what you’ve done?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Ten</Text> ten thousand foot overview is I have a PhD in
            particle physics, and I was…
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Doctor.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">yeah</Text> . So doctor Scott. But, I was searching for dark
            matter deep underground in a government controlled region of China. Basically, a James Bond{' '}
            <Text className="text-insertion">layer</Text> .
          </Paragraph>
          <Paragraph>[SPEAKER 1:] I like it.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yep. We had to design the experiment and build the experiment, operate the experiment, take
            data, analyze the data, write a paper, you know, so this is what you do CUT HERE ON AUDIO ON SITE
          </Paragraph>
          <Paragraph>And experimental particle physics. And we did that searching for dark matter —</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Mhmm.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] — and we did it with lots of computers, servers, CPUs, things like that. Lots of copper,
            plastic, liquid xenon, cryogenic stuff. And the CPUs were used to do data analysis, and we were using like
            boosted decision trees and neural networks and other standard, like, statistics based cuts in order to
            figure out was it a dark matter particle or not.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] So tons of <Text className="text-insertion">sigil</Text> … signal noise search basically.
            Right?
          </Paragraph>
        </Flex>
      ),
      speed: '7 min 18.85 sec',
      wer: '13.46%',
      accuracy: '86.54%',
    },
    deepgram: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:]I’m in. <Text className="text-insertion">How that happened?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Welcome to the AI Show. I’m Scott Stephenson, co founder of Deepgram. With me is Jeff Ward aka
            Susan. He’s a navy pilot, acclaimed dad joke <Text className="text-insertion">writer</Text> … we’ve never
            had you give a dad joke. I need to do that. <Text className="text-insertion">Acclaimed</Text> dad joke
            writer.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] …yeah. <Text className="text-insertion">Whoa</Text>, ok. Knock knock.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Who’s there?</Paragraph>
          <Paragraph>[SPEAKER 1:] Spell.</Paragraph>
          <Paragraph>[SPEAKER 2:] Spell who?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">who who who</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Oh, good one. that’s <Text className="text-insertion">Tensor</Text> really good one. He’s also
            an AI scientist at Deepgram. On the AI Show, we talk about all things AI. What is it? What can you do with
            it? How does it affect you? Where is it going? We’re live and ready to answer your questions. Comment on
            YouTube and Twitch or tweet at Deepgram AI to join in. Today, we’re asking the question, our big question,
            how is machine learning, or deep learning, affecting science?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Actually, I’m asking <Text className="text-insertion">the</Text> question of you.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Good. I’m ready to answer. What’s the question?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] For those that do not know, Scott here has a little bit of a science{' '}
            <Text className="text-insertion">back around</Text> —
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Little bit.</Paragraph>
          <Paragraph>[SPEAKER 1:] — and a little bit of machine learning in science background.</Paragraph>
          <Paragraph>[SPEAKER 2:] That’s true. Yeah.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] So so Scott, can you at least give us a… just give us the the{' '}
            <Text className="text-insertion">that</Text> ten thousand foot overview of of a little bit of what you’ve
            done?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Ten ten thousand foot overview is I’ have a PhD in particle physics, and I was…
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Doctor.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yes. So doctor Scott. But, I was searching for dark matter deep underground in a government
            controlled region of China. Basically, a James Bond lair.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] I like it.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yep. We had to design the experiment and build the experiment, operate the experiment, take
            data, analyze the data, write a paper, you know, so this is what you do CUT HERE ON AUDIO ON SITE
          </Paragraph>
          <Paragraph>And experimental particle physics. And we did that searching for dark matter —</Paragraph>
          <Paragraph>[SPEAKER 1:] Mhmm.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] — and we did it with lots of computers, servers, CPUs, things like that. Lots{' '}
            <Text className="text-deletion">of</Text> copper, plastic, liquid xenon, cryogenic stuff. And the CPUs were
            used to do data analysis, and we were using like boosted decision trees and neural networks and other
            standard, like, statistics based cuts in order to figure out was it a dark matter particle or not.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] So tons of seagull… signal noise search basically. Right?</Paragraph>
        </Flex>
      ),
      speed: '0 min 13.83 sec',
      wer: '8.19%',
      accuracy: '91.81%',
    },
    amazon: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:]<Text className="text-deletion">I’m in. How that happened?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Welcome to the AI Show. I’m Scott Stephenson, co founder of{' '}
            <Text className="text-insertion">deep graham</Text> . With me is Jeff Ward{' '}
            <Text className="text-insertion">ak</Text> Susan. He’s a navy pilot, acclaimed dad joke{' '}
            <Text className="text-insertion">right</Text> … we’ve never had you give a dad joke. We need to do that.{' '}
            <Text className="text-insertion">claimed</Text> dad joke writer.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] …yeah. <Text className="text-insertion">Right</Text>, ok. Knock knock.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Who’s there?</Paragraph>
          <Paragraph>[SPEAKER 1:] Spell.</Paragraph>
          <Paragraph>[SPEAKER 2:] Spell who?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">w h zero.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Oh , good one. That’s a that’s a <Text className="text-insertion">real</Text> good one. He’s
            also an AI <Text className="text-insertion">scientists</Text> at{' '}
            <Text className="text-insertion">deep graham</Text> . On the AI Show, we talk about all things AI. What is
            it? What can you do with it? How does it affect you? Where is it going?{' '}
            <Text className="text-insertion">we’re</Text> live and ready to answer your questions.{' '}
            <Text className="text-insertion">Comments</Text> on YouTube and Twitch or tweet at{' '}
            <Text className="text-insertion">deep graham</Text> AI to join in. Today, we’re asking the question,{' '}
            <Text className="text-insertion">are</Text> big question, how is machine learning, or deep learning,
            affecting science?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Actually, I’m asking <Text className="text-insertion">the</Text> question of you.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Good. I’m ready to answer. What’s the question?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] For those that do not know, Scott here has a little bit of a science background —
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Little bit.</Paragraph>
          <Paragraph>[SPEAKER 1:] — and a little bit of machine learning in science background.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] That’s true. <Text className="text-deletion">Yeah.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] So so Scott, can you at least give us a… just give us{' '}
            <Text className="text-deletion">that the</Text> the ten thousand foot overview of of a little bit of what
            you’ve done?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Ten</Text> ten thousand foot overview is I’ have a PhD in
            particle physics, and I was…
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">like.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yes. So doctor Scott. But, I was searching for dark matter deep underground in a government
            controlled region of China. Basically, a James Bond <Text className="text-insertion">lair</Text>.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] I like it.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yep. We had to design the experiment and build the experiment, operate the experiment, take
            data, <Text className="text-insertion">analyzed</Text> the data, write a paper, you know, so this is what
            you do CUT HERE ON AUDIO ON SITE
          </Paragraph>
          <Paragraph>And experimental particle physics. And we did that searching for dark matter —</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Mhmm.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] — and we did it with lots of computers, <Text className="text-insertion">servers</Text>, CPUs,
            things like that. Lots of copper, plastic, liquid xenon, cryogenic stuff. And the CPUs were used to do data
            analysis, and we were using like boosted decision trees and neural networks and other standard, like,
            statistics based cuts in order to figure out was it a dark matter particle or not.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] So tons of <Text className="text-insertion">signal</Text>… signal noise search basically.
            Right?
          </Paragraph>
        </Flex>
      ),
      speed: '9 min 26.38 sec',
      wer: '12.35% ',
      accuracy: '87.65%',
    },
  },
  {
    id: 'call-center',
    title: 'Call Center: Upgrade Service',
    subhead: 'Multiple Speakers, Multiple Genders, Lengthy Audio',
    url: 'https://www.datocms-assets.com/96965/1687800186-upgrading-phone-plan.mp3',
    audioLength: '8 min 15 sec',
    difficulty: '7 out of 10',
    description:
      'Why? It’s much lengthier than your average “Hey Google,” conversation. Plus, most phone calls don’t take place in pristine, controlled audio environments. There’s multiple speakers, genders, etc….and Deepgram still rocked it at over 90% accuracy. 💥',
    note: 'audio and text clipped here for site performance. Analysis data calculated on full length audio against ground truth transcript.',
    google: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] Hello, and thank you for calling <Text className="text-insertion">from your</Text> phone
            service. This call may be recorded for quality and training purposes. My name is Beth, and I’ll be assisting
            you. How are you today?
          </Paragraph>
          <Paragraph>[SPEAKER 2:] I’m pretty good. Thanks. How are you?</Paragraph>
          <Paragraph>[SPEAKER 1:] I’m doing well. Thank you. May I have your name?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yeah. Sure. My name’s is Tom <Text className="text-insertion">idol</Text>.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Can you spell that last name for me?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yeah. Yeah. <Text className="text-insertion">Yeah. Ideally</Text>.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Ok. <Text className="text-insertion">ellie</Text> at the end. I was picturing it{' '}
            <Text className="text-insertion">idle</Text>. Like American Idol, i d o l.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. That that happens a lot. It’s not really a common name.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] Ok. Mr Idle, how can I help you this <Text className="text-insertion">stay?</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. I need some information on upgrading my service plan.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] Sure. I can absolutely help you with that today. Can you tell me what plan you have currently?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] I think it’s a silver plan. Let me get my glasses so I can read this. Yeah. Yeah. It’s the
            silver plan.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Ok. Alright. Silver plan. And how many people do you have on your plan right now?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Three. I’ve got my brother Billy, my mom, <Text className="text-insertion">cat</Text>, and I
            guess I <Text className="text-insertion">can’t do</Text> . So, yeah, that’s three.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">Weight</Text>. And how can I help you with your plan today,
            sir?
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Oh, you can call me Tom. There’s no need for the sir.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] I’m sorry, <Text className="text-insertion">Thomas</Text>. It’s just an old habit. How can I
            help you with your plan?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Well, <Text className="text-insertion">I’m a</Text> plan right now, I can only have three
            people on it, and I’m wanting to add more. So I’m wondering if I can switch my plan up, or upgrade it
            somehow.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] How many more people are you wanting to add to your plan?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Well, here’s the thing, I need to add three more people so far. I wanted to add my friend
            Margaret, my daughter, <Text className="text-insertion">and I</Text> , and my son, Todd.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Alright. We do have a few options that support six users, one is our gold, the other is our
            platinum plan.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Ok. So how much are those <Text className="text-insertion">are going to</Text> cost me?
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Well, the gold plan is</Paragraph>
        </Flex>
      ),
      speed: '1 min 50.23 sec',
      wer: '15.30% ',
      accuracy: '84.70%',
    },
    deepgram: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] Hello, and thank you for calling premier phone service. This call may be recorded for quality
            and training purposes. My name is Beth, and I’ll be assisting you. How are you today?
          </Paragraph>
          <Paragraph>[SPEAKER 2:] I’m pretty good. Thanks. How are you?</Paragraph>
          <Paragraph>[SPEAKER 1:] I’m doing well. Thank you. May I have your name?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yeah. Sure. My name’s is Tom <Text className="text-insertion">idol</Text>.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Can you spell that last name for me?</Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. Yeah. i d l e.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] Ok. l e at the end. I was picturing it <Text className="text-insertion">idle</Text> . Like
            American Idol, i d o l.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. That that happens a lot. It’s not really a common name.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] Ok. Mister <Text className="text-insertion">Idol</Text>, how can I help you{' '}
            <Text className="text-insertion">today?</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. I need some information on upgrading my service plan.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] Sure. I can absolutely help you with that today. Can you tell me what plan you have currently?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] I think it’s a silver plan. Let me get my glasses so I can read this. Yeah. Yeah. It’s the
            silver plan.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Ok. Alright. Silver plan. And how many people do you have on your plan right now?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Three. I’ve got my brother Billy, my mom, <Text className="text-insertion">Cat</Text>, and I
            guess I count too. So, yeah, that’s three.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Great. And how can I help you with your plan today, sir?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Oh, you can call me Tom. There’s no <Text className="text-insertion">date</Text> for{' '}
            <Text className="text-insertion">this</Text> sir.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] I’m sorry, Tom. It’s just an old habit. How can I help you with your plan?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Well, on my plan right now, I can only have three people on it, and I’m wanting to add more. So
            I’m wondering if I can switch my plan up, or upgrade it somehow.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] How many more people are you wanting to add to your plan?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Well, here’s the thing, I need to add three more people so far. I wanted to add my friend
            Margaret, my daughter, Anna, and my son, Todd.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Alright. We do have a few options that support six users, one is our gold, the other is our
            platinum plan.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Ok. So how much are those gonna cost me?</Paragraph>
          <Paragraph>[SPEAKER 1:] Well, the gold plan is</Paragraph>
        </Flex>
      ),
      speed: '0 min 8.98 sec ',
      wer: '5.70%',
      accuracy: '94.30%',
    },
    amazon: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] Hello, and thank you for calling <Text className="text-insertion">from your</Text> phone
            service. This call may be recorded for quality and training purposes. My name is Beth, and I’ll be assisting
            you. How are you today?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">ah</Text> I’m pretty good. Thanks. How are you?
          </Paragraph>
          <Paragraph>[SPEAKER 1:] I’m doing well. Thank you. May I have your name?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] is Tom <Text className="text-insertion">idol</Text>.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Can you spell that last name for me?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">Ah</Text> Yeah. <Text className="text-insertion">ah</Text> . i
            d l e.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Ok. <Text className="text-insertion">ellie</Text> at the end. I was picturing it{' '}
            <Text className="text-insertion">idle</Text>. Like American Idol, i d o l.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. Mr. Idle, how can I help you stay?</Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. I need some information on upgrading my service plan.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] Sure. I can absolutely help you with that today. Can you tell me what plan you have currently?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] I think it’s a silver plan. Let me get my glasses so I can read this. Yeah. Yeah. It’s the
            silver plan.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Ok. <Text className="text-insertion">all right</Text>. Silver plan. And how many people do you
            have on your plan right now?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Three. I’ve got my brother Billy, my mom, <Text className="text-insertion">cat</Text>, and I
            guess I count too. So, yeah, that’s three.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Great. And how can I help you with your plan today, sir?</Paragraph>
          <Paragraph>[SPEAKER 2:] I wonder if I can switch my plan up, or upgrade it somehow.</Paragraph>
          <Paragraph>[SPEAKER 1:] How many more people are you wanting to add to your plan?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Well, here’s the thing, I need to add three more people so far. I wanted to add my friend
            Margaret, my daughter, Anna, and my son, Todd.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">All right</Text>. We do have a few options that support six
            users, one is our gold, the other is our platinum plan.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Ok. So how much are those <Text className="text-insertion">are going to</Text> cost me?
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Well, the gold plan is</Paragraph>
        </Flex>
      ),
      speed: '2 min 4.71 sec',
      wer: '14.36% ',
      accuracy: '85.64%',
    },
  },
  {
    id: 'angiogram',
    title: 'Pulmonary Angiogram Dictation',
    subhead: 'Industry Jargon, Lengthy Audio',
    url: 'https://www.datocms-assets.com/96965/1687800258-chest-pulmonary-angio.mp3',
    audioLength: '3 min 22 sec',
    difficulty: '8 out of 10',
    description:
      'Why? It’s much lengthier than your average “Hey Google,” conversation. Plus, medical jargon is serious business. Deepgram’s out-of-the-box model knocks it out at nearly 90% and can be improved even further with training. That’s accuracy any health org can feel good about. ❤️',
    note: 'Deepgram transcript can be even further improved with model training.',
    google: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] Chest pulmonary <Text className="text-insertion">angiogram</Text> consult angiogram.
            Description post-contrast CT chest pulmonary <Text className="text-insertion">embolus</Text> protocol, one
            hundred mills of <Text className="text-insertion">isobe you</Text> 300 contrast is utilized. Exam CTA chest
            pulmonary <Text className="text-insertion">angiogram. Recent</Text> for exam, evaluate for pulmonary
            embolism. Technique, post-contrast CT chest pulmonary embolism protocol one hundred mls of{' '}
            <Text className="text-insertion">why so view</Text> 300 contrast is utilized. Findings, there detox in the
            main <Text className="text-insertion">aur</Text> main right or left pulmonary arteries. No central embolism.
            sub segmental pulmonary arteries are free of embolus, but the distal{' '}
            <Text className="text-insertion">sub segmental</Text> and segmental arteries especially on the right are
            limited by extensive pulmonary parenchymal. Findings would be discussed in more detail below.{' '}
            <Text className="text-insertion">There’s no</Text> evidence of a central embolism.{' '}
            <Text className="text-insertion">a seat</Text> on the prior examination,{' '}
            <Text className="text-insertion">there’s</Text> very large{' '}
            <Text className="text-insertion">head erogenous</Text> right <Text className="text-insertion">walt</Text>{' '}
            chest wall mass, which measures at least ten by twelve centimeters based on axial image number thirty five.
            Just superior to the <Text className="text-insertion">masses as</Text> heterogeneous focus of neoplasm
            measuring about five by three point three centimeters. Given the short interval time course from the prior
            exam, dated one <Text className="text-deletion">hundred and</Text> twenty three of{' '}
            <Text className="text-deletion">oh</Text> nine, this finding has not significantly changed. However, there
            is considerable change in the appearance of the lung fields. There are now bilateral pleural effusions,
            small on the right and moderate on the left with associated atelectasis. There are also extensive right lung
            consolidations, all new or increased significantly from the prior examination. Again again identified{' '}
            <Text className="text-insertion">as</Text> a somewhat <Text className="text-insertion">speculated</Text>{' '}
            region of increased density at the right lung apex, which may indicate fibrosis or scarring, but the
            possibility of primary or metastatic disease cannot be excluded.{' '}
            <Text className="text-insertion">There’s</Text> no pneumothorax in the interval.{' '}
            <Text className="text-insertion">I’m</Text> the mediastinal windows, there is presumed{' '}
            <Text className="text-insertion">subcranial</Text> adenopathy, with one lymph node measuring roughly twelve
            millimeters suggestive of metastatic disease here. There is aortic root and arch and descending thoracic{' '}
            <Text className="text-insertion">aorta</Text> calcification. There are scattered regions of soft plaque
            intermixed with this. The heart is not enlarged. The left <Text className="text-insertion">axle</Text> is
            intact in regards to adenopathy. The inferior thyroid appears unremarkable. Limited assessment of the upper
            abdomen discloses a region of lower density <Text className="text-insertion">with it</Text> right hepatic
            lobe, this finding is indeterminate, and if there is need for additional imaging{' '}
            <Text className="text-insertion">and</Text> regards to <Text className="text-deletion">a</Text>{' '}
            <Text className="text-insertion">paddock</Text> hepatic metastatic disease, follow up ultrasound. Spleen,
            adrenal glands, and upper kidneys appear unremarkable. <Text className="text-insertion">Visualize</Text>{' '}
            portions of the pancreas are unremarkable.{' '}
            <Text className="text-insertion">There’s extensive rib destruction and</Text> the region of the chest wall
            mass. There are changes suggesting prior trauma to the right clavicle. Impression, one again demonstrated is
            a large right chest wall mass. <Text className="text-insertion">To</Text> , no central embolus, distal{' '}
            <Text className="text-insertion">sub segmental</Text> and segmental pulmonary artery branches are in part
            obscured by the pulmonary parenchymal findings, are not well assess. Three, a new bilateral pleural
            effusions and extensive <Text className="text-insertion">increase in</Text> consolidations and infiltrates
            in the right lung. <Text className="text-insertion">For</Text> , see above regarding other findings. And to
            dictation.
          </Paragraph>
        </Flex>
      ),
      speed: '43.47 sec',
      wer: '14.50% ',
      accuracy: '85.50%',
    },
    deepgram: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] Chest pulmonary angio consult dash exam, sample name chest pulmonary angio.{' '}
            <Text className="text-insertion">Subscription</Text> post-contrast CT chest pulmonary{' '}
            <Text className="text-insertion">embolus</Text> protocol, one hundred mills of{' '}
            <Text className="text-insertion">iso view</Text> -300 contrast is utilized. Exam CTA chest pulmonary angio.
            Reason for exam, evaluate for pulmonary embolism. Technique, post-contrast CT chest pulmonary embolism
            protocol one hundred mls of <Text className="text-insertion">iso view</Text> 300 contrast is utilized.
            Findings, there are no filling <Text className="text-insertion">defects</Text> in the main or main right or
            left pulmonary arteries. No central embolism. <Text className="text-deletion">The</Text> proximal
            subsegmental pulmonary arteries are free of embolus, but the distal subsegmental and segmental arteries
            especially on the right are limited by extensive pulmonary paren{' '}
            <Text className="text-deletion">chyma</Text> . Findings would be discussed in more detail below.{' '}
            <Text className="text-insertion">There’s</Text> no evidence of a central embolism. As seen on the prior
            examination, there is a very large heterogeneous right wall chest wall mass, which measures at least ten by
            twelve centimeters based on <Text className="text-insertion">xcl</Text> image number thirty five. Just
            superior to the mass is a second heterogeneous focus of neoplasm measuring about five by three point three
            centimeters. Given the short interval time course from the prior exam, dated one{' '}
            <Text className="text-insertion">hundred and</Text> twenty three of{' '}
            <Text className="text-deletion">oh</Text> nine, this finding has not significantly changed. However, there
            is considerable change in the appearance of the lung fields. There are now bilateral pleural effusions,
            small on the right and moderate on the left with associated atelectasis. There are also extensive right lung
            consolidations, all new or increased significantly from the prior examination.{' '}
            <Text className="text-deletion">Again</Text> again identified <Text className="text-insertion">as</Text> a
            somewhat <Text className="text-insertion">speculated</Text> region of increased density at the right lung
            apex, which may indicate fibrosis or scarring, but the possibility of primary or metastatic disease cannot
            be excluded. <Text className="text-insertion">There’s</Text> no pneumothorax in the interval. On the
            mediastinal windows, there is presumed <Text className="text-insertion">to sub choroidal</Text> adenopathy,
            with one lymph node measuring roughly twelve millimeters suggestive of metastatic disease here. There is
            aortic root <Text className="text-insertion">in</Text> arch and descending thoracic aortic calcification.
            There are scattered regions of soft plaque <Text className="text-insertion">that are mixed</Text> with this.
            The heart is not enlarged. The left <Text className="text-insertion">axoluz</Text> is intact in regards to
            adenopathy. The inferior thyroid appears unremarkable. Limited assessment of the upper abdomen{' '}
            <Text className="text-insertion">causes</Text> a region of lower density within the right hepatic lobe, this
            finding is indeterminate, and if there is need for additional imaging in regards to hepatic{' '}
            <Text className="text-insertion">metast</Text> disease, follow up ultrasound. Spleen, adrenal glands, and
            upper kidneys appear <Text className="text-insertion">on</Text> remarkable . Visualized portions of the
            pancreas are unremarkable. <Text className="text-insertion">There’s</Text> extensive rib destruction in the
            region of the chest wall mass. There are changes suggesting prior trauma to the right clavicle. Impression,
            one again demonstrated <Text className="text-insertion">as</Text> a large right chest wall mass. Two, no
            central <Text className="text-insertion">embolism</Text> , distal{' '}
            <Text className="text-insertion">sub segmental</Text> and segmental pulmonary artery branches are in part
            obscured by the pulmonary parenchymal findings, are not well assessed. Three, new bilateral pleural{' '}
            <Text className="text-insertion">fusions</Text> and extensive increasing consolidations and infiltrates in
            the right lung. <Text className="text-insertion">For</Text> , see above regarding other findings.{' '}
            <Text className="text-insertion">And a</Text> dictation.
          </Paragraph>
        </Flex>
      ),
      speed: '5.85 sec',
      wer: '10.92%',
      accuracy: '89.08%',
    },
    amazon: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>
            [SPEAKER 1:] Chest pulmonary angio consult dash exam, sample <Text className="text-insertion">named</Text>{' '}
            chest pulmonary angio. Description post-contrast CT chest pulmonary embolism protocol, one hundred mills of{' '}
            <Text className="text-insertion">isil view</Text> 300 contrast is utilized. Exam CTA chest pulmonary angio.
            Reason for exam, evaluate for pulmonary embolism. Technique, post-contrast CT chest pulmonary embolism
            protocol one hundred mls of <Text className="text-insertion">ice a view</Text> 300 contrast is utilized.
            Findings, there are no filling <Text className="text-insertion">detects</Text> in the main or main right or
            left pulmonary arteries. <Text className="text-insertion">North</Text> central embolism.{' '}
            <Text className="text-insertion">approximate sub segmental</Text> pulmonary arteries are free of{' '}
            <Text className="text-insertion">endless</Text> , but the distal{' '}
            <Text className="text-insertion">sub segmental</Text> and segmental arteries especially on the right are
            limited by extensive pulmonary <Text className="text-insertion">perrin camo</Text>. Findings would be
            discussed in more detail below. There is no evidence of a central embolism.
            <Text className="text-insertion">A seat</Text> on the prior examination,{' '}
            <Text className="text-insertion">There’s</Text> a very large heterogeneous right wall chest wall mass, which
            measures at least ten by twelve centimeters based on axial image number thirty five. Just superior to the{' '}
            <Text className="text-insertion">masses</Text> a second heterogeneous focus of{' '}
            <Text className="text-insertion">neo plaza</Text> measuring about five{' '}
            <Text className="text-insertion">x</Text> three point three centimeters. Given the short interval time
            course from the prior exam, dated one twenty three of of oh nine, this finding has not significantly
            changed. However, there is considerable change in the appearance of the lung fields. There are now bilateral
            pleural effusions, small on the right and moderate on the left with associated at{' '}
            <Text className="text-insertion">Alexis’s</Text> . There are also extensive right lung consolidations, all
            new or increased significantly from the prior examination. Again again identified is a somewhat{' '}
            <Text className="text-insertion">speculated</Text> region of increased density at the right lung apex, which
            may indicate fibrosis or scarring, but the possibility of primary or metastatic disease cannot be excluded.{' '}
            <Text className="text-insertion">There’s</Text> no pneumothorax in the interval. On the{' '}
            <Text className="text-insertion">media style</Text> windows, there is presumed{' '}
            <Text className="text-insertion">sub Karen alladin apathy</Text> adenopathy, with one lymph node measuring
            roughly twelve millimeters <Text className="text-insertion">suggest</Text> of metastatic disease here. There
            is aortic root <Text className="text-insertion">in</Text> arch and descending thoracic aortic calcification.
            There are scattered regions of soft plaque intermixed with this. The heart is not enlarged. The left{' '}
            <Text className="text-insertion">axle</Text> is intact in regards to{' '}
            <Text className="text-insertion">add an apathy</Text> . The inferior thyroid appears unremarkable. Limited
            assessment of the upper abdomen discloses a region of lower density within the right hepatic lobe, this
            finding is indeterminate, and if there is need for additional imaging in regards to hepatic metastatic
            disease, follow up ultrasound. Spleen, adrenal glands, and upper kidneys appear unremarkable. Visualized
            portions of the pancreas are unremarkable. There is extensive rib destruction in the region of the chest
            wall mass. There are changes suggesting prior trauma to the right clavicle. Impression, one again
            demonstrated <Text className="text-insertion">as</Text> a large right chest wall mass.{' '}
            <Text className="text-insertion">to know</Text> central <Text className="text-insertion">and less</Text>{' '}
            distal <Text className="text-insertion">sub segmental</Text> and segmental pulmonary artery branches are in
            part obscured by the pulmonary <Text className="text-insertion">printable</Text> findings, are not well
            assessed. Three, new bilateral pleural effusions and extensive increasing consolidations and infiltrates in
            there right lung. <Text className="text-insertion">For</Text> , see above regarding other findings.{' '}
            <Text className="text-insertion">And the</Text> dictation.
          </Paragraph>
        </Flex>
      ),
      speed: '1 min 12.87 sec',
      wer: '14.50%',
      accuracy: '85.50% ',
    },
  },
  {
    id: 'phone-call',
    title: 'Phone Call: Friendly Chat',
    subhead: 'Poor Audio Quality, Background Noise, Multiple Speakers, Multiple Genders, Cross-Talk, Lengthy Audio',
    url: 'https://www.datocms-assets.com/96965/1687800313-halloween-convo-audio.mp3',
    audioLength: '4 min 20 sec',
    difficulty: '9 out of 10',
    description:
      'Why? There’s background noise, multiple speakers, genders, cross-talk, etc. Plus, one person is in a car…on bluetooth speaker…with the windows open. Deepgram topped the accuracy and did it 40X faster. 🚀',
    note: 'Deepgram transcript can be even further improved with model training.',
    google: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>[SPEAKER 1:] Cool.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Alright. Well, what’s going on?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">So how’s the Halloween?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">All right.</Text> It was, like, a whole weekend extravaganza.
            We had we had… Friday after school they did this, like, trunk or treat thing where the kids, like, did a
            drive up trick or treat thing.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh, yeah.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">Obviously</Text> The teachers did all these crazy displays in
            the cars, and then Saturday, we had our neighborhood party, and then Sunday,{' '}
            <Text className="text-insertion">short circuit reading.</Text> So it was, like, a whole weekend of events.
            What did you guys do?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Oh, yeah, yeah. <Text className="text-deletion">We had</Text> we had… on Tuesday night of the
            week, we had a <Text className="text-insertion">trucker trees</Text> for our Cub Scout Pack, so{' '}
            <Text className="text-insertion">those are</Text> … all the parents put up all their{' '}
            <Text className="text-insertion">load</Text> trunk or <Text className="text-insertion">treat</Text> in every
            trunk, and they got, like, you know, <Text className="text-insertion">f**k is</Text> full of candy and
            everything. They’re so happy.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Did did you do a <Text className="text-insertion">themed?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Friday <Text className="text-deletion">we had… no</Text>. We{' '}
            <Text className="text-deletion">didn’t do a theme. A lot of people did. I’m sure that, like… some guy</Text>{' '}
            built this whole pirate ship <Text className="text-deletion">almost to the back of his car</Text>, and
            someone had a movie theater, like, a little movie theater with concession stand. It was pretty cool.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] That’s a great idea. I love that.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] I <Text className="text-deletion">know. It was fun</Text>.{' '}
            <Text className="text-insertion">Don’t know</Text> Friday, they had the parade at school. And then as it
            always happens, <Text className="text-insertion">it comes</Text>… they have a half day, so{' '}
            <Text className="text-insertion">I came</Text> home early <Text className="text-deletion">that</Text>{' '}
            Friday. So… <Text className="text-deletion">and then</Text>, yeah, that’s…{' '}
            <Text className="text-insertion">the</Text> Sunday night, <Text className="text-deletion">we</Text> went
            trick or treating. My oldest one is a <Text className="text-insertion">teenagers, they didn’t</Text> do
            anything anymore. You know? I think he I think he <Text className="text-insertion">want</Text> to be a
            disgruntled <Text className="text-insertion">team.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">That’s a</Text> stretch.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Yeah.{' '}
            <Text className="text-deletion">
              That’s a stretch. And then my younger one really wanted to go out, so we went out our neighborhood, and
              our neighborhood is so quiet.
            </Text>{' '}
            I don’t{' '}
            <Text className="text-deletion">
              know. It used to be like…. I swear, five years ago, there was kids everywhere, but we only saw, like,
              three or four… just half the kids.
            </Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Really?</Paragraph>
          <Paragraph>
            [SPEAKER 1:]{' '}
            <Text className="text-deletion">
              So he had a… yeah. And those…. a lot of houses were, like, dark. So they they went around, you know, all
              the houses with lights on, and and after a while, they started giving and saying, oh, take a handful. Take
              four handfuls. So we take… yeah. He had he had to go home, dump all his stock, and went went out again.
            </Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Oh, man.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:]{' '}
            <Text className="text-deletion">
              Yeah. So he did he did a lot of lot of trick or treating. He had a lot of fun, like, you
            </Text>{' '}
            know, <Text className="text-deletion">he has, like, huge bags full of candy.</Text>{' '}
            <Text className="text-insertion">if I</Text>{' '}
            <Text className="text-deletion">
              don’t know. You give so much candies… we have candies since since last year from Halloween. It’s like, we
              should dump it all at Easter.
            </Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Yep. Yeah. We</Text> got{' '}
            <Text className="text-insertion">leftover</Text> <Text className="text-deletion">with a lot</Text> also.{' '}
            <Text className="text-deletion">I just… I think I just</Text> overbought. But we did have{' '}
            <Text className="text-insertion">all</Text> <Text className="text-deletion">the</Text> kids, we just… I just
            bought too much.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh, really?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh, there were a lot of them coming around?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yeah. Yeah. They’re… my neighborhood goes a little over the top on Halloween. We’re mostly,
            like, you’re not going up to people’s houses, a lot of people do them, like, at the driveway, so, like,
            there’s a little bit of extra space. So, yeah, they’ll, like, set up a table and{' '}
            <Text className="text-deletion">then,</Text> like, put the bowls out with a little sign, and so people are
            keeping distance, but, yeah, like, almost every house does it. So there’s quite a lot of kids in the
            neighborhood too.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh. What…</Text> what’s the oldest{' '}
            <Text className="text-insertion">kids? Is just feels</Text> like the high schools come.. high school kids
            come by, <Text className="text-insertion">I</Text> mostly just{' '}
            <Text className="text-deletion">little kids?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Mostly tapers off by around fourteen. I did see one or two older kids trying to sneak in, you
            know, and, of course, you have to give them a hard time. Yeah. <Text className="text-deletion">But my</Text>{' '}
            my older two were just, like, wandering around the neighborhood, hanging out, skateboarding, you know,
            watching, looking at all the other costumes and stuff. So <Text className="text-insertion">do you</Text>{' '}
            still <Text className="text-insertion">hunt</Text> for them even if they{' '}
            <Text className="text-insertion">weren’t bus stop</Text>.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Yeah. Yeah. Of course, then we <Text className="text-insertion">had one day</Text> off
            becauseyou know, <Text className="text-insertion">after after all between</Text> , school doesn’t{' '}
            <Text className="text-insertion">want to</Text> be <Text className="text-insertion">seen.</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Oh, wow. So you have Monday and Tuesday off for no school?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Just…</Text> we we just have Monday off, and{' '}
            <Text className="text-deletion">then</Text> I{' '}
            <Text className="text-deletion">have Tuesday off. We get Tuesday off.</Text> So —
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">Had right.</Text>Ok. Yeah. So we had we had school on Monday,
            but no school on Tuesday.
          </Paragraph>
          <Paragraph>[SPEAKER 1:] Oh, really?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Mhmm.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">oh</Text> interesting.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yep.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Well, good.</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. Well, how much time do we have?</Paragraph>
        </Flex>
      ),
      speed: '59.92 sec',
      wer: '43.00%',
      accuracy: '57.00%',
    },
    deepgram: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>[SPEAKER 1:] Cool.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Alright. <Text className="text-deletion">Well, what’s going on?</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 1:] So how’s the Halloween?</Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">I’m so</Text> good. It was, like, a whole weekend
            extravaganza. <Text className="text-deletion">We had</Text> we had… Friday after school they did this, like,
            trunk or treat thing where the kids, <Text className="text-insertion">oh</Text> like, did{' '}
            <Text className="text-insertion">the</Text> drive up trick or treat thing.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh, yeah.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] The teachers did all these crazy displays in the cars, and then Saturday, we had our
            neighborhood party, and then Sunday, actual trick or treating. So it was, like, a whole weekend of events.
            What did you guys do?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Oh, yeah, yeah. We had we had… on Tuesday night of the week, we had a{' '}
            <Text className="text-insertion">trucker</Text> treat for a Cub Scout{' '}
            <Text className="text-insertion">bag</Text> , so every… all the parents put up all their{' '}
            <Text className="text-insertion">all the trucker break</Text> in every trunk, and they got, like,{' '}
            <Text className="text-deletion">you</Text> <Text className="text-insertion">nope monkeys</Text> full of
            candy and everything. They’re so happy.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Did did you do a theme?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] Friday we <Text className="text-insertion">I didn’t know how</Text>. We didn’t do{' '}
            <Text className="text-insertion">the same other</Text> people{' '}
            <Text className="text-insertion">didn’t show us</Text> that, like… some guy built this whole pirate ship
            almost <Text className="text-deletion">to</Text> the back of his car, and someone had a movie theater, like,
            a <Text className="text-deletion">little</Text> movie theater with concession stand. It was pretty cool.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] That’s a great idea. I love that.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] I <Text className="text-insertion">don’t go for it</Text> . And then, Friday, they had the
            parade in school. And then as it always happens, they come… they have a half day, so they come home early{' '}
            <Text className="text-insertion">on</Text> Friday. So… and then, yeah,{' '}
            <Text className="text-insertion">the the</Text> … Sunday night,{' '}
            <Text className="text-insertion">when trying to shoot you</Text> . My{' '}
            <Text className="text-insertion">smallest</Text> one is a teenager,{' '}
            <Text className="text-deletion">so</Text> <Text className="text-insertion">they didn’t</Text> do anything
            anymore. I know? I think he I think he wanted to be a disgruntled{' '}
            <Text className="text-insertion">team</Text> . Oh, that’s that’s appropriate.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] That’s a <Text className="text-insertion">scratch</Text>.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Yeah. That’s a <Text className="text-insertion">scratch</Text>. And then{' '}
            <Text className="text-insertion">like everyone</Text> really wanted to go out, so we went out our
            neighborhood, and our <Text className="text-insertion">neighbor it’s</Text> so quiet. I don’t know. It used
            to be like…. I <Text className="text-insertion">just went to</Text>, five years ago, there was{' '}
            <Text className="text-insertion">a kid</Text> everywhere, but we only saw, like, three or four… just{' '}
            <Text className="text-insertion">packed</Text> the kids.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Really?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">No</Text> he had a… yeah. And{' '}
            <Text className="text-insertion">there was</Text> …. a lot of{' '}
            <Text className="text-insertion">house where it was</Text> , like, dark. So they they went around, you know,
            all the <Text className="text-insertion">house</Text> with lights on, and and after a while, they started{' '}
            <Text className="text-insertion">getting to say</Text> , oh, take a handful. Take four{' '}
            <Text className="text-insertion">handful. Ok yeah yeah you have</Text> to go home,{' '}
            <Text className="text-insertion">don’t wanna talk to him once and how to get it</Text> .
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-insertion">So many men.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">You you know</Text> lot of lot of trick or treating.{' '}
            <Text className="text-insertion">Yeah</Text> a lot of <Text className="text-insertion">fights that</Text>{' '}
            you <Text className="text-insertion">don’t you have</Text> like, a huge bag full of candy. I I don’t know.
            We have so much candies… we have c<Text className="text-insertion">ake because flattered holly is</Text>{' '}
            like, we <Text className="text-insertion">can</Text> dump it all at{' '}
            <Text className="text-insertion">at ether</Text>.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yeah. Got left over with a lot also. I just… I think I just overbought. But we did have{' '}
            <Text className="text-deletion">all</Text> <Text className="text-insertion">other</Text> kids, we just… I
            just bought too much.
          </Paragraph>
          <Paragraph>
            SPEAKER 1:] have <Text className="text-deletion">Oh</Text> , really?
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. Yeah.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] Oh, <Text className="text-deletion">there were a lot of them coming</Text> around?
          </Paragraph>
          <Paragraph>[SPEAKER 2:] What’s that?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] A lot of kids around <Text className="text-deletion">your neighborhood?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yeah. Yeah. <Text className="text-insertion">Their</Text>… my neighborhood goes a little over
            the top on Halloween. We’re mostly, like, you’re not going up to people’s houses, a lot of people do them,
            like, at the driveway, so, like, there’s a little bit of extra space. So, yeah, they’ll, like, set up a
            table and then, like, put the bowls out with a little sign, and so people are keeping distance, but, yeah,
            like, almost every house does it. So there’s quite a lot of kids in the neighborhood too.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Oh. What… what’s the oldest <Text className="text-insertion">kid? Is</Text> it{' '}
            <Text className="text-insertion">just</Text> like the high <Text className="text-insertion">school’s</Text>{' '}
            come.. high school kids come by, <Text className="text-deletion">or mostly</Text>{' '}
            <Text className="text-insertion">but like it</Text> ?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Mostly tapers off by around fourteen. I did see one or two older{' '}
            <Text className="text-deletion">kids</Text> trying to sneak in, you know, and, of course, you have to give
            them a hard time. Yeah. But my my older two were just, like, wandering around the neighborhood, hanging out,
            skateboarding, you know, watching, looking at all the other costumes and stuff. So I think it was still fun
            for them even if they didn’t <Text className="text-insertion">bust out</Text>.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Yeah. Yeah. Of course, then we have Monday off <Text className="text-insertion">just</Text> ,
            you know, after Halloween, school <Text className="text-deletion">doesn’t wanna be insane.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Oh, wow. So you <Text className="text-insertion">had</Text> Monday and Tuesday off for{' '}
            <Text className="text-insertion">no</Text> no school?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">We</Text> just… we we just{' '}
            <Text className="text-insertion">had</Text> Monday off, and then I{' '}
            <Text className="text-insertion">had</Text> Tuesday off.{' '}
            <Text className="text-insertion">We get Tuesday</Text> off. So —
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Ok. Yeah. So we had we had school on Monday, but no school on Tuesday.</Paragraph>
          <Paragraph>[SPEAKER 1:] Oh, really?</Paragraph>
          <Paragraph>[SPEAKER 2:] Mhmm.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">Oh</Text> interesting.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yep.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Well</Text> , good.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yeah. Well, how much time do we <Text className="text-deletion">have</Text>?
          </Paragraph>
        </Flex>
      ),
      speed: '2.74 sec',
      wer: '23.75%',
      accuracy: '76.25%',
    },
    amazon: {
      transcript: (
        <Flex flexDirection="column" gap="16px">
          <Paragraph>[SPEAKER 1:] Cool.</Paragraph>
          <Paragraph>
            [SPEAKER 2:] Alright. <Text className="text-deletion">Well, what’s going on?</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] So <Text className="text-insertion">how’s</Text> the Halloween?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">I’m so</Text> good. It was, like, a whole weekend extravaganza.
            We had we had… Friday after school they did this, like, trunk or treat thing where the kids, like, did a
            drive up trick or treat thing.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh, yeah.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] The teachers did all these crazy displays in the cars, and then Saturday, we had our
            neighborhood party, and then Sunday, actual trick or treating. So it was, like, a whole weekend of events.
            What did you guys do?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Oh, yeah, yeah. <Text className="text-insertion">yeah</Text> we had… on Tuesday night of the
            week, we had a trunk or treat for <Text className="text-deletion">our</Text> Cub Scout Pack, so{' '}
            <Text className="text-deletion">every</Text>… all the parents put up all their{' '}
            <Text className="text-deletion">little</Text> trunk or treats in every trunk, and they got, like, you know,{' '}
            <Text className="text-insertion">fun</Text> is buckets full of candy and everything. They’re so happy.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Did <Text className="text-insertion">the</Text> did you do a theme?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Friday we <Text className="text-deletion">had</Text>… no. We didn’t do a theme .{' '}
            <Text className="text-insertion">The same other</Text> people{' '}
            <Text className="text-deletion">did. I’m</Text> <Text className="text-insertion">they actually</Text> like…
            some guy built this whole pirate ship almost in the back of his car, and someone had a movie theater, like,
            a little movie theater <Text className="text-deletion">with</Text> concession stand. It was pretty cool.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] That’s a great idea. I love that.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] I <Text className="text-deletion">know. It was fun</Text>{' '}
            <Text className="text-insertion">don’t know</Text> Friday, they had a parade at school. And then as it
            always happens, <Text className="text-deletion">they</Text>{' '}
            <Text className="text-insertion">a company</Text> … have a half day, so{' '}
            <Text className="text-deletion">they</Text> come home early <Text className="text-deletion">that</Text>{' '}
            Friday. So… <Text className="text-deletion">and then,</Text> yeah,{' '}
            <Text className="text-deletion">that’s… and</Text> Sunday night,{' '}
            <Text className="text-insertion">you want to show</Text> you My oldest one is a teenager,{' '}
            <Text className="text-deletion">so</Text> he doesn’t do anything anymore. You know? I think he I think he
            wanted to be a disgruntled <Text className="text-insertion">people</Text> . Oh,{' '}
            <Text className="text-deletion">that’s</Text> that’s appropriate.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">That’s a</Text> <Text className="text-insertion">scratch</Text>
            .
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] Yeah. That’s a <Text className="text-insertion">right</Text>. And then{' '}
            <Text className="text-insertion">like everyone</Text> really wanted to go out, so we went out our
            neighborhood, and our neighbor is so quiet. I <Text className="text-deletion">don’t know. It</Text> used to
            be like…. I <Text className="text-insertion">just went to</Text>, five years ago, there was{' '}
            <Text className="text-insertion">a kid</Text> everywhere, but we only saw, like, three or four…{' '}
            <Text className="text-deletion">just</Text> <Text className="text-insertion">packed</Text> the kids.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Really?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">No</Text> he had a… yeah. And{' '}
            <Text className="text-insertion">there was</Text> …. a lot of{' '}
            <Text className="text-insertion">house where it was</Text> , like, dark. So they they went around, you know,
            all the <Text className="text-insertion">house</Text> with lights on, and and after a while, they started{' '}
            <Text className="text-insertion">getting to say</Text> , oh, take a handful. Take four{' '}
            <Text className="text-insertion">handful. Ok yeah yeah you have</Text> to go home,{' '}
            <Text className="text-deletion">don’t wanna talk to him once</Text> and how to get it .
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">So many men.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-insertion">You you know</Text> lot of lot of trick or treating.{' '}
            <Text className="text-insertion">Yeah</Text> a lot of <Text className="text-insertion">fights that</Text>{' '}
            you <Text className="text-insertion">don’t you have</Text> like, a huge bag full of candy. I I don’t know.
            We have so much candies… we have c<Text className="text-insertion">ake because flattered holly is</Text>{' '}
            like, we <Text className="text-insertion">can</Text> dump it all at{' '}
            <Text className="text-insertion">at ether</Text>.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Yeah. Got left over with a lot also. I just… I think I just overbought. But we did have{' '}
            <Text className="text-deletion">all other</Text> kids, we just… I just bought too much.
          </Paragraph>
          <Paragraph>
            SPEAKER 1:] have <Text className="text-deletion">Oh , really?</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. Yeah.</Paragraph>
          <Paragraph>[SPEAKER 1:] Oh, there were a lot of them coming around?</Paragraph>
          <Paragraph>[SPEAKER 2:] What’s that?</Paragraph>
          <Paragraph>
            [SPEAKER 1:] A lot of kids around <Text className="text-insertion">the</Text> neighborhood?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:]Yeah. Yeah. They’re… my neighborhood goes a little over the top on Halloween.{' '}
            <Text className="text-insertion">Were</Text> mostly, like, you’re not going up to people’s houses, a lot of
            people do them, like, at the driveway, so, like, there’s a little bit of extra space. So, yeah, they’ll,
            like, set up a table and <Text className="text-deletion">then</Text>, like, put the bowls out with{' '}
            <Text className="text-deletion">a</Text> little sign, and so people are keeping distance, but, yeah, like,
            almost every house does it. So there’s quite a lot of kids in the neighborhood too.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh. What</Text>… what’s the oldest kid?{' '}
            <Text className="text-deletion">Did</Text> <Text className="text-insertion">is just</Text> like the high{' '}
            <Text className="text-deletion">school’s come</Text>.. high school kids come by,{' '}
            <Text className="text-deletion">or mostly but like it</Text> ?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Mostly tapers off by around fourteen. I did see one or two older kidstrying to sneak in, you
            know, and, of course, you have to give them a hard time. Yeah. But my my older two were just, like,
            wandering around the neighborhood, hanging out, skateboarding, you know, watching, looking at all{' '}
            <Text className="text-insertion">these</Text> other costumes and stuff. So I think it was still fun for them
            even if they <Text className="text-insertion">were bust</Text> up.
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Yeah</Text>. Yeah. Of course,{' '}
            <Text className="text-deletion">then</Text> we have Monday off{' '}
            <Text className="text-deletion">just, you know,</Text> after Halloween, school doesn’t
            <Text className="text-insertion"> want to </Text>insane.
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] Oh, wow. So you have Monday and Tuesday off <Text className="text-deletion">for</Text> no
            school?
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">We just</Text>…{' '}
            <Text className="text-insertion">well you said</Text> Monday off, and{' '}
            <Text className="text-deletion">then</Text> I <Text className="text-deletion">had</Text> Tuesday off.{' '}
            <Text className="text-insertion">Right</Text>. So —
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Ok. Yeah. So we had we had school on Monday, but no school on Tuesday.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh,</Text> really?
          </Paragraph>
          <Paragraph>
            [SPEAKER 2:] <Text className="text-deletion">Mhmm.</Text>
          </Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Oh interesting.</Text>
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yep.</Paragraph>
          <Paragraph>
            [SPEAKER 1:] <Text className="text-deletion">Well</Text> , good.
          </Paragraph>
          <Paragraph>[SPEAKER 2:] Yeah. Well, how much time do we have?</Paragraph>
        </Flex>
      ),
      speed: '1 min 51.76 sec',
      wer: '25.03%',
      accuracy: '74.97%',
    },
  },
] as const;
