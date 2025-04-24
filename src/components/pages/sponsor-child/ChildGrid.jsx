import React, { useState } from "react";
import ModalSponsor from "../../../partials/modal/ModalSponsor";
import { Link } from "react-router-dom";

const children = [
  {
    name: "John Luke B",
    sponsored: "0.00%",
    img: "https://facethechildren.org/images/John-luke-b.jpg",
    age: "12",
    birthday: "Jul 3, 2013",
    story:
      "John Luke, or JL, as he is called by his friends was neglected and then abandoned by his parents.  When the mother and father separated JL and his siblings were in the care of their mother.  The mother went to work overseas and left them in the care of another man who abandoned them.  The mother does not respond to contact.  JL is enrolled in grade 3 at Frontline Christian Academy and is interacting well within Face the Children.",
  },

  {
    name: "Ala D",
    sponsored: "5.00%",
    img: "https://facethechildren.org/images/ala-d.jpg",
    age: "12",
    birthday: "Jun 27, 2013",
    story:
      "Ala and his brother were abandoned on a bus that was traveling through the San Pablo City area.  When the driver discovered their abandonment he immediately contacted local authorities.  Search was made for the family but their identity was unknown.  Ala and his brother recently came into the care of Face the Children and are integrating well.  Ala is enrolled in an Independent Educational Program within Frontline Christian Academy which will tutor him to enroll at his appropriate school level.",
  },

  {
    name: "Angelita A - Special Education",
    sponsored: "5.00%",
    img: "https://facethechildren.org/images/opt-angelica.jpg",
    age: "33",
    birthday: "Jun 6, 1992",
    story:
      "She has been diagnosed with Cerebral palsy, and also being mentally slow. Angi is mostly crippled in both legs, and has limited use of her hands. For many years when she was just a small child, all she did was beg for alms in the city marketplace, along with her brothers and sisters. When Frontline missionaries noticed her, they began helping Angie by carrying her to the FTC Daycare Center where street kids were being fed and ministered to each day. At first Angie\\'s mother did not allow her to go back, and preferred she remain on the streets to collect money. Eventually Social Services escalated the case, and the FTC staff were allowed to rescue Angie from a dangerous and abusive situation, and Angie was brought to the FTC care center permanently. Though limited mentally due to her particular disease, Angie is happy because she has been helped in so many ways. She attended a special needs school for more than 3 years, and is now being taught to read and write through FTC staff.",
  },

  {
    name: "Minos D",
    sponsored: "5.00%",
    img: "https://facethechildren.org/images/minos-d (1).jpg",
    age: "11",
    birthday: "Oct 14, 2014",
    story:
      "Minos and his brother were abandoned on a bus that was traveling through the San Pablo City area.  When the driver discovered their abandonment he immediately contacted local authorities.  Search was made for the family but their identity was unknown.  Minos and his brother recently came into the care of Face the Children and are integrating well.  Minos  is enrolled in grade 4 within Frontline Christian Academy.  Math and English are his strong subjects.  He is an active and sociable boy.",
  },

  {
    name: "Angelita A",
    sponsored: "10.00%",
    img: "https://facethechildren.org/images/opt-angelica.jpg",
    age: "33",
    birthday: "Jun 6, 1992",
    story:
      "She has been diagnosed with Cerebral palsy, and also being mentally slow. Angi is mostly crippled in both legs, and has limited use of her hands. For many years when she was just a small child, all she did was beg for alms in the city marketplace, along with her brothers and sisters. When Frontline missionaries noticed her, they began helping Angie by carrying her to the FTC Daycare Center where street kids were being fed and ministered to each day. At first Angie\\'s mother did not allow her to go back, and preferred she remain on the streets to collect money. Eventually Social Services escalated the case, and the FTC staff were allowed to rescue Angie from a dangerous and abusive situation, and Angie was brought to the FTC care center permanently. Though limited mentally due to her particular disease, Angie is happy because she has been helped in so many ways. She attended a special needs school for more than 3 years, and is now being taught to read and write through FTC staff.",
  },

  {
    name: "Mary Joy C.",
    sponsored: "17.50%",
    img: "https://facethechildren.org/images/opt-mary-joy.jpg",
    age: "14",
    birthday: "Nov 2, 2011",
    story:
      "Mary Joy is 12 years old. She, her sister and cousin came into our care when a pastora from a nearby community contacted the leadership of Frontline about a situation of abuse. After investigation by our social worker, we were able to bring them to the safety of our Face The Children program. After a two week orientation, Mary Joy has now joined our home with the other children of FTC. She is a cheerful person and is looking forward to enrolling in the new school year",
  },

  {
    name: "Carl Leann N.",
    sponsored: "25.00%",
    img: "https://facethechildren.org/images/opt-leam.jpg",
    age: "12",
    birthday: "Apr 25, 2013",
    story:
      "Leam came into our care in February 2024 after his father was detained in jail and his mother abandoned him. He was found roaming the streets of Sto. Tomas with his younger brother. He is currently being assessed for his educational leveland will be enrolled at FCA (Frontline Christian Academy) this coming school year.",
  },

  {
    name: "Charissa N.",
    sponsored: "25.00%",
    img: "https://facethechildren.org/images/opt-charisse.jpg",
    age: "9",
    birthday: "Nov 6, 2016",
    story:
      "Charice and her siblings recently came into our care after their mother abandoned them. Their father is currently detained in jail. Charice was rescued from the streets of Calamba where she was roaming and begging for food. She is currently being assessed for her educational level and will be enrolled at FCA (Frontline Christian Academy) for the 2024/2025 school year.",
  },

  {
    name: "Chelsey B",
    sponsored: "27.50%",
    img: "https://facethechildren.org/images/chelsey-b.jpg",
    age: "9",
    birthday: "Jan 8, 2016",
    story:
      "Chelsey  was neglected and then abandoned by her parents.  When the mother and father separated Chelsey and her siblings were in the care of their mother.  The mother went to work overseas and left them in the care of another man who abandoned them.  The mother does not respond to contact. Her brother, JL, became the one who cared for his siblings.  Chelsey is enrolled in grade 2 at Frontline Christian Academy and is interacting well within Face the Children.",
  },

  {
    name: "Shiela Mariel S",
    sponsored: "35.00%",
    img: "https://facethechildren.org/images/opt-shiela.jpg",
    age: "16",
    birthday: "Apr 9, 2009",
    story:
      "Shiela is third among five siblings. When she was found, she was malnourished and underweight. She used to roam around the streets with her brothers and sister, begging for food and other daily needs. Due to their povety situation, her mother was unable to earn a living for them. Her youngest sibling, who was then newly born, required most of her mother's attention. Shiela and her siblings were brought to Face the Children by the Social Services, and entered the FTC Interim Center along January 27, 2014. We have seen her grow and blossom into a happy girl, who enjoys playing with others and learning in the school.",
  },

  {
    name: "Cielithaine D",
    sponsored: "37.50%",
    img: "https://facethechildren.org/images/opt-CIELITAHINE.jpg",
    age: "15",
    birthday: "Feb 25, 2010",
    story:
      "Celine, along with her brother, were brought to Face the Children by the government Social Services (DSWD). Her story is one of malnourishment, abandonment by her father, and left only to the care of her mother. Her mother, however, is deaf and mute and had no job or any other source of income. Because of this, the children would go out and beg jeepney passengers for money, despite the many dangers they would encounter. The mother could not change this need for begging by the children, because the kids were literally starving. Now, in our care, Celine is healthy, safe, and doing very well in her studies at our school, Frontline Christian Academy.",
  },

  {
    name: "Junior N.",
    sponsored: "40.00%",
    img: "https://facethechildren.org/images/opt-junior.jpg",
    age: "15",
    birthday: "Feb 25, 2010",
    story:
      "Celine, along with her brother, were brought to Face the Children by the government Social Services (DSWD). Her story is one of malnourishment, abandonment by her father, and left only to the care of her mother. Her mother, however, is deaf and mute and had no job or any other source of income. Because of this, the children would go out and beg jeepney passengers for money, despite the many dangers they would encounter. The mother could not change this need for begging by the children, because the kids were literally starving. Now, in our care, Celine is healthy, safe, and doing very well in her studies at our school, Frontline Christian Academy.",
  },

  {
    name: "Melquizedec B",
    sponsored: "40.00%",
    img: "https://facethechildren.org/images/opt-milquizedec.jpg",
    age: "18",
    birthday: "Mar 13, 2007",
    story:
      "He, along with his sister, were brought to FTC by the government social welfare agency (DSWD). His story is one of malnourishment, abandonment by his father, and left only to the care of his mother. His mother, however, is deaf and mute and has no job or any other source of income. Because of this, the children would go out and beg jeepney passengers for money, despite the many dangers they would encounter. The mother could not change this need for begging by the children, because the kids were literally starving. Now, in our care, Melky is doing well and advancing in his studies at Frontline Christian Academy. Now his mother does not need to be concerned everyday for her children's survival.",
  },

  {
    name: "Keren D.",
    sponsored: "45.00%",
    img: "https://facethechildren.org/images/opt-keren.jpg",
    age: "10",
    birthday: "May 21, 2015",
    story:
      "Keren and her brother were rescued by the Department of Social Welfare and Development from the streets. Their mother was a street dweller incapable of providing for them. They were brought to Frontline in July 2021, where their two older siblings reside. She has never attended school, and her academic skills are below those of other children her age. She is well-behaved and is a sweet young girl who shows great independence in her daily activities.",
  },

  {
    name: "Mary Ann V.",
    sponsored: "50.00%",
    img: "https://facethechildren.org/images/opt-mary-ann.jpg",
    age: "16",
    birthday: "Jun 29, 2009",
    story:
      "My name is Mary Ann. I entered FTC with my two sisters (Mary Grace and Danica). Before coming here my siblings and I would play on the streets, sometimes all night, and we would beg people who were passing by for money. When I came to FTC I was too young to do school, but now I'm enrolled with the other FTC kids at Frontline Christian Academy. I love to play with toys and my friends. I'm happy that there are people like this who love and care for me. And really happy that I can eat three meals a day, and sometimes even snacks!",
  },

  {
    name: "Michaela C.",
    sponsored: "50.00%",
    img: "https://facethechildren.org/images/opt-mikaela.jpg",
    age: "15",
    birthday: "Sep 29, 2010",
    story:
      "At the age of 12, Michaela, along with her cousins, entered our care in response to a report of abuse made by a pastor from a nearby community to Frontline's leadership. Following a thorough investigation by our social worker, we successfully relocated them to the safety of our Face The Children program. After a two-week orientation, Michaela has seamlessly become a part of our home, joining the other children at FTC. She is a joyful girl that loves going to school.",
  },

  {
    name: "Sara A",
    sponsored: "50.00%",
    img: "https://facethechildren.org/images/opt-sarah.jpg",
    age: "18",
    birthday: "Oct 31, 2007",
    story:
      "I was born here at Face the Children because my mother was also here at the time she was pregnant with me. My mom is not in FTC anymore, but I still am. I know God has a plan for my life and a purpose for me being here. The staff here are my parental figures and role models, and I thank God that I am here. My school is at the Frontline Christian Academy, and I love to play, jump rope, eat sweet treats, and go to parties!",
  },

  {
    name: "Ricka",
    sponsored: "52.50%",
    img: "https://facethechildren.org/images/opt-ricka.jpg",
    age: "15",
    birthday: "Mar 25, 2010",
    story:
      "Ricka Mae, at the age of 13, along with her sister and cousin, entered our care following a report of abuse from a pastor in a nearby community who contacted Frontline's leadership. Upon thorough investigation by our social worker, we were able to bring them to the safety of our Face The Children program. After a two-week orientation period, Ricka has now become a part of our home, joining the other children at FTC. Despite her past experiences, she exudes cheerfulness and eagerly anticipates enrolling in the upcoming school year.",
  },

  {
    name: "Alden D.",
    sponsored: "57.00%",
    img: "https://facethechildren.org/images/opt-alden.jpg",
    age: "11",
    birthday: "Dec 16, 2014",
    story:
      "Alden is 9 years old. He was abandoned by his biological parents. An elderly lady sought assisstant from DSWD Liliw concerning the custody of the child who was left under her care since 2021. The DSWD Liliw then referred Alden to FTC for shelter and educational needs. He is now enrolled in school.",
  },

  {
    name: "Andrea C.",
    sponsored: "62.50%",
    img: "https://facethechildren.org/images/opt-andrea.jpg",
    age: "10",
    birthday: "Dec 29, 2015",
    story:
      "Andrea's family lives on the harsh streets. Her father died when she was a baby, which left her mom in a difficult situation of surviving every day with Andrea and her siblings. Recently, some of Andrea's other siblings have been rescued by social services and sent to residential and rehab facilities. Needless to say Andrea and her family have had a rough go at it. Andrea is a beautiful girl, who is fitting in well with her new family at Face the Children. We look forward to seeing what her gifts and strengths are, and what plans the Lord has for her!",
  },

  {
    name: "Cornnelito D.",
    sponsored: "100.00%",
    img: "https://facethechildren.org/images/opt-cornilito.jpg",
    age: "13",
    birthday: "Jun 6, 2012",
    story:
      "Cornelito and his sister were rescued by the Department of Social Welfare and Development from the streets. Their mother was a street dweller incapable of providing for them. They were brought to Frontline in July 2021, where their two older siblings reside. Cornelito has been working on the streets since he was six years old, carrying goods and fish for market vendors, in order to earn a living for his family. He is a very respectful little boy and loves to play outside. He wants to start school soon and learn to read, as he has never been able to attend school.",
  },
];

const ChildGrid = () => {
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-6">
        {children.map((child, index) => {
          const sponsoredPercent = parseFloat(child.sponsored.replace("%", ""));

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-w-[300px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={child.img}
                  alt={child.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold">{child.name}</h3>
                    <button
                      onClick={() => setSelectedChild(child)}
                      className="bg-primary hover:bg-blue-500 text-white px-3 py-1 rounded text-xs"
                    >
                      Sponsor →
                    </button>
                  </div>
                  <Link
                    to={{
                      pathname: "/child-info-output",
                    }}
                    state={{ child }}
                    className="text-orange-300 text-xs"
                  >
                    View Info
                  </Link>
                </div>
              </div>

              <div className="relative w-full h-7 bg-orange-300">
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500"
                  style={{ width: `${sponsoredPercent}%` }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold text-sm z-10">
                  {child.sponsored} - Sponsored
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ModalSponsor
        child={selectedChild}
        onClose={() => setSelectedChild(null)}
      />
    </div>
  );
};

export default ChildGrid;
