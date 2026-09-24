# `dataAwsccStoragegatewayVolume` Submodule <a name="`dataAwsccStoragegatewayVolume` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewayVolume <a name="DataAwsccStoragegatewayVolume" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume awscc_storagegateway_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

new dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume(scope: Construct, id: string, config: DataAwsccStoragegatewayVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig">DataAwsccStoragegatewayVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig">DataAwsccStoragegatewayVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewayVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccStoragegatewayVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccStoragegatewayVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccStoragegatewayVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewayVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsEncrypted">kmsEncrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList">DataAwsccStoragegatewayVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeArn">volumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeAttachmentStatus">volumeAttachmentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeStatus">volumeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeUsedInBytes">volumeUsedInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `sourceVolumeArn`<sup>Required</sup> <a name="sourceVolumeArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.sourceVolumeArn"></a>

```typescript
public readonly sourceVolumeArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tags"></a>

```typescript
public readonly tags: DataAwsccStoragegatewayVolumeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList">DataAwsccStoragegatewayVolumeTagsList</a>

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `volumeArn`<sup>Required</sup> <a name="volumeArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeArn"></a>

```typescript
public readonly volumeArn: string;
```

- *Type:* string

---

##### `volumeAttachmentStatus`<sup>Required</sup> <a name="volumeAttachmentStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeAttachmentStatus"></a>

```typescript
public readonly volumeAttachmentStatus: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeSizeInBytes"></a>

```typescript
public readonly volumeSizeInBytes: number;
```

- *Type:* number

---

##### `volumeStatus`<sup>Required</sup> <a name="volumeStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeStatus"></a>

```typescript
public readonly volumeStatus: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `volumeUsedInBytes`<sup>Required</sup> <a name="volumeUsedInBytes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeUsedInBytes"></a>

```typescript
public readonly volumeUsedInBytes: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewayVolumeConfig <a name="DataAwsccStoragegatewayVolumeConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

const dataAwsccStoragegatewayVolumeConfig: dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#id DataAwsccStoragegatewayVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewayVolumeTags <a name="DataAwsccStoragegatewayVolumeTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

const dataAwsccStoragegatewayVolumeTags: dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewayVolumeTagsList <a name="DataAwsccStoragegatewayVolumeTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

new dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get"></a>

```typescript
public get(index: number): DataAwsccStoragegatewayVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccStoragegatewayVolumeTagsOutputReference <a name="DataAwsccStoragegatewayVolumeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayVolume } from '@cdktn/provider-awscc'

new dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags">DataAwsccStoragegatewayVolumeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStoragegatewayVolumeTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags">DataAwsccStoragegatewayVolumeTags</a>

---



