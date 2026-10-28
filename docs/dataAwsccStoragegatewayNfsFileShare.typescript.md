# `dataAwsccStoragegatewayNfsFileShare` Submodule <a name="`dataAwsccStoragegatewayNfsFileShare` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewayNfsFileShare <a name="DataAwsccStoragegatewayNfsFileShare" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

new dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare(scope: Construct, id: string, config: DataAwsccStoragegatewayNfsFileShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig">DataAwsccStoragegatewayNfsFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig">DataAwsccStoragegatewayNfsFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccStoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccStoragegatewayNfsFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccStoragegatewayNfsFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewayNfsFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.auditDestinationArn">auditDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference">DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.clientList">clientList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.defaultStorageClass">defaultStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareArn">fileShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareId">fileShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareName">fileShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareStatus">fileShareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsEncrypted">kmsEncrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.notificationPolicy">notificationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.objectAcl">objectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.readOnly">readOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.requesterPays">requesterPays</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.squash">squash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList">DataAwsccStoragegatewayNfsFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.auditDestinationArn"></a>

```typescript
public readonly auditDestinationArn: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cacheAttributes"></a>

```typescript
public readonly cacheAttributes: DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference">DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference</a>

---

##### `clientList`<sup>Required</sup> <a name="clientList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.clientList"></a>

```typescript
public readonly clientList: string[];
```

- *Type:* string[]

---

##### `defaultStorageClass`<sup>Required</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.defaultStorageClass"></a>

```typescript
public readonly defaultStorageClass: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `fileShareArn`<sup>Required</sup> <a name="fileShareArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareArn"></a>

```typescript
public readonly fileShareArn: string;
```

- *Type:* string

---

##### `fileShareId`<sup>Required</sup> <a name="fileShareId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareId"></a>

```typescript
public readonly fileShareId: string;
```

- *Type:* string

---

##### `fileShareName`<sup>Required</sup> <a name="fileShareName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareName"></a>

```typescript
public readonly fileShareName: string;
```

- *Type:* string

---

##### `fileShareStatus`<sup>Required</sup> <a name="fileShareStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareStatus"></a>

```typescript
public readonly fileShareStatus: string;
```

- *Type:* string

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `guessMimeTypeEnabled`<sup>Required</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.guessMimeTypeEnabled"></a>

```typescript
public readonly guessMimeTypeEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `nfsFileShareDefaults`<sup>Required</sup> <a name="nfsFileShareDefaults" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.nfsFileShareDefaults"></a>

```typescript
public readonly nfsFileShareDefaults: DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a>

---

##### `notificationPolicy`<sup>Required</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.notificationPolicy"></a>

```typescript
public readonly notificationPolicy: string;
```

- *Type:* string

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.objectAcl"></a>

```typescript
public readonly objectAcl: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.readOnly"></a>

```typescript
public readonly readOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.requesterPays"></a>

```typescript
public readonly requesterPays: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.squash"></a>

```typescript
public readonly squash: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tags"></a>

```typescript
public readonly tags: DataAwsccStoragegatewayNfsFileShareTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList">DataAwsccStoragegatewayNfsFileShareTagsList</a>

---

##### `vpcEndpointDnsName`<sup>Required</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.vpcEndpointDnsName"></a>

```typescript
public readonly vpcEndpointDnsName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewayNfsFileShareCacheAttributes <a name="DataAwsccStoragegatewayNfsFileShareCacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

const dataAwsccStoragegatewayNfsFileShareCacheAttributes: dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes = { ... }
```


### DataAwsccStoragegatewayNfsFileShareConfig <a name="DataAwsccStoragegatewayNfsFileShareConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

const dataAwsccStoragegatewayNfsFileShareConfig: dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share#id DataAwsccStoragegatewayNfsFileShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults <a name="DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

const dataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults: dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults = { ... }
```


### DataAwsccStoragegatewayNfsFileShareTags <a name="DataAwsccStoragegatewayNfsFileShareTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

const dataAwsccStoragegatewayNfsFileShareTags: dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference <a name="DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

new dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes">DataAwsccStoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```typescript
public readonly cacheStaleTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStoragegatewayNfsFileShareCacheAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes">DataAwsccStoragegatewayNfsFileShareCacheAttributes</a>

---


### DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference <a name="DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

new dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode">directoryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode">fileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId">ownerId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryMode`<sup>Required</sup> <a name="directoryMode" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode"></a>

```typescript
public readonly directoryMode: string;
```

- *Type:* string

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode"></a>

```typescript
public readonly fileMode: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId"></a>

```typescript
public readonly ownerId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults</a>

---


### DataAwsccStoragegatewayNfsFileShareTagsList <a name="DataAwsccStoragegatewayNfsFileShareTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

new dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get"></a>

```typescript
public get(index: number): DataAwsccStoragegatewayNfsFileShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccStoragegatewayNfsFileShareTagsOutputReference <a name="DataAwsccStoragegatewayNfsFileShareTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccStoragegatewayNfsFileShare } from '@cdktn/provider-awscc'

new dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags">DataAwsccStoragegatewayNfsFileShareTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStoragegatewayNfsFileShareTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags">DataAwsccStoragegatewayNfsFileShareTags</a>

---



