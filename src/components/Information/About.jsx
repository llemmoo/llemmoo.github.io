import React, { Component } from 'react'
import { motion } from "framer-motion"

export default class About extends Component {
  render() {
    return (
        <>
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>About</h1>
        </motion.div>
        </>
    )
  }
}
