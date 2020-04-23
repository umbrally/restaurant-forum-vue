import { apiHelper } from './../utils/helpers'

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    getSingle({ categoryId }) {
      return apiHelper.get(`/admin/categories/${categoryId}`)
    },
    create({ newCategoryName }) {
      return apiHelper.post('/admin/categories', {
        name: newCategoryName
      })
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    }
  },
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },

    changeRole({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
    },
  }
}