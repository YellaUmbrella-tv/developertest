# Short test for NodeJS development.

Google could be your friend.

You may add npm packages if you feel they would be useful.

Please explain in comments in your code how you approach the problem.

Please add notes in comments in the code about concerns you have about the imlpementation - e.g. what could go wrong?

# Instructions:

- 1. Ensure that the ./output folder exists before writing to it.

- 2. Ensure that the process overwrites any previous output.

- 3. Using the json data in ./data/data.json:

- For each item in the structure which ends with .filetemplate

- Read the 'base' array.

- Combine the entries mentioned in the base array (including any 'base' entries they may have) in order, and then merge in the data from the .filetemplate entry.

- Add the newly created entry to the output structure.

- 4. Write the output structure to ./output/output.json as a prettified json.

The intent here is that the entries in the data.json are overlayed, with matching item names taking thier values from the higher structures in the 'stack'.

e.g. 
```
{
  fred: {
    john: 'batman',
    james: 'hero'
  }
}
```

overlayed with

```
{
  john: 'tailor',
  fred: {
    james: 'robin'
  }
}
```

results in 

```
{
  john: 'tailor',
  fred: {
    john: 'batman',
    james: 'robin'
  }
}
```
