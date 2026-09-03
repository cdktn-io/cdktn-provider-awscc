# `dataAwsccFsxVolume` Submodule <a name="`dataAwsccFsxVolume` Submodule" id="@cdktn/provider-awscc.dataAwsccFsxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFsxVolume <a name="DataAwsccFsxVolume" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume awscc_fsx_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolume(scope: Construct, id: string, config: DataAwsccFsxVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig">DataAwsccFsxVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig">DataAwsccFsxVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFsxVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccFsxVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccFsxVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccFsxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFsxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.ontapConfiguration">ontapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.openZfsConfiguration">openZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList">DataAwsccFsxVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ontapConfiguration`<sup>Required</sup> <a name="ontapConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.ontapConfiguration"></a>

```typescript
public readonly ontapConfiguration: DataAwsccFsxVolumeOntapConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationOutputReference</a>

---

##### `openZfsConfiguration`<sup>Required</sup> <a name="openZfsConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.openZfsConfiguration"></a>

```typescript
public readonly openZfsConfiguration: DataAwsccFsxVolumeOpenZfsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tags"></a>

```typescript
public readonly tags: DataAwsccFsxVolumeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList">DataAwsccFsxVolumeTagsList</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFsxVolumeConfig <a name="DataAwsccFsxVolumeConfig" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeConfig: dataAwsccFsxVolume.DataAwsccFsxVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#id DataAwsccFsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFsxVolumeOntapConfiguration <a name="DataAwsccFsxVolumeOntapConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfiguration: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration = { ... }
```


### DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration <a name="DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfigurationAggregateConfiguration: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration = { ... }
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration = { ... }
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod = { ... }
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod = { ... }
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention = { ... }
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention = { ... }
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention = { ... }
```


### DataAwsccFsxVolumeOntapConfigurationTieringPolicy <a name="DataAwsccFsxVolumeOntapConfigurationTieringPolicy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOntapConfigurationTieringPolicy: dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy = { ... }
```


### DataAwsccFsxVolumeOpenZfsConfiguration <a name="DataAwsccFsxVolumeOpenZfsConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOpenZfsConfiguration: dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration = { ... }
```


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExports <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExports" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOpenZfsConfigurationNfsExports: dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports = { ... }
```


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations: dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations = { ... }
```


### DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot <a name="DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot: dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot = { ... }
```


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas: dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas = { ... }
```


### DataAwsccFsxVolumeTags <a name="DataAwsccFsxVolumeTags" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

const dataAwsccFsxVolumeTags: dataAwsccFsxVolume.DataAwsccFsxVolumeTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates">aggregates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate">constituentsPerAggregate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration">DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregates`<sup>Required</sup> <a name="aggregates" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates"></a>

```typescript
public readonly aggregates: string[];
```

- *Type:* string[]

---

##### `constituentsPerAggregate`<sup>Required</sup> <a name="constituentsPerAggregate" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate"></a>

```typescript
public readonly constituentsPerAggregate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration">DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration">aggregateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.junctionPath">junctionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType">ontapVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.securityStyle">securityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes">sizeInMegabytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration">snaplockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy">snapshotPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference">DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.volumeStyle">volumeStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration">DataAwsccFsxVolumeOntapConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregateConfiguration`<sup>Required</sup> <a name="aggregateConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration"></a>

```typescript
public readonly aggregateConfiguration: DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a>

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: string;
```

- *Type:* string

---

##### `junctionPath`<sup>Required</sup> <a name="junctionPath" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.junctionPath"></a>

```typescript
public readonly junctionPath: string;
```

- *Type:* string

---

##### `ontapVolumeType`<sup>Required</sup> <a name="ontapVolumeType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType"></a>

```typescript
public readonly ontapVolumeType: string;
```

- *Type:* string

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `sizeInMegabytes`<sup>Required</sup> <a name="sizeInMegabytes" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes"></a>

```typescript
public readonly sizeInMegabytes: string;
```

- *Type:* string

---

##### `snaplockConfiguration`<sup>Required</sup> <a name="snaplockConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration"></a>

