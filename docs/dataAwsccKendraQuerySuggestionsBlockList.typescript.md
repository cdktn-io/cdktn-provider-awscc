# `dataAwsccKendraQuerySuggestionsBlockList` Submodule <a name="`dataAwsccKendraQuerySuggestionsBlockList` Submodule" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKendraQuerySuggestionsBlockList <a name="DataAwsccKendraQuerySuggestionsBlockList" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/kendra_query_suggestions_block_list awscc_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.Initializer"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

new dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList(scope: Construct, id: string, config: DataAwsccKendraQuerySuggestionsBlockListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig">DataAwsccKendraQuerySuggestionsBlockListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig">DataAwsccKendraQuerySuggestionsBlockListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKendraQuerySuggestionsBlockList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isConstruct"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isTerraformElement"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isTerraformDataSource"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.generateConfigForImport"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccKendraQuerySuggestionsBlockList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKendraQuerySuggestionsBlockList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKendraQuerySuggestionsBlockList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/kendra_query_suggestions_block_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKendraQuerySuggestionsBlockList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">querySuggestionsBlockListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference">DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList">DataAwsccKendraQuerySuggestionsBlockListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `querySuggestionsBlockListId`<sup>Required</sup> <a name="querySuggestionsBlockListId" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```typescript
public readonly querySuggestionsBlockListId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```typescript
public readonly sourceS3Path: DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference">DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.tags"></a>

```typescript
public readonly tags: DataAwsccKendraQuerySuggestionsBlockListTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList">DataAwsccKendraQuerySuggestionsBlockListTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKendraQuerySuggestionsBlockListConfig <a name="DataAwsccKendraQuerySuggestionsBlockListConfig" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.Initializer"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

const dataAwsccKendraQuerySuggestionsBlockListConfig: dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/kendra_query_suggestions_block_list#id DataAwsccKendraQuerySuggestionsBlockList#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKendraQuerySuggestionsBlockListSourceS3Path <a name="DataAwsccKendraQuerySuggestionsBlockListSourceS3Path" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

const dataAwsccKendraQuerySuggestionsBlockListSourceS3Path: dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3Path = { ... }
```


### DataAwsccKendraQuerySuggestionsBlockListTags <a name="DataAwsccKendraQuerySuggestionsBlockListTags" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTags.Initializer"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

const dataAwsccKendraQuerySuggestionsBlockListTags: dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

new dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3Path">DataAwsccKendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraQuerySuggestionsBlockListSourceS3Path;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListSourceS3Path">DataAwsccKendraQuerySuggestionsBlockListSourceS3Path</a>

---


### DataAwsccKendraQuerySuggestionsBlockListTagsList <a name="DataAwsccKendraQuerySuggestionsBlockListTagsList" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.Initializer"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

new dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.get"></a>

```typescript
public get(index: number): DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference <a name="DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraQuerySuggestionsBlockList } from '@cdktn/provider-awscc'

new dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTags">DataAwsccKendraQuerySuggestionsBlockListTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraQuerySuggestionsBlockListTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraQuerySuggestionsBlockList.DataAwsccKendraQuerySuggestionsBlockListTags">DataAwsccKendraQuerySuggestionsBlockListTags</a>

---



