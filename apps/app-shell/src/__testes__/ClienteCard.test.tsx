import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ClienteCard } from '../../../../packages/design-system/src/components/ClienteCard';

const mockClient = {
  id: 1,
  name: 'Victor',
  salary: 12345,
  companyValuation: 67890,
}

describe('ClienteCard', () => {
  it('renderiza corretamente', () => {
    render(
      <ClienteCard
        {...mockClient}
        isSelected={false}
        onEdit={() => { } }
        onDelete={() => { } }
        onSelect={() => { } }
        onAddToSelecionados={() => { } }
        onRemoveFromSelecionados={() => { } }      />
    )

    expect(screen.getByText('Victor')).toBeInTheDocument()
    expect(screen.getByText('Salário: R$ 12.345,00')).toBeInTheDocument()
    expect(screen.getByText((content) =>
        content.includes('Empresa: R$ 67.890,00')
      )).toBeInTheDocument()
      })

  it('chama onEdit ao clicar no botão de editar', () => {
    const onEdit = vi.fn()
    render(
      <ClienteCard
        {...mockClient}
        isSelected={false}
        onEdit={onEdit}
        onDelete={() => { } }
        onSelect={() => { } }
        onAddToSelecionados={() => { } }
        onRemoveFromSelecionados={() => { } }      />
    )

    fireEvent.click(screen.getByTestId('edit-button'))
    expect(onEdit).toHaveBeenCalled()
  })

  it('chama onDelete ao clicar no botão de excluir', () => {
    const onDelete = vi.fn()
    render(
      <ClienteCard
        {...mockClient}
        isSelected={false}
        onEdit={() => { } }
        onDelete={onDelete}
        onSelect={() => { } }
        onAddToSelecionados={() => { } }
        onRemoveFromSelecionados={() => { } }      />
    )

    fireEvent.click(screen.getByTestId('delete-button'))
    expect(onDelete).toHaveBeenCalled()
  })

  it('mostra botão de adicionar quando não selecionado', () => {
    const onAdd = vi.fn()
    render(
      <ClienteCard
        {...mockClient}
        isSelected={false}
        onEdit={() => { } }
        onDelete={() => { } }
        onSelect={() => { } }
        onAddToSelecionados={onAdd}
        onRemoveFromSelecionados={() => { } }      />
    )

    fireEvent.click(screen.getByTestId('add-button'))
    expect(onAdd).toHaveBeenCalled()
  })

  it('mostra botão de remover quando selecionado', () => {
    const onRemove = vi.fn()
    render(
      <ClienteCard
        {...mockClient}
        isSelected={true}
        onEdit={() => { } }
        onDelete={() => { } }
        onSelect={() => { } }
        onAddToSelecionados={() => { } }
        onRemoveFromSelecionados={onRemove}      />
    )

    fireEvent.click(screen.getByTestId('remove-button'))
    expect(onRemove).toHaveBeenCalled()
  })
})
