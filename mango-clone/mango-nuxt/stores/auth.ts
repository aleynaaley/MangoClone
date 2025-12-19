import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types'

export const useAuthStore = defineStore('auth', () => {
    // Kullanıcı bilgisi (Başta null, yani giriş yapılmamış)
    const user = ref<User | null>(null)

    // Giriş yapılmış mı kontrolü
    const isAuthenticated = computed(() => !!user.value)

    // Sahte Giriş Fonksiyonu (Login)
    const login = (email: string, password: string) => {
        if (password === '123456') {
            user.value = {
                id: 1,
                // BURASI DEĞİŞTİ: Sonuna .toUpperCase() ekledik.
                // Artık "test" değil "TEST" olarak kaydedilecek.
                name: email.split('@')[0].toUpperCase(),
                email: email,
                token: 'fake-jwt-token-123'
            }
            return true
        }
        return false
    }

    // Çıkış Fonksiyonu (Logout)
    const logout = () => {
        user.value = null
    }

    return {
        user,
        isAuthenticated,
        login,
        logout
    }
})