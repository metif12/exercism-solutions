defmodule RNATranscription do
  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

  iex> RNATranscription.to_rna('ACTG')
  'UGAC'
  """

  def converter([]), do: []
  def converter(?G), do: ?C
  def converter(?C), do: ?G
  def converter(?T), do: ?A
  def converter(?A), do: ?U


  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    dna
    |> Enum.map(&converter/1)
  end
end
