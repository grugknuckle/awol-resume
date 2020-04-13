<template>
  <v-card :dark="dark" :light="!dark" class="ma-2 py-2" :color="bg(dark)">
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
import { mdiEmail, mdiWeb, mdiCakeVariant, mdiMapMarker } from '@mdi/js'
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiFacebook } from '@mdi/js'
import { mdiBullseye, mdiBiohazard, mdiAutoFix, mdiKarate, mdiAccountGroup, mdiBookOpenPageVariant, mdiAndroidDebugBridge } from '@mdi/js'

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
              icon: mdiEmail,
              text: 'aaron.wolbach@gmail.com'
            },
            {
              name: 'Website',
              icon: mdiWeb,
              text: 'goingawol.com'
            },
            {
              name: 'Birth Date',
              icon: mdiCakeVariant,
              text: 'Dec 12, 1972'
            },
            {
              name: 'Home',
              icon: mdiMapMarker,
              text: 'Turners Falls, MA'
            }
          ]
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: mdiGithub,
              text: 'github.com/grugknuckle',
              link: 'https://github.com/grugknuckle'
            },
            {
              icon: mdiLinkedin,
              text: 'linkedin.com/in/aaron-wolbach',
              link: 'https://www.linkedin.com/in/aaron-wolbach-883827179/'
            },
            {
              icon: mdiTwitter,
              text: 'twitter.com/AaronWolbach',
              link: 'https://twitter.com/AaronWolbach'
            },
            {
              icon: mdiFacebook,
              text: 'facebook.com/aaron.wolbach',
              link: 'https://www.facebook.com/aaron.wolbach'
            }
          ]
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: mdiBullseye,
              text: 'Getting out of Safe Zone'
            },
            {
              icon: mdiBiohazard,
              text: 'Challenges'
            },
            {
              icon: mdiAutoFix,
              text: 'Hacking Stuffs'
            },
            {
              icon: mdiKarate,
              text: 'Jiu Jitsu'
            },
            {
              icon: mdiAccountGroup,
              text: 'Parenthood'
            },
            {
              icon: mdiBookOpenPageVariant,
              text: 'Books'
            },
            {
              icon: mdiAndroidDebugBridge,
              text: 'Squashing Bugs!'
            }
          ]
        }
      }
    }
  },
  props: {
    dark: { type: Boolean, default: true }
  }
}
</script>

