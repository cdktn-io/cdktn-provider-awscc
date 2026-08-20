# `dataAwsccS3ExpressDirectoryBucket` Submodule <a name="`dataAwsccS3ExpressDirectoryBucket` Submodule" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3ExpressDirectoryBucket <a name="DataAwsccS3ExpressDirectoryBucket" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3express_directory_bucket awscc_s3express_directory_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket(scope: Construct, id: string, config: DataAwsccS3ExpressDirectoryBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig">DataAwsccS3ExpressDirectoryBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig">DataAwsccS3ExpressDirectoryBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isConstruct"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformElement"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3ExpressDirectoryBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3ExpressDirectoryBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3ExpressDirectoryBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.bucketEncryption">bucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference">DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.dataRedundancy">dataRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.inventoryConfigurations">inventoryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.locationName">locationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.metricsConfigurations">metricsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList">DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList">DataAwsccS3ExpressDirectoryBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

---

##### `bucketEncryption`<sup>Required</sup> <a name="bucketEncryption" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.bucketEncryption"></a>

```typescript
public readonly bucketEncryption: DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference">DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `dataRedundancy`<sup>Required</sup> <a name="dataRedundancy" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.dataRedundancy"></a>

```typescript
public readonly dataRedundancy: string;
```

- *Type:* string

---

##### `inventoryConfigurations`<sup>Required</sup> <a name="inventoryConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.inventoryConfigurations"></a>

```typescript
public readonly inventoryConfigurations: DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList</a>

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a>

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

---

##### `metricsConfigurations`<sup>Required</sup> <a name="metricsConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.metricsConfigurations"></a>

```typescript
public readonly metricsConfigurations: DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList">DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.tags"></a>

```typescript
public readonly tags: DataAwsccS3ExpressDirectoryBucketTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList">DataAwsccS3ExpressDirectoryBucketTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3ExpressDirectoryBucketBucketEncryption <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryption" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketBucketEncryption: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption = { ... }
```


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration = { ... }
```


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault = { ... }
```


### DataAwsccS3ExpressDirectoryBucketConfig <a name="DataAwsccS3ExpressDirectoryBucketConfig" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketConfig: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3express_directory_bucket#id DataAwsccS3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3ExpressDirectoryBucketInventoryConfigurations <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketInventoryConfigurations: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations = { ... }
```


### DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination = { ... }
```


### DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketLifecycleConfiguration: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration = { ... }
```


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules = { ... }
```


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload = { ... }
```


### DataAwsccS3ExpressDirectoryBucketMetricsConfigurations <a name="DataAwsccS3ExpressDirectoryBucketMetricsConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketMetricsConfigurations: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations = { ... }
```


### DataAwsccS3ExpressDirectoryBucketTags <a name="DataAwsccS3ExpressDirectoryBucketTags" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const dataAwsccS3ExpressDirectoryBucketTags: dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption">DataAwsccS3ExpressDirectoryBucketBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketBucketEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryption">DataAwsccS3ExpressDirectoryBucketBucketEncryption</a>

---


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault">serverSideEncryptionByDefault</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serverSideEncryptionByDefault`<sup>Required</sup> <a name="serverSideEncryptionByDefault" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault"></a>

```typescript
public readonly serverSideEncryptionByDefault: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>

---


### DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference <a name="DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">DataAwsccS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---


### DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId">bucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketAccountId`<sup>Required</sup> <a name="bucketAccountId" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId"></a>

```typescript
public readonly bucketAccountId: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---


### DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference <a name="DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions">includedObjectVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields">optionalFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency">scheduleFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations">DataAwsccS3ExpressDirectoryBucketInventoryConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination"></a>

```typescript
public readonly destination: DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includedObjectVersions`<sup>Required</sup> <a name="includedObjectVersions" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions"></a>

```typescript
public readonly includedObjectVersions: string;
```

- *Type:* string

---

##### `optionalFields`<sup>Required</sup> <a name="optionalFields" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields"></a>

```typescript
public readonly optionalFields: string[];
```

- *Type:* string[]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `scheduleFrequency`<sup>Required</sup> <a name="scheduleFrequency" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketInventoryConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketInventoryConfigurations">DataAwsccS3ExpressDirectoryBucketInventoryConfigurations</a>

---


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration">DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration">DataAwsccS3ExpressDirectoryBucketLifecycleConfiguration</a>

---


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysAfterInitiation`<sup>Required</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```typescript
public readonly daysAfterInitiation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.get"></a>

```typescript
public get(index: number): DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference <a name="DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan">objectSizeGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan">objectSizeLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abortIncompleteMultipartUpload`<sup>Required</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```typescript
public readonly abortIncompleteMultipartUpload: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```typescript
public readonly expirationInDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectSizeGreaterThan`<sup>Required</sup> <a name="objectSizeGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan"></a>

```typescript
public readonly objectSizeGreaterThan: string;
```

- *Type:* string

---

##### `objectSizeLessThan`<sup>Required</sup> <a name="objectSizeLessThan" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan"></a>

```typescript
public readonly objectSizeLessThan: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules">DataAwsccS3ExpressDirectoryBucketLifecycleConfigurationRules</a>

---


### DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList <a name="DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference <a name="DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn">accessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations">DataAwsccS3ExpressDirectoryBucketMetricsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn"></a>

```typescript
public readonly accessPointArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketMetricsConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketMetricsConfigurations">DataAwsccS3ExpressDirectoryBucketMetricsConfigurations</a>

---


### DataAwsccS3ExpressDirectoryBucketTagsList <a name="DataAwsccS3ExpressDirectoryBucketTagsList" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.get"></a>

```typescript
public get(index: number): DataAwsccS3ExpressDirectoryBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3ExpressDirectoryBucketTagsOutputReference <a name="DataAwsccS3ExpressDirectoryBucketTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags">DataAwsccS3ExpressDirectoryBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3ExpressDirectoryBucketTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ExpressDirectoryBucket.DataAwsccS3ExpressDirectoryBucketTags">DataAwsccS3ExpressDirectoryBucketTags</a>

---



