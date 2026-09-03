# `dataAwsccMedialiveMultiplexprogram` Submodule <a name="`dataAwsccMedialiveMultiplexprogram` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveMultiplexprogram <a name="DataAwsccMedialiveMultiplexprogram" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/medialive_multiplexprogram awscc_medialive_multiplexprogram}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram(scope: Construct, id: string, config: DataAwsccMedialiveMultiplexprogramConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig">DataAwsccMedialiveMultiplexprogramConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig">DataAwsccMedialiveMultiplexprogramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveMultiplexprogram to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveMultiplexprogram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveMultiplexprogram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexId">multiplexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexProgramSettings">multiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.packetIdentifiersMap">packetIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.pipelineDetails">pipelineDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList">DataAwsccMedialiveMultiplexprogramPipelineDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.programName">programName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="multiplexProgramSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.multiplexProgramSettings"></a>

```typescript
public readonly multiplexProgramSettings: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a>

---

##### `packetIdentifiersMap`<sup>Required</sup> <a name="packetIdentifiersMap" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.packetIdentifiersMap"></a>

```typescript
public readonly packetIdentifiersMap: DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a>

---

##### `pipelineDetails`<sup>Required</sup> <a name="pipelineDetails" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.pipelineDetails"></a>

```typescript
public readonly pipelineDetails: DataAwsccMedialiveMultiplexprogramPipelineDetailsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList">DataAwsccMedialiveMultiplexprogramPipelineDetailsList</a>

---

##### `preferredChannelPipeline`<sup>Required</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.preferredChannelPipeline"></a>

```typescript
public readonly preferredChannelPipeline: string;
```

- *Type:* string

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogram.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveMultiplexprogramConfig <a name="DataAwsccMedialiveMultiplexprogramConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexprogramConfig: dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/medialive_multiplexprogram#id DataAwsccMedialiveMultiplexprogram#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexprogramMultiplexProgramSettings: dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings = { ... }
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor: dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor = { ... }
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings: dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings = { ... }
```


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings: dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings = { ... }
```


### DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap <a name="DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexprogramPacketIdentifiersMap: dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap = { ... }
```


### DataAwsccMedialiveMultiplexprogramPipelineDetails <a name="DataAwsccMedialiveMultiplexprogramPipelineDetails" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexprogramPipelineDetails: dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber">programNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">serviceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings">videoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredChannelPipeline`<sup>Required</sup> <a name="preferredChannelPipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```typescript
public readonly preferredChannelPipeline: string;
```

- *Type:* string

---

##### `programNumber`<sup>Required</sup> <a name="programNumber" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```typescript
public readonly programNumber: number;
```

- *Type:* number

---

##### `serviceDescriptor`<sup>Required</sup> <a name="serviceDescriptor" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```typescript
public readonly serviceDescriptor: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a>

---

##### `videoSettings`<sup>Required</sup> <a name="videoSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```typescript
public readonly videoSettings: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">constantBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">statmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constantBitrate`<sup>Required</sup> <a name="constantBitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```typescript
public readonly constantBitrate: number;
```

- *Type:* number

---

##### `statmuxSettings`<sup>Required</sup> <a name="statmuxSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```typescript
public readonly statmuxSettings: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---


### DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">minimumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

---

##### `minimumBitrate`<sup>Required</sup> <a name="minimumBitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```typescript
public readonly minimumBitrate: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---


### DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference <a name="DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids">audioPids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids">dvbSubPids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid">dvbTeletextPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid">etvPlatformPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid">etvSignalPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids">klvDataPids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid">pcrPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid">pmtPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid">privateMetadataPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids">scte27Pids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid">scte35Pid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid">timedMetadataPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid">videoPid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioPids`<sup>Required</sup> <a name="audioPids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids"></a>

```typescript
public readonly audioPids: number[];
```

- *Type:* number[]

---

##### `dvbSubPids`<sup>Required</sup> <a name="dvbSubPids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids"></a>

```typescript
public readonly dvbSubPids: number[];
```

- *Type:* number[]

---

##### `dvbTeletextPid`<sup>Required</sup> <a name="dvbTeletextPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid"></a>

```typescript
public readonly dvbTeletextPid: number;
```

- *Type:* number

---

##### `etvPlatformPid`<sup>Required</sup> <a name="etvPlatformPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid"></a>

```typescript
public readonly etvPlatformPid: number;
```

- *Type:* number

---

##### `etvSignalPid`<sup>Required</sup> <a name="etvSignalPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid"></a>

```typescript
public readonly etvSignalPid: number;
```

- *Type:* number

---

##### `klvDataPids`<sup>Required</sup> <a name="klvDataPids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids"></a>

```typescript
public readonly klvDataPids: number[];
```

- *Type:* number[]

---

##### `pcrPid`<sup>Required</sup> <a name="pcrPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid"></a>

```typescript
public readonly pcrPid: number;
```

- *Type:* number

---

##### `pmtPid`<sup>Required</sup> <a name="pmtPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid"></a>

```typescript
public readonly pmtPid: number;
```

- *Type:* number

---

##### `privateMetadataPid`<sup>Required</sup> <a name="privateMetadataPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid"></a>

```typescript
public readonly privateMetadataPid: number;
```

- *Type:* number

---

##### `scte27Pids`<sup>Required</sup> <a name="scte27Pids" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids"></a>

```typescript
public readonly scte27Pids: number[];
```

- *Type:* number[]

---

##### `scte35Pid`<sup>Required</sup> <a name="scte35Pid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid"></a>

```typescript
public readonly scte35Pid: number;
```

- *Type:* number

---

##### `timedMetadataPid`<sup>Required</sup> <a name="timedMetadataPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid"></a>

```typescript
public readonly timedMetadataPid: number;
```

- *Type:* number

---

##### `videoPid`<sup>Required</sup> <a name="videoPid" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid"></a>

```typescript
public readonly videoPid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap">DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap</a>

---


### DataAwsccMedialiveMultiplexprogramPipelineDetailsList <a name="DataAwsccMedialiveMultiplexprogramPipelineDetailsList" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference <a name="DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplexprogram } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline">activeChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails">DataAwsccMedialiveMultiplexprogramPipelineDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeChannelPipeline`<sup>Required</sup> <a name="activeChannelPipeline" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline"></a>

```typescript
public readonly activeChannelPipeline: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexprogramPipelineDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplexprogram.DataAwsccMedialiveMultiplexprogramPipelineDetails">DataAwsccMedialiveMultiplexprogramPipelineDetails</a>

---



