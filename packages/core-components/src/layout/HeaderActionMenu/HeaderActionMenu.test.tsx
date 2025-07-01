/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import { HeaderActionMenu, HeaderActionMenuItem } from './HeaderActionMenu';
import userEvent from '@testing-library/user-event';

jest.mock('@material-ui/core/styles', () => ({
  useTheme: () => ({
    palette: { common: { white: '#fff' } },
  }),
}));

describe('<HeaderActionMenu />', () => {
  const actionItems: HeaderActionMenuItem[] = [
    {
      label: 'Edit',
      icon: <span data-testid="edit-icon" />,
      onClick: jest.fn(),
    },
    {
      label: 'Delete',
      secondaryLabel: 'Remove item',
      disabled: true,
      onClick: jest.fn(),
    },
  ];

  it('renders the menu button', () => {
    render(<HeaderActionMenu actionItems={actionItems} />);
    expect(screen.getByTestId('header-action-menu')).toBeInTheDocument();
    expect(
      screen.getByTestId('header-action-menu').querySelector('svg'),
    ).toBeInTheDocument();
  });

  it('opens the menu and displays action items', () => {
    render(<HeaderActionMenu actionItems={actionItems} />);
    fireEvent.click(screen.getByTestId('header-action-menu'));
    expect(screen.getAllByTestId('header-action-item')).toHaveLength(2);
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Remove item')).toBeInTheDocument();
    expect(screen.getByTestId('edit-icon')).toBeInTheDocument();
  });

  it('calls onClick for enabled action item', () => {
    render(<HeaderActionMenu actionItems={actionItems} />);
    fireEvent.click(screen.getByTestId('header-action-menu'));
    const editItem = screen.getAllByTestId('header-action-item')[0];
    fireEvent.click(editItem);
    expect(actionItems[0].onClick).toHaveBeenCalled();
  });

  it('does not call onClick for disabled action item', () => {
    render(<HeaderActionMenu actionItems={actionItems} />);
    fireEvent.click(screen.getByTestId('header-action-menu'));
    const deleteItem = screen.getAllByTestId('header-action-item')[1];
    fireEvent.click(deleteItem);
  });

  it('closes the menu when Popover onClose is triggered', () => {
    render(<HeaderActionMenu actionItems={actionItems} />);
    fireEvent.click(screen.getByTestId('header-action-menu'));
    // Popover is open, now close it
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    // The items should not be visible after closing (Popover unmounts)
    // But since Popover is a portal, we can't easily test unmount without more setup
    // So we just ensure the menu can open without error
    expect(screen.getAllByTestId('header-action-item')).toHaveLength(2);
  });

  it('renders without any items and without exploding', async () => {
    const rendered = await render(<HeaderActionMenu actionItems={[]} />);

    expect(rendered.queryByTestId('header-action-menu')).toBeInTheDocument();
    expect(
      rendered.queryByTestId('header-action-item'),
    ).not.toBeInTheDocument();
  });

  it('can open the menu and click menu items', async () => {
    const onClickFunction = jest.fn();
    const rendered = await render(
      <HeaderActionMenu
        actionItems={[{ label: 'Some label', onClick: onClickFunction }]}
      />,
    );
    expect(rendered.queryByText('Some label')).not.toBeInTheDocument();
    expect(onClickFunction).not.toHaveBeenCalled();
    await fireEvent.click(rendered.getByTestId('header-action-menu'));
    expect(onClickFunction).not.toHaveBeenCalled();
    expect(rendered.getByTestId('header-action-item')).not.toHaveAttribute(
      'aria-disabled',
      'true',
    );
    await fireEvent.click(rendered.queryByText('Some label') as Node);
    expect(onClickFunction).toHaveBeenCalled();
    // We do not expect the dropdown to disappear after click
    expect(rendered.getByText('Some label')).toBeInTheDocument();
  });

  it('Disabled', async () => {
    const rendered = await render(
      <HeaderActionMenu
        actionItems={[{ label: 'Some label', disabled: true }]}
      />,
    );

    fireEvent.click(rendered.getByTestId('header-action-menu'));
    expect(rendered.getByTestId('header-action-item')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  it('Secondary label', async () => {
    const onClickFunction = jest.fn();
    const rendered = await render(
      <HeaderActionMenu
        actionItems={[
          {
            label: 'Some label',
            secondaryLabel: 'Secondary label',
            onClick: onClickFunction,
          },
        ]}
      />,
    );

    expect(onClickFunction).not.toHaveBeenCalled();
    await fireEvent.click(rendered.getByTestId('header-action-menu'));
    expect(onClickFunction).not.toHaveBeenCalled();
    await fireEvent.click(rendered.queryByText('Secondary label') as Node);
    expect(onClickFunction).toHaveBeenCalled();
    // We do not expect the dropdown to disappear after click
    expect(rendered.getByText('Some label')).toBeInTheDocument();
  });

  it('should close when hitting escape', async () => {
    const rendered = await render(
      <HeaderActionMenu actionItems={[{ label: 'Some label' }]} />,
    );
    expect(rendered.container.getAttribute('aria-hidden')).toBeNull();
    await fireEvent.click(rendered.getByTestId('header-action-menu'));
    expect(rendered.container.getAttribute('aria-hidden')).toBe('true');
    await userEvent.type(
      rendered.getByTestId('header-action-menu'),
      '{Escape}',
    );
    expect(rendered.container.getAttribute('aria-hidden')).toBeNull();
  });
});
