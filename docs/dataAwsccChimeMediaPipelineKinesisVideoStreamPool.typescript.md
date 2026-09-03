# `dataAwsccChimeMediaPipelineKinesisVideoStreamPool` Submodule <a name="`dataAwsccChimeMediaPipelineKinesisVideoStreamPool` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeMediaPipelineKinesisVideoStreamPool <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPool" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pool awscc_chime_media_pipeline_kinesis_video_stream_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool(scope: Construct, id: string, config: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isConstruct"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformDataSource"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccChimeMediaPipelineKinesisVideoStreamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccChimeMediaPipelineKinesisVideoStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeMediaPipelineKinesisVideoStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolName">poolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus">poolStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

---

##### `poolStatus`<sup>Required</sup> <a name="poolStatus" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus"></a>

```typescript
public readonly poolStatus: string;
```

- *Type:* string

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration"></a>

```typescript
public readonly streamConfiguration: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.tags"></a>

```typescript
public readonly tags: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.Initializer"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig: dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pool#id DataAwsccChimeMediaPipelineKinesisVideoStreamPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration: dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration = { ... }
```


### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags.Initializer"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

const dataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags: dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours">dataRetentionInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataRetentionInHours`<sup>Required</sup> <a name="dataRetentionInHours" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours"></a>

```typescript
public readonly dataRetentionInHours: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---


### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.get"></a>

```typescript
public get(index: number): DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeMediaPipelineKinesisVideoStreamPool } from '@cdktn/provider-awscc'

new dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags</a>

---



