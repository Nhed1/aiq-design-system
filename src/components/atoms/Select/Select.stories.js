import React from 'react'

import base from 'paths.macro'
import { atomicDir } from '../../utils/helpers/atomicDir'

import { Select } from './Select'

export default {
  component: Select,
  title: atomicDir(base)
}

export const basic = () => <Select />
