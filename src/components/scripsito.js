
const setup = () => {
  const getTheme = () => {
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }
    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const setTheme = (value) => {
    window.localStorage.setItem('dark', value)
  }

  const getColor = () => {
    if (window.localStorage.getItem('color')) {
      return window.localStorage.getItem('color')
    }
    return 'cyan'
  }

  const setColors = (color) => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', `var(--color-${color})`)
    root.style.setProperty('--color-primary-50', `var(--color-${color}-50)`)
    root.style.setProperty('--color-primary-100', `var(--color-${color}-100)`)
    root.style.setProperty('--color-primary-light', `var(--color-${color}-light)`)
    root.style.setProperty('--color-primary-lighter', `var(--color-${color}-lighter)`)
    root.style.setProperty('--color-primary-dark', `var(--color-${color}-dark)`)
    root.style.setProperty('--color-primary-darker', `var(--color-${color}-darker)`)
    this.selectedColor = color
    window.localStorage.setItem('color', color)
  }

  return {
    loading: true,
    isDark: getTheme(),
    color: getColor(),
    selectedColor: 'cyan',
    toggleTheme() {
      this.isDark = !this.isDark
      setTheme(this.isDark)
    },
    setLightTheme() {
      this.isDark = false
      setTheme(this.isDark)
    },
    setDarkTheme() {
      this.isDark = true
      setTheme(this.isDark)
    },
    setColors,
    watchScreen() {
      if (window.innerWidth <= 1024) {
        this.isSidebarOpen = false
        this.isSecondSidebarOpen = false
      } else if (window.innerWidth >= 1024) {
        this.isSidebarOpen = true
        this.isSecondSidebarOpen = true
      }
    },
    isSidebarOpen: window.innerWidth >= 1024 ? true : false,
    toggleSidbarMenu() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    isSecondSidebarOpen: window.innerWidth >= 1024 ? true : false,
    toggleSecondSidbarColumn() {
      this.isSecondSidebarOpen = !this.isSecondSidebarOpen
    },
    isSettingsPanelOpen: false,
    openSettingsPanel() {
      this.isSettingsPanelOpen = true
      this.$nextTick(() => {
        this.$refs.settingsPanel.focus()
      })
    },
    isSearchPanelOpen: false,
    openSearchPanel() {
      this.isSearchPanelOpen = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    },
  }
}
