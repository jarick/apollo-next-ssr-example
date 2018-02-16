const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/test')

const PageSchema = Schema({
  tag: { type: String, required: true, enum: ['page', 'news'] },
  code: { type: String, required: true },
  title: { type: String, required: true },
  preview: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, required: true },
  section: { type: Number, required: true },
  external_id: { type: String },
  status: { type: Number, default: 1 },
  date: { type: Date, default: Date.now },
}, { versionKey: false })
PageSchema.index({ tag: 1, status: 1, code: 1 })
PageSchema.index({ tag: 1, status: 1, section: 1, date: -1 })
PageSchema.index({ body: 'text', title: 'text', date: -1 }, { default_language: 'ru' })
const Page = mongoose.model('Page', PageSchema)

const TemplateSchema = Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  thesis: { type: String, required: true },
  email: { type: String, required: true },
  footer: { type: String, required: true }
}, { versionKey: false })
TemplateSchema.index({ code: 1 })
const Template = mongoose.model('Template', TemplateSchema)

const MenuSchema = Schema({
  tag: { type: String, required: true, enum: ['main'] },
  sort: { type: Number, default: 100 },
  code: { type: String, required: true },
  label: { type: String, required: true },
  url: { type: String, required: true },
  exact: { type: Boolean, default: false },
  external: { type: Boolean, default: false }
}, { versionKey: false })
MenuSchema.index({ tag: 1, sort: 1 })
const Menu = mongoose.model('Menu', MenuSchema, 'menu')

const FileSchema = Schema({
  tag: { type: String, required: true, enum: ['file', 'folder'] },
  path: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true }
}, { versionKey: false })
FileSchema.index({ path: 1 })
const File = mongoose.model('File', FileSchema)

const RedirectSchema = Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
}, { versionKey: false })

const Redirect = mongoose.model('Redirect', RedirectSchema)
RedirectSchema.index({ from: 1 })

module.exports = { Page, Template, Menu, File, Redirect }
