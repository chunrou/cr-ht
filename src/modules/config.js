import { Component } from 'react'
import axios from 'axios'
import store from '../store'

Component.prototype.$http = axios
Component.prototype.$store = store