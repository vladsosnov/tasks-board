<template>
  <div class="text-editor">
    <editor-menu-bar
      v-slot="{ commands, isActive }"
      :editor="editor"
    >
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          Bold
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          Italic
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          Strike
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          Underline
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          Code
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>
      </div>
    </editor-menu-bar>
    <editor-content
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Heading,
  Bold,
  Code,
  Italic,
  Strike,
  Underline
} from 'tiptap-extensions'

export default {
  name: 'UITextEditor',
  components: {
    EditorMenuBar,
    EditorContent
  },
  data () {
    return {
      modalVisible: true,
      editor: new Editor({
        extensions: [
          new Heading({ levels: [1, 2, 3] }),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline()
        ],
        content: 'Write here your description'
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>