```typescript
public readonly snaplockConfiguration: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a>

---

##### `snapshotPolicy`<sup>Required</sup> <a name="snapshotPolicy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy"></a>

```typescript
public readonly snapshotPolicy: string;
```

- *Type:* string

---

##### `storageEfficiencyEnabled`<sup>Required</sup> <a name="storageEfficiencyEnabled" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled"></a>

```typescript
public readonly storageEfficiencyEnabled: string;
```

- *Type:* string

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference">DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference</a>

---

##### `volumeStyle`<sup>Required</sup> <a name="volumeStyle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.volumeStyle"></a>

```typescript
public readonly volumeStyle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration">DataAwsccFsxVolumeOntapConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume">auditLogVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod">autocommitPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete">privilegedDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType">snaplockType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">volumeAppendModeEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration">DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogVolume`<sup>Required</sup> <a name="auditLogVolume" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```typescript
public readonly auditLogVolume: string;
```

- *Type:* string

---

##### `autocommitPeriod`<sup>Required</sup> <a name="autocommitPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```typescript
public readonly autocommitPeriod: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `privilegedDelete`<sup>Required</sup> <a name="privilegedDelete" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```typescript
public readonly privilegedDelete: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `snaplockType`<sup>Required</sup> <a name="snaplockType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType"></a>

```typescript
public readonly snaplockType: string;
```

- *Type:* string

---

##### `volumeAppendModeEnabled`<sup>Required</sup> <a name="volumeAppendModeEnabled" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```typescript
public readonly volumeAppendModeEnabled: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration">DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">maximumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">minimumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultRetention`<sup>Required</sup> <a name="defaultRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```typescript
public readonly defaultRetention: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `maximumRetention`<sup>Required</sup> <a name="maximumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```typescript
public readonly maximumRetention: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `minimumRetention`<sup>Required</sup> <a name="minimumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```typescript
public readonly minimumRetention: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---


### DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod">coolingPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy">DataAwsccFsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coolingPeriod`<sup>Required</sup> <a name="coolingPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod"></a>

```typescript
public readonly coolingPeriod: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOntapConfigurationTieringPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy">DataAwsccFsxVolumeOntapConfigurationTieringPolicy</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```typescript
public readonly clients: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get"></a>

```typescript
public get(index: number): DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations">clientConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports">DataAwsccFsxVolumeOpenZfsConfigurationNfsExports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```typescript
public readonly clientConfigurations: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOpenZfsConfigurationNfsExports;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports">DataAwsccFsxVolumeOpenZfsConfigurationNfsExports</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy">copyStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyStrategy`<sup>Required</sup> <a name="copyStrategy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy"></a>

```typescript
public readonly copyStrategy: string;
```

- *Type:* string

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId">parentVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.readOnly">readOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB">recordSizeKiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB">storageCapacityQuotaGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB">storageCapacityReservationGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration">DataAwsccFsxVolumeOpenZfsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyTagsToSnapshots`<sup>Required</sup> <a name="copyTagsToSnapshots" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```typescript
public readonly copyTagsToSnapshots: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dataCompressionType`<sup>Required</sup> <a name="dataCompressionType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

---

##### `nfsExports`<sup>Required</sup> <a name="nfsExports" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports"></a>

```typescript
public readonly nfsExports: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `originSnapshot`<sup>Required</sup> <a name="originSnapshot" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot"></a>

```typescript
public readonly originSnapshot: DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a>

---

##### `parentVolumeId`<sup>Required</sup> <a name="parentVolumeId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId"></a>

```typescript
public readonly parentVolumeId: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `recordSizeKiB`<sup>Required</sup> <a name="recordSizeKiB" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB"></a>

```typescript
public readonly recordSizeKiB: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGiB`<sup>Required</sup> <a name="storageCapacityQuotaGiB" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB"></a>

```typescript
public readonly storageCapacityQuotaGiB: number;
```

- *Type:* number

---

##### `storageCapacityReservationGiB`<sup>Required</sup> <a name="storageCapacityReservationGiB" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB"></a>

```typescript
public readonly storageCapacityReservationGiB: number;
```

- *Type:* number

---

##### `userAndGroupQuotas`<sup>Required</sup> <a name="userAndGroupQuotas" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas"></a>

```typescript
public readonly userAndGroupQuotas: DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOpenZfsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration">DataAwsccFsxVolumeOpenZfsConfiguration</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get"></a>

```typescript
public get(index: number): DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB">storageCapacityQuotaGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGiB`<sup>Required</sup> <a name="storageCapacityQuotaGiB" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB"></a>

```typescript
public readonly storageCapacityQuotaGiB: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>

---


### DataAwsccFsxVolumeTagsList <a name="DataAwsccFsxVolumeTagsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get"></a>

```typescript
public get(index: number): DataAwsccFsxVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFsxVolumeTagsOutputReference <a name="DataAwsccFsxVolumeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxVolume } from '@cdktn/provider-awscc'

new dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags">DataAwsccFsxVolumeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxVolumeTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags">DataAwsccFsxVolumeTags</a>

---



