import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { container } = render(<Logo />);

    expect(screen.getByRole('Logo', { name: /logo/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
