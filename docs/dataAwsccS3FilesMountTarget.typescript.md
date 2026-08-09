# `dataAwsccS3FilesMountTarget` Submodule <a name="`dataAwsccS3FilesMountTarget` Submodule" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3FilesMountTarget <a name="DataAwsccS3FilesMountTarget" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3files_mount_target awscc_s3files_mount_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.Initializer"></a>

```typescript
import { dataAwsccS3FilesMountTarget } from '@cdktn/provider-awscc'

new dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget(scope: Construct, id: string, config: DataAwsccS3FilesMountTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig">DataAwsccS3FilesMountTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig">DataAwsccS3FilesMountTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3FilesMountTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isConstruct"></a>

```typescript
import { dataAwsccS3FilesMountTarget } from '@cdktn/provider-awscc'

dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isTerraformElement"></a>

```typescript
import { dataAwsccS3FilesMountTarget } from '@cdktn/provider-awscc'

dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3FilesMountTarget } from '@cdktn/provider-awscc'

dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.generateConfigForImport"></a>

```typescript
import { dataAwsccS3FilesMountTarget } from '@cdktn/provider-awscc'

dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3FilesMountTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3FilesMountTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3FilesMountTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3files_mount_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3FilesMountTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3FilesMountTargetConfig <a name="DataAwsccS3FilesMountTargetConfig" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.Initializer"></a>

```typescript
import { dataAwsccS3FilesMountTarget } from '@cdktn/provider-awscc'

const dataAwsccS3FilesMountTargetConfig: dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3FilesMountTarget.DataAwsccS3FilesMountTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3files_mount_target#id DataAwsccS3FilesMountTarget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



