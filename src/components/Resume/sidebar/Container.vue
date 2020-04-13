<template>
  <v-card color="grey darken-3" dark ma-2>
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Aaron
          <span class="light-blue--text text--lighten-3">Wolbach</span>
        </h1>
        <span>A passionate javascript developer</span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/components/Resume/sidebar/Avatar'
import SidebarSection from '@/components/Resume/sidebar/Section'

export default {
  name: 'Sidebar',
  components: {
    SidebarSection,
    Avatar
  },
  data() {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'aaron.wolbach@gmail.com'
            },
            {
              name: 'Website',
              icon: 'mdi-web',
              text: 'goingawol.com'
            },
            {
              name: 'Birth Date',
              icon: 'mdi-cake-variant',
              text: 'Dec 12, 1972'
            },
            {
              name: 'Home',
              icon: 'mdi-map-marker',
              text: 'Turners Falls, MA'
            }
          ]
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'md-github',
              text: 'github.com/grugknuckle',
              link: 'https://github.com/grugknuckle'
            },
            {
              icon: 'mdi-linkedin',
              text: 'linkedin.com/in/aaron-wolbach',
              link: 'https://www.linkedin.com/in/aaron-wolbach-883827179/'
            },
            {
              icon: 'mdi-twitter',
              text: 'twitter.com/AaronWolbach',
              link: 'https://twitter.com/AaronWolbach'
            },
            {
              icon: 'mdi-facebook',
              text: 'facebook.com/aaron.wolbach',
              link: 'https://www.facebook.com/aaron.wolbach'
            }
          ]
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-bullseye',
              text: 'Getting out of Safe Zone'
            },
            {
              icon: 'mdi-biohazard',
              text: 'Challenges'
            },
            {
              icon: 'mdi-auto-fix',
              text: 'Hacking Stuffs'
            },
            {
              icon: 'mdi-karate',
              text: 'Jiu Jitsu'
            },
            {
              icon: 'mdi-account-group',
              text: 'Parenthood'
            },
            {
              icon: 'mdi-book-open-page-variant',
              text: 'Books'
            },
            {
              icon: 'mdi-android-debug-bridge',
              text: 'Squashing Bugs!'
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
.sidebar {
  background: rgb(45, 42, 61);
}
</style>
