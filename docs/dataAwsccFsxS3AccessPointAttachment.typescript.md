# `dataAwsccFsxS3AccessPointAttachment` Submodule <a name="`dataAwsccFsxS3AccessPointAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFsxS3AccessPointAttachment <a name="DataAwsccFsxS3AccessPointAttachment" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment(scope: Construct, id: string, config: DataAwsccFsxS3AccessPointAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig">DataAwsccFsxS3AccessPointAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig">DataAwsccFsxS3AccessPointAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isConstruct"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccFsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccFsxS3AccessPointAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccFsxS3AccessPointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFsxS3AccessPointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.ontapConfiguration">ontapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.openZfsConfiguration">openZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.s3AccessPoint">s3AccessPoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference">DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ontapConfiguration`<sup>Required</sup> <a name="ontapConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.ontapConfiguration"></a>

```typescript
public readonly ontapConfiguration: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference</a>

---

##### `openZfsConfiguration`<sup>Required</sup> <a name="openZfsConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.openZfsConfiguration"></a>

```typescript
public readonly openZfsConfiguration: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference</a>

---

##### `s3AccessPoint`<sup>Required</sup> <a name="s3AccessPoint" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.s3AccessPoint"></a>

```typescript
public readonly s3AccessPoint: DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference">DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFsxS3AccessPointAttachmentConfig <a name="DataAwsccFsxS3AccessPointAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentConfig: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_s3_access_point_attachment#id DataAwsccFsxS3AccessPointAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFsxS3AccessPointAttachmentOntapConfiguration <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentOntapConfiguration: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentS3AccessPoint <a name="DataAwsccFsxS3AccessPointAttachmentS3AccessPoint" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentS3AccessPoint: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint = { ... }
```


### DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration <a name="DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

const dataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration: dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUser">unixUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUser">windowsUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unixUser`<sup>Required</sup> <a name="unixUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUser"></a>

```typescript
public readonly unixUser: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference</a>

---

##### `windowsUser`<sup>Required</sup> <a name="windowsUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUser"></a>

```typescript
public readonly windowsUser: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a>

---


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a>

---


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a>

---


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentity">fileSystemIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration">DataAwsccFsxS3AccessPointAttachmentOntapConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdentity`<sup>Required</sup> <a name="fileSystemIdentity" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentity"></a>

```typescript
public readonly fileSystemIdentity: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference</a>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentOntapConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration">DataAwsccFsxS3AccessPointAttachmentOntapConfiguration</a>

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `posixUser`<sup>Required</sup> <a name="posixUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUser"></a>

```typescript
public readonly posixUser: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a>

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid">gid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids">secondaryGids</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid">uid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

---

##### `secondaryGids`<sup>Required</sup> <a name="secondaryGids" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids"></a>

```typescript
public readonly secondaryGids: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a>

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get"></a>

```typescript
public get(index: number): DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gid">gid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentity">fileSystemIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdentity`<sup>Required</sup> <a name="fileSystemIdentity" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentity"></a>

```typescript
public readonly fileSystemIdentity: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference</a>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration</a>

---


### DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint">DataAwsccFsxS3AccessPointAttachmentS3AccessPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentS3AccessPoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint">DataAwsccFsxS3AccessPointAttachmentS3AccessPoint</a>

---


### DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxS3AccessPointAttachment } from '@cdktn/provider-awscc'

new dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a>

---



