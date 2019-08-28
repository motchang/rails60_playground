import * as React from 'react'
import { useState } from '@wordpress/element'
import {
  BlockEditorKeyboardShortcuts,
  BlockEditorProvider,
  BlockList,
  WritingFlow,
  ObserveTyping,
} from '@wordpress/block-editor'
import {
  Popover,
  SlotFillProvider,
  DropZoneProvider,
} from '@wordpress/components'
import { registerCoreBlocks } from '@wordpress/block-library'
import '@wordpress/format-library'

import '@wordpress/components/build-style/style.css'
import '@wordpress/block-editor/build-style/style.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/editor.css'
import '@wordpress/block-library/build-style/theme.css'
import '@wordpress/format-library/build-style/style.css'

const BlockEditor = () => {
  const [blocks, updateBlocks] = useState([])

  return (
    <>
      <SlotFillProvider>
        <DropZoneProvider>
          <BlockEditorProvider
            value={blocks}
            onInput={updateBlocks}
            onChange={updateBlocks}
          >
            <div className="editor-styles-wrapper">
              <BlockEditorKeyboardShortcuts />
              <WritingFlow>
                <ObserveTyping>
                  <BlockList />
                </ObserveTyping>
              </WritingFlow>
            </div>
            <Popover.Slot />
          </BlockEditorProvider>
        </DropZoneProvider>
      </SlotFillProvider>
    </>
  )
}

registerCoreBlocks()

export default BlockEditor
