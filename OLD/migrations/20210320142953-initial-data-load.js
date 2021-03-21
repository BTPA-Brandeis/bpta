module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('users', [
      { userFirstName: 'Carrye', userLastName: 'Gaulin', password: 'fucker', accessLevel: 1, email: 'carryegaulin111@gmail.com', DOB: '03/31/1978', profileImage: 'me.jpg', securityQuestionOne: 'work dammit', securityQuestionTwo: 'for real', locationZone: '7' },
    ]),

      await queryInterface.bulkInsert('workouts', [
        { userID: 1, pushUps: 0, sitUps: 0, boxJumps: 0, kilometersRan: 0, waterIntakeOz: 0 }
      ]),

      await queryInterface.bulkInsert('usersWorkoutsLinkings', [
        { userID: 1, WorkoutsID: 1 }
      ]),

      await queryInterface.bulkInsert('posts', [
        { accessLevelReq: 1, body: '', userID: 1 }
      ])

    return queryInterface.bulkInsert('resources', [
      { url: 'https://www.uscis.gov/i-9', description: 'The I-9 Employment Form is a necessity for employment in the program, but is also required by most official employers', subject: 'Tax Forms', phoneNo: '1-800-829-1040' },
      { url: 'https://www.uscis.gov/sites/default/files/document/forms/i-9instr.pdf', description: 'I-9 Instruction', subject: 'Tax Forms', phoneNo: '1-800-829-1040' },
      { url: 'https://www.uscis.gov/sites/default/files/document/forms/i-9-paper-version.pdf', description: '(I9 Paper Form', subject: 'Tax Forms', phoneNo: '1-800-829-1040' },
      { url: 'https://www.irs.gov/pub/irs-pdf/fw2.pdf', description: '', subject: 'Tax Forms', phoneNo: '1-800-829-1040' },
      { url: 'https://suicidepreventionlifeline.org/', description: 'National Suicide Prevention Lifeline', subject: 'Mental Health', phoneNo: '1-800-273-8255' },
      { url: 'https://www.crisistextline.org/', description: 'Crisis Text Line', subject: 'Mental Health', phoneNo: 'text the word ‘Home’ to 741-741' },
      { url: 'https://www.thetrevorproject.org/get-help-now/', description: 'The Trevor Lifeline for LGBTQ Youth', subject: 'Mental Health', phoneNo: '1-866-488-7386;'},
      { url: 'https://translifeline.org/', description: 'The Trans Lifeline', subject: 'Mental Health', phoneNo: '1-877-565-8860' },
      { url: 'https://www.thehotline.org/', description: 'National Domestic Violence Support Hotline', subject: 'Personal Safety', phoneNo: '1-800-799-7233' },
      { url: 'https://humantraffickinghotline.org/', description: ' National Human Trafficking Hotline', subject: 'Personal Safety', phoneNo: '1-888-373-7888' },
      { url: 'https://humantraffickinghotline.org/', description: ' National Human Trafficking Text-line', subject: 'Personal Safety', phoneNo: 'text the word Help to 233-733' },
      { url: 'https://rainn.org/about-national-sexual-assault-telephone-hotline?_ga=2.187212328.1049871088.1612731810-1849223001.1612731810', description: ' National Sexual Assault Hotline', subject: 'Personal Safety(anonymous)', phoneNo: '1-800-656-4673' },
      { url: 'https://www.fns.usda.gov/partnerships/national-hunger-clearinghouse', description: 'USDA National Hunger Hotline', subject: 'Human Services', phoneNo: '1-866-348-6479' },
      { url: 'https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions', description: 'The National Alliance on Mental Illness (NAMI)', subject: 'Mental Health', phoneNo: '' },
      { url: 'https://findtreatment.samhsa.gov/', description: ' The Substance Abuse and Mental Health Services Administration/ SAMHSA', subject: 'Addiction', phoneNo: '' },
      { url: 'https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health/index.shtml', description: 'The National Institute of Mental Health', subject: 'Mental Health', phoneNo: '' },
      { url: 'https://www.mentalhealth.gov/talk/parents-caregivers', description: 'a resource for parents and caregivers observing troubling behavior in children what to do when concerned, and how to talk about mental health effectively ', subject: 'Mental Health', phoneNo: '' },
      { url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/default.aspx', description: 'holistic library of articles and guides on healthy living habits physical fitness emotional wellness; nutrition & sleep', subject: 'Mental Health', phoneNo: '' },
      { url: 'https://www.mhanational.org/finding-right-mental-health-care-you', description: ' an online resource to help you identify the right treatment plan for your situation also providing information on insurance coverage policies', subject: 'Mental Health', phoneNo: '' },
      { url: 'https://www.youtube.com/watch?v=TXU591OYOHA&list=PLui6Eyny-UzwxbWCWDbTzEwsZnnROBTIL', description: 'designed to give you the tools to build a happy healthy at home yoga practice', subject: 'Physical Health', phoneNo: '' },
      { url: 'https://humanfitproject.com/fitness-workouts/aesthetics/30-free-workout-plans-for-different-goals-and-abilities/', description: 'The Human Fit Project', subject: 'Physical Health', phoneNo: '' },
      { url: 'https://www.fns.usda.gov/nslp', description: 'National School Lunch Program', subject: 'Food Insecurity', phoneNo: '' },
      { url: 'https://www.feedingamerica.org/find-your-local-foodbank', description: 'locate local food banks and pantries', subject: 'Food Insecurity', phoneNo: '' },
      { url: 'https://www.mass.gov/wic-information-for-participants', description: ' assist low-income households in purchasing essentialfood and supplies for pregnant women, infants, and young children ', subject: 'Food Insecurity', phoneNo: '' },
      { url: 'https://www.boston.gov/departments/food-access', description: 'food maps, youth meal sites, and multiple programs and initiatives', subject: 'Food Insecurity', phoneNo: '' },
      { url: 'https://www.healthcare.gov/', description: 'federally operated health insurance exchange website', subject: 'Health Care', phoneNo: '' },
      { url: 'https://www.healthcare.gov/medicaid-chip/getting-medicaid-chip/', description: 'which provide free or low-cost health insurance', subject: 'Health Care', phoneNo: '' },
      { url: 'https://familywize.org/free-prescription-discount-card', description: 'card is available to anyone regardless of health insurance and can help you save on any prescribed medication', subject: 'Health Care', phoneNo: '' },
      { url: 'https://www.rxassist.org/search', description: 'n database of patient assistance programs', subject: 'Health Care', phoneNo: '' },
      { url: 'https://positivepsychology.com/family-therapy/', description: 'r taking steps towards the family therapy conversation', subject: 'Health Care', phoneNo: '' },
      { url: 'https://www.khanacademy.org/', description: ' free online learning tools math, art, computer programming finance history SAT Practice and more', subject: 'Education', phoneNo: '' },
      { url: 'https://www.codecademy.com/', description: ' free online learning platform that offers coding classes', subject: 'Education', phoneNo: '' },
      { url: 'https://www.freecodecamp.org/learn', description: 'comprehensive online programming curriculum allowing individuals who complete their courses to get certifications', subject: 'Education', phoneNo: '' },
      { url: 'https://www.ted.com/', description: 'global conversations about ideas revolving around Technology, Entertainment, & Design', subject: 'Education', phoneNo: '' },
      { url: 'http://flexboxfroggy.com/', description: ' game in which you can progress by writing CSS code', subject: 'Education', phoneNo: '' },
      { url: 'https://ocw.mit.edu/', description: 'free web publications of almost every academic course provided by the Massachusetts Institute of Technology', subject: 'Education', phoneNo: '' },
      { url: 'https://scratch.mit.edu/', description: ' simplified coding language that allows problem-solving that lie at the heart of programming ', subject: 'Education', phoneNo: '' },
      { url: 'https://www.edx.org/high-school', description: 'Help  build a proper foundation of concepts that will prepare for the academic rigor of the pre-college and college lifestyles.', subject: 'College Prep', phoneNo: '' },
      { url: 'http://www.collegeprep101.com/', description: 'a free online resource that focuses on best preparing students for college', subject: 'College Prep', phoneNo: '' },
      { url: 'https://www.fastweb.com/', description: 'resource for quickly finding scholarships that are targeted towards a students strengths, interests, and background', subject: 'College Prep', phoneNo: '' },
      { url: 'https://bigfuture.collegeboard.org/scholarship-search#', description: 'primary organizer of standardized testing, they also provide an easy to use interface for finding and applying to nearly $6 Billion in aid and internships', subject: 'College Prep', phoneNo: '' },
      { url: 'https://www.scholarships.com/', description: ' simple, approachable tool to search database of over 3.7 million scholarships and grants,', subject: 'College Prep', phoneNo: '' },
      { url: 'https://www.collegegrant.net/', description: 'College Grants Database provides a vast library of college grants', subject: 'College Prep', phoneNo: '' },
      { url: 'https://www2.ed.gov/finaid/landing.jhtml', description: ' essential information on broad topics like avoiding scholarship scams, filling out the FAFSA form where to explore for new sources of aid, student aid calculators, and their own direct student aid disbursement program', subject: 'College Prep', phoneNo: '' },

    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.bulkDelete('resources')

    await queryInterface.bulkDelete('posts')

    await queryInterface.bulkDelete('usuersWorkoutsLinkings')

    await queryInterface.bulkDelete('Workouts')

    return queryInterface.bulkDelete('users')
  }
};
