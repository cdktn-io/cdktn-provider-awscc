# `dataAwsccS3VectorsVectorBucket` Submodule <a name="`dataAwsccS3VectorsVectorBucket` Submodule" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3VectorsVectorBucket <a name="DataAwsccS3VectorsVectorBucket" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3vectors_vector_bucket awscc_s3vectors_vector_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.Initializer"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

new dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket(scope: Construct, id: string, config: DataAwsccS3VectorsVectorBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig">DataAwsccS3VectorsVectorBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig">DataAwsccS3VectorsVectorBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3VectorsVectorBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isConstruct"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isTerraformElement"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.generateConfigForImport"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3VectorsVectorBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3VectorsVectorBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3VectorsVectorBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3vectors_vector_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3VectorsVectorBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference">DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList">DataAwsccS3VectorsVectorBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.vectorBucketArn">vectorBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.vectorBucketName">vectorBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference">DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.tags"></a>

```typescript
public readonly tags: DataAwsccS3VectorsVectorBucketTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList">DataAwsccS3VectorsVectorBucketTagsList</a>

---

##### `vectorBucketArn`<sup>Required</sup> <a name="vectorBucketArn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.vectorBucketArn"></a>

```typescript
public readonly vectorBucketArn: string;
```

- *Type:* string

---

##### `vectorBucketName`<sup>Required</sup> <a name="vectorBucketName" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.vectorBucketName"></a>

```typescript
public readonly vectorBucketName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3VectorsVectorBucketConfig <a name="DataAwsccS3VectorsVectorBucketConfig" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.Initializer"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

const dataAwsccS3VectorsVectorBucketConfig: dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3vectors_vector_bucket#id DataAwsccS3VectorsVectorBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3VectorsVectorBucketEncryptionConfiguration <a name="DataAwsccS3VectorsVectorBucketEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

const dataAwsccS3VectorsVectorBucketEncryptionConfiguration: dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfiguration = { ... }
```


### DataAwsccS3VectorsVectorBucketTags <a name="DataAwsccS3VectorsVectorBucketTags" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTags.Initializer"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

const dataAwsccS3VectorsVectorBucketTags: dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference <a name="DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

new dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseType">sseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfiguration">DataAwsccS3VectorsVectorBucketEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sseType`<sup>Required</sup> <a name="sseType" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseType"></a>

```typescript
public readonly sseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3VectorsVectorBucketEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketEncryptionConfiguration">DataAwsccS3VectorsVectorBucketEncryptionConfiguration</a>

---


### DataAwsccS3VectorsVectorBucketTagsList <a name="DataAwsccS3VectorsVectorBucketTagsList" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.Initializer"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

new dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.get"></a>

```typescript
public get(index: number): DataAwsccS3VectorsVectorBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3VectorsVectorBucketTagsOutputReference <a name="DataAwsccS3VectorsVectorBucketTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3VectorsVectorBucket } from '@cdktn/provider-awscc'

new dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTags">DataAwsccS3VectorsVectorBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3VectorsVectorBucketTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3VectorsVectorBucket.DataAwsccS3VectorsVectorBucketTags">DataAwsccS3VectorsVectorBucketTags</a>

---



