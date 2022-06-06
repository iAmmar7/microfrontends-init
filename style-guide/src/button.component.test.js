import { render } from '@testing-library/react';
import Button from './button.component';

describe('Button component', () => {
  it('should be in the document', () => {
    const { getByText } = render(<Button>Button</Button>);
    expect(getByText(/Button!/i)).toBeInTheDocument();
  });
});
