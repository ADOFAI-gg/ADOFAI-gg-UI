<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Utils/Table'
	})
</script>

<Story name="Default">
	<table class="table" style="width: 100%;">
		<thead>
			<tr>
				<th align="left">Col 1</th>
				<th align="left">Col 2</th>
				<th align="left">Col 3</th>
				<th align="left">Col 4</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Wow</td>
				<td>Sans</td>
				<td>GanjangFactory</td>
				<td>Hello</td>
			</tr>
			<tr>
				<td>Wow</td>
				<td>Sans</td>
				<td>GanjangFactory</td>
				<td>Hello</td>
			</tr>
			<tr>
				<td>Wow</td>
				<td>Sans</td>
				<td>GanjangFactory</td>
				<td>Hello</td>
			</tr>
			<tr>
				<td>Wow</td>
				<td>Sans</td>
				<td>GanjangFactory</td>
				<td>Hello</td>
			</tr>
			<tr>
				<td>Wow</td>
				<td>Sans</td>
				<td>GanjangFactory</td>
				<td>Hello</td>
			</tr>
		</tbody>
	</table>
</Story>
