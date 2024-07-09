import Person from "./Person";

import List from "./List";


const skills = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"];

// Module
const App = () => {
  return (
    <>
      <header>Header</header>
      <section>
        <Person
          name="John Doe"
          job="Developer"
          avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=Gray02&eyeType=Wink&eyebrowType=SadConcernedNatural&mouthType=Serious&skinColor=Yellow"
        />

        {/* HW1:
        display the person skils 
        List -> as ul+li
        skills -> [...]
        */}
        <List data={skills} />
       
      </section>
      <footer>Footer</footer>
    </>
  );
}

export default App;
