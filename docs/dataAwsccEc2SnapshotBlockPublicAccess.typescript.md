# `dataAwsccEc2SnapshotBlockPublicAccess` Submodule <a name="`dataAwsccEc2SnapshotBlockPublicAccess` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2SnapshotBlockPublicAccess <a name="DataAwsccEc2SnapshotBlockPublicAccess" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_snapshot_block_public_access awscc_ec2_snapshot_block_public_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.Initializer"></a>

```typescript
import { dataAwsccEc2SnapshotBlockPublicAccess } from '@cdktn/provider-awscc'

new dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess(scope: Construct, id: string, config: DataAwsccEc2SnapshotBlockPublicAccessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig">DataAwsccEc2SnapshotBlockPublicAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig">DataAwsccEc2SnapshotBlockPublicAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2SnapshotBlockPublicAccess resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isConstruct"></a>

```typescript
import { dataAwsccEc2SnapshotBlockPublicAccess } from '@cdktn/provider-awscc'

dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isTerraformElement"></a>

```typescript
import { dataAwsccEc2SnapshotBlockPublicAccess } from '@cdktn/provider-awscc'

dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2SnapshotBlockPublicAccess } from '@cdktn/provider-awscc'

dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2SnapshotBlockPublicAccess } from '@cdktn/provider-awscc'

dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2SnapshotBlockPublicAccess resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2SnapshotBlockPublicAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2SnapshotBlockPublicAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_snapshot_block_public_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2SnapshotBlockPublicAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccess.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2SnapshotBlockPublicAccessConfig <a name="DataAwsccEc2SnapshotBlockPublicAccessConfig" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.Initializer"></a>

```typescript
import { dataAwsccEc2SnapshotBlockPublicAccess } from '@cdktn/provider-awscc'

const dataAwsccEc2SnapshotBlockPublicAccessConfig: dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SnapshotBlockPublicAccess.DataAwsccEc2SnapshotBlockPublicAccessConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_snapshot_block_public_access#id DataAwsccEc2SnapshotBlockPublicAccess#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



