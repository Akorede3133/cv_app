const defaultPersonal = {
  firstName: 'Tracy',
  lastName: 'Okorie',
  title: 'Software Developer',
  address: '15, Madam Omotayo Olajumoke',
  phoneNumber: '090xxxxxxxx',
  email: 'example1@gmail.com',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.'
}
const defaultWorks =     [
    {
      id: 1, 
      formData: {
        position: 'sofware engineer',
        company: 'spotify',
        from: '2015',
        to: 'present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.'
      } 
    },
    {
      id: 2, 
      formData: {
        position: 'UI / UX designer',
        company: 'shazam Inc.,',
        from: '2022',
        to: 'present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.'
      } 
    },
    {
      id: 3, 
      formData: {
        position: 'product designer',
        company: 'twitter',
        from: '2018',
        to: '2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.'
      } 
    }
]
const defaultEducations = [
    {
      id: 1, 
      formData: {
        university: 'university of ilorin, kwara',
        degree: 'Bsc',
        subject: 'Social sciences',
        from: '2015',
        to: '2020',
      } 
    },
    {
      id: 2, 
      formData: {
        university: 'university of ibadan, oyo',
        degree: 'masters',
        subject: 'Science',
        from: '2020',
        to: '2021',
      } 
    },
    {
      id: 3, 
      formData: {
        university: 'university of lagos, lagos',
        degree: 'MBBS',
        subject: 'medicine',
        from: '2012',
        to: '2018',
      } 
    }
]
export {defaultWorks, defaultEducations, defaultPersonal}