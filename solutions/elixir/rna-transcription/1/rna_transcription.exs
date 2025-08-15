defmodule RNATranscription do
  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

  iex> RNATranscription.to_rna('ACTG')
  'UGAC'
  """


  def converter([first|rest]) do
    t = case [first] do
      'G' -> 'C'
      'C' -> 'G'
      'T' -> 'A'
      'A' -> 'U'
    end

    [h|_] = t

    [h| converter rest]
  end

  def converter([]), do: []


  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    converter dna
  end
end
