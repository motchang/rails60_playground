// eslint-disable-next-line
///<reference path='../../../node_modules/react-froala-wysiwyg/lib/index.d.ts' />
import * as React from 'react'
import FroalaEditorComponent from 'react-froala-wysiwyg'

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'

const FroalaEditor = () => (
  <FroalaEditorComponent
    tag="textarea"
    config={{
      pluginsEnabled: ['align', 'link'],
      language: 'ro',
      events: {
        initialized: (e: any) => {
          console.log('@@@@@@initialized', 'editor', e)
        },
      },
    }}
  />
)

export default FroalaEditor
