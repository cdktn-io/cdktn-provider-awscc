# `dataAwsccS3TablesTableBucket` Submodule <a name="`dataAwsccS3TablesTableBucket` Submodule" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3TablesTableBucket <a name="DataAwsccS3TablesTableBucket" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3tables_table_bucket awscc_s3tables_table_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket(scope: Construct, id: string, config: DataAwsccS3TablesTableBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig">DataAwsccS3TablesTableBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig">DataAwsccS3TablesTableBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3TablesTableBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isConstruct"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformElement"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3TablesTableBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3TablesTableBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3TablesTableBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3TablesTableBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference">DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference">DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference">DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference">DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tableBucketArn">tableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tableBucketName">tableBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList">DataAwsccS3TablesTableBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.unreferencedFileRemoval">unreferencedFileRemoval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference">DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference">DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference</a>

---

##### `metricsConfiguration`<sup>Required</sup> <a name="metricsConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.metricsConfiguration"></a>

```typescript
public readonly metricsConfiguration: DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference">DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference</a>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference">DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference</a>

---

##### `storageClassConfiguration`<sup>Required</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.storageClassConfiguration"></a>

```typescript
public readonly storageClassConfiguration: DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference">DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference</a>

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tableBucketArn"></a>

```typescript
public readonly tableBucketArn: string;
```

- *Type:* string

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tableBucketName"></a>

```typescript
public readonly tableBucketName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tags"></a>

```typescript
public readonly tags: DataAwsccS3TablesTableBucketTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList">DataAwsccS3TablesTableBucketTagsList</a>

---

##### `unreferencedFileRemoval`<sup>Required</sup> <a name="unreferencedFileRemoval" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.unreferencedFileRemoval"></a>

```typescript
public readonly unreferencedFileRemoval: DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference">DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3TablesTableBucketConfig <a name="DataAwsccS3TablesTableBucketConfig" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketConfig: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3tables_table_bucket#id DataAwsccS3TablesTableBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3TablesTableBucketEncryptionConfiguration <a name="DataAwsccS3TablesTableBucketEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketEncryptionConfiguration: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration = { ... }
```


### DataAwsccS3TablesTableBucketMetricsConfiguration <a name="DataAwsccS3TablesTableBucketMetricsConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketMetricsConfiguration: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration = { ... }
```


### DataAwsccS3TablesTableBucketReplicationConfiguration <a name="DataAwsccS3TablesTableBucketReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketReplicationConfiguration: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration = { ... }
```


### DataAwsccS3TablesTableBucketReplicationConfigurationRules <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRules" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketReplicationConfigurationRules: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules = { ... }
```


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations = { ... }
```


### DataAwsccS3TablesTableBucketStorageClassConfiguration <a name="DataAwsccS3TablesTableBucketStorageClassConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketStorageClassConfiguration: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration = { ... }
```


### DataAwsccS3TablesTableBucketTags <a name="DataAwsccS3TablesTableBucketTags" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketTags: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags = { ... }
```


### DataAwsccS3TablesTableBucketUnreferencedFileRemoval <a name="DataAwsccS3TablesTableBucketUnreferencedFileRemoval" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

const dataAwsccS3TablesTableBucketUnreferencedFileRemoval: dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference <a name="DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration">DataAwsccS3TablesTableBucketEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableBucketEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration">DataAwsccS3TablesTableBucketEncryptionConfiguration</a>

---


### DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference <a name="DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration">DataAwsccS3TablesTableBucketMetricsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableBucketMetricsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration">DataAwsccS3TablesTableBucketMetricsConfiguration</a>

---


### DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference <a name="DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList">DataAwsccS3TablesTableBucketReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration">DataAwsccS3TablesTableBucketReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccS3TablesTableBucketReplicationConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList">DataAwsccS3TablesTableBucketReplicationConfigurationRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableBucketReplicationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration">DataAwsccS3TablesTableBucketReplicationConfiguration</a>

---


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations">DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTableBucketArn`<sup>Required</sup> <a name="destinationTableBucketArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn"></a>

```typescript
public readonly destinationTableBucketArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations">DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations</a>

---


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesList <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.get"></a>

```typescript
public get(index: number): DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList">DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules">DataAwsccS3TablesTableBucketReplicationConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList">DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableBucketReplicationConfigurationRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules">DataAwsccS3TablesTableBucketReplicationConfigurationRules</a>

---


### DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference <a name="DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration">DataAwsccS3TablesTableBucketStorageClassConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableBucketStorageClassConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration">DataAwsccS3TablesTableBucketStorageClassConfiguration</a>

---


### DataAwsccS3TablesTableBucketTagsList <a name="DataAwsccS3TablesTableBucketTagsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.get"></a>

```typescript
public get(index: number): DataAwsccS3TablesTableBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3TablesTableBucketTagsOutputReference <a name="DataAwsccS3TablesTableBucketTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags">DataAwsccS3TablesTableBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableBucketTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags">DataAwsccS3TablesTableBucketTags</a>

---


### DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference <a name="DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3TablesTableBucket } from '@cdktn/provider-awscc'

new dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays">noncurrentDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays">unreferencedDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval">DataAwsccS3TablesTableBucketUnreferencedFileRemoval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noncurrentDays`<sup>Required</sup> <a name="noncurrentDays" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays"></a>

```typescript
public readonly noncurrentDays: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `unreferencedDays`<sup>Required</sup> <a name="unreferencedDays" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays"></a>

```typescript
public readonly unreferencedDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3TablesTableBucketUnreferencedFileRemoval;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval">DataAwsccS3TablesTableBucketUnreferencedFileRemoval</a>

---



