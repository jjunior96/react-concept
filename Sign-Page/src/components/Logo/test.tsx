import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { getByText } = render(<Logo />);

    const linkElement = getByText(/logo/i);

    expect(linkElement).toBeInTheDocument();

    // expect(screen.getByRole('Logo', { name: /logo/i })).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });
});
