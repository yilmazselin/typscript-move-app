type List = {
  id: string;
  name: string;
  files: File[];
}[];

type File = {
  id: string;
  name: string;
};

const fileSearchError = (list: List, source: string, destination: string) => {
  const folderIndex = list.findIndex((folder) => folder.id === source);

  if (folderIndex !== -1) {
    // throws error if given source is not a file
    throw new Error('You cannot move a folder');
  }

  const destinationIndex = list.findIndex((folder) =>
    folder.files.some((file) => file.id === destination),
  );

  if (destinationIndex !== -1) {
    // throws error if given destination is not a folder
    throw new Error('You cannot specify a file as the destination');
  }

  throw new Error('File not found');
};

const getIndexByFileId = (list: List, source: string, destination: string): Array<number> => {
  const folderIndex = list.findIndex((folder) => folder.files.some((file) => file.id === source));
  const destinationIndex = list.findIndex(
    (destinationFolder) => destinationFolder.id === destination,
  );
    
  if (folderIndex === -1 || destinationIndex === -1) {
    fileSearchError(list, source, destination);
  }

  const fileIndex = list[folderIndex].files.findIndex((file) => file.id === source);
  return [folderIndex, destinationIndex, fileIndex];
};


export default function move(list: List, source: string, destination: string): List {
  const clonedList = JSON.parse(JSON.stringify(list));
  const [folderIndex, destinationIndex, fileIndex] = getIndexByFileId(list, source, destination);

  const file = clonedList[folderIndex].files.splice(fileIndex, 1)[0];
  clonedList[destinationIndex].files.push(file);

  return clonedList;
}
