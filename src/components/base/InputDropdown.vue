<script setup lang="ts">
import type { SafeSet } from '@/services/util/safe-types/SafeSet'

defineProps<{
  options: SafeSet<string>
}>()
</script>
