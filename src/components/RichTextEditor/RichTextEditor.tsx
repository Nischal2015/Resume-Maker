import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function RichTextEditor({
  storeFunc,
  sectionType,
  name,
  value,
}: {
  storeFunc: ({ id }: { id?: string }) => void;
  sectionType?: string;
  name: string;
  value: string;
}) {
  // any needs to be fixed later
  const editorRef = useRef<any>(null);
  const sectionName = sectionType?.split(' ');

  return (
    <Editor
      value={value}
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      onInit={(editor) => {
        editorRef.current = editor;
      }}
      init={{
        height: 250,
        menubar: false,
        placeholder: 'Enter description...',
        plugins: ['lists'],
        toolbar:
          'undo redo | formatselect | '
          + 'bold italic backcolor | bullist numlist outdent indent | '
          + 'removeformat | help',
        content_style:
          'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        extended_valid_elements: 'li[class=richtext-li],p[class=richtext-p]',
      }}
      onEditorChange={(newValue) => {
        if (Array.isArray(sectionName)) {
          storeFunc({
            id: sectionName[1],
            [name]: newValue,
          });
        } else {
          storeFunc({
            [name]: newValue,
          });
        }
      }}
    />
  );
}
