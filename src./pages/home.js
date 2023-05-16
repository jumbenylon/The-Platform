
import React from 'react';
import {
  BaseLayout, ClientFreelance, PlatformMarketplace, Freelance,
  FreelanceMarketPlace, Header, OpenNote, YourPlatform
} from '../components';

const HomePage = () => {
  return (
    <BaseLayout>
      <Header />
      <PlatformMarketplace />
      <FreelanceMarketPlace />
      <ClientFreelance />
      <Freelance />
      <OpenNote />
      <YourPlatform />
    </BaseLayout>
  );
}

export default HomePage;
