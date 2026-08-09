# `dataAwsccCodepipelinePipeline` Submodule <a name="`dataAwsccCodepipelinePipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodepipelinePipeline <a name="DataAwsccCodepipelinePipeline" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/codepipeline_pipeline awscc_codepipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline(scope: Construct, id: string, config: DataAwsccCodepipelinePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig">DataAwsccCodepipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig">DataAwsccCodepipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodepipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCodepipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodepipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodepipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/codepipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodepipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStore">artifactStore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStores">artifactStores</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList">DataAwsccCodepipelinePipelineArtifactStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.disableInboundStageTransitions">disableInboundStageTransitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList">DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.executionMode">executionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.pipelineType">pipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.restartExecutionOnUpdate">restartExecutionOnUpdate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList">DataAwsccCodepipelinePipelineStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList">DataAwsccCodepipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.triggers">triggers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList">DataAwsccCodepipelinePipelineTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList">DataAwsccCodepipelinePipelineVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStore"></a>

```typescript
public readonly artifactStore: DataAwsccCodepipelinePipelineArtifactStoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoreOutputReference</a>

---

##### `artifactStores`<sup>Required</sup> <a name="artifactStores" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStores"></a>

```typescript
public readonly artifactStores: DataAwsccCodepipelinePipelineArtifactStoresList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList">DataAwsccCodepipelinePipelineArtifactStoresList</a>

---

##### `disableInboundStageTransitions`<sup>Required</sup> <a name="disableInboundStageTransitions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.disableInboundStageTransitions"></a>

```typescript
public readonly disableInboundStageTransitions: DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList">DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList</a>

---

##### `executionMode`<sup>Required</sup> <a name="executionMode" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

---

##### `restartExecutionOnUpdate`<sup>Required</sup> <a name="restartExecutionOnUpdate" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.restartExecutionOnUpdate"></a>

```typescript
public readonly restartExecutionOnUpdate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.stages"></a>

```typescript
public readonly stages: DataAwsccCodepipelinePipelineStagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList">DataAwsccCodepipelinePipelineStagesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tags"></a>

```typescript
public readonly tags: DataAwsccCodepipelinePipelineTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList">DataAwsccCodepipelinePipelineTagsList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.triggers"></a>

```typescript
public readonly triggers: DataAwsccCodepipelinePipelineTriggersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList">DataAwsccCodepipelinePipelineTriggersList</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.variables"></a>

```typescript
public readonly variables: DataAwsccCodepipelinePipelineVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList">DataAwsccCodepipelinePipelineVariablesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodepipelinePipelineArtifactStore <a name="DataAwsccCodepipelinePipelineArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineArtifactStore: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore = { ... }
```


### DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey <a name="DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineArtifactStoreEncryptionKey: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey = { ... }
```


### DataAwsccCodepipelinePipelineArtifactStores <a name="DataAwsccCodepipelinePipelineArtifactStores" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineArtifactStores: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores = { ... }
```


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStore <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineArtifactStoresArtifactStore: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore = { ... }
```


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey = { ... }
```


### DataAwsccCodepipelinePipelineConfig <a name="DataAwsccCodepipelinePipelineConfig" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineConfig: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/codepipeline_pipeline#id DataAwsccCodepipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodepipelinePipelineDisableInboundStageTransitions <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineDisableInboundStageTransitions: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions = { ... }
```


### DataAwsccCodepipelinePipelineStages <a name="DataAwsccCodepipelinePipelineStages" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStages: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages = { ... }
```


### DataAwsccCodepipelinePipelineStagesActions <a name="DataAwsccCodepipelinePipelineStagesActions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesActions: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions = { ... }
```


### DataAwsccCodepipelinePipelineStagesActionsActionTypeId <a name="DataAwsccCodepipelinePipelineStagesActionsActionTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesActionsActionTypeId: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId = { ... }
```


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables = { ... }
```


### DataAwsccCodepipelinePipelineStagesActionsInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesActionsInputArtifacts: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts = { ... }
```


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesActionsOutputArtifacts: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts = { ... }
```


### DataAwsccCodepipelinePipelineStagesBeforeEntry <a name="DataAwsccCodepipelinePipelineStagesBeforeEntry" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesBeforeEntry: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry = { ... }
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditions <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesBeforeEntryConditions: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions = { ... }
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules = { ... }
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts = { ... }
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId = { ... }
```


### DataAwsccCodepipelinePipelineStagesBlockers <a name="DataAwsccCodepipelinePipelineStagesBlockers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesBlockers: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnFailure <a name="DataAwsccCodepipelinePipelineStagesOnFailure" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnFailure: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditions <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnFailureConditions: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnFailureConditionsRules: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration <a name="DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnSuccess <a name="DataAwsccCodepipelinePipelineStagesOnSuccess" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnSuccess: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditions <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnSuccessConditions: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts = { ... }
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId = { ... }
```


### DataAwsccCodepipelinePipelineTags <a name="DataAwsccCodepipelinePipelineTags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTags: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags = { ... }
```


### DataAwsccCodepipelinePipelineTriggers <a name="DataAwsccCodepipelinePipelineTriggers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggers: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers = { ... }
```


### DataAwsccCodepipelinePipelineTriggersGitConfiguration <a name="DataAwsccCodepipelinePipelineTriggersGitConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggersGitConfiguration: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration = { ... }
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest = { ... }
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches = { ... }
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths = { ... }
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPush <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPush" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggersGitConfigurationPush: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush = { ... }
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches = { ... }
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths = { ... }
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags = { ... }
```


### DataAwsccCodepipelinePipelineVariables <a name="DataAwsccCodepipelinePipelineVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

const dataAwsccCodepipelinePipelineVariables: dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey</a>

---


### DataAwsccCodepipelinePipelineArtifactStoreOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore">DataAwsccCodepipelinePipelineArtifactStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineArtifactStore;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore">DataAwsccCodepipelinePipelineArtifactStore</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore">DataAwsccCodepipelinePipelineArtifactStoresArtifactStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineArtifactStoresArtifactStore;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore">DataAwsccCodepipelinePipelineArtifactStoresArtifactStore</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresList <a name="DataAwsccCodepipelinePipelineArtifactStoresList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineArtifactStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineArtifactStoresOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.artifactStore">artifactStore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores">DataAwsccCodepipelinePipelineArtifactStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactStore`<sup>Required</sup> <a name="artifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.artifactStore"></a>

```typescript
public readonly artifactStore: DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineArtifactStores;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores">DataAwsccCodepipelinePipelineArtifactStores</a>

---


### DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions">DataAwsccCodepipelinePipelineDisableInboundStageTransitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineDisableInboundStageTransitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions">DataAwsccCodepipelinePipelineDisableInboundStageTransitions</a>

---


### DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId">DataAwsccCodepipelinePipelineStagesActionsActionTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesActionsActionTypeId;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId">DataAwsccCodepipelinePipelineStagesActionsActionTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables</a>

---


### DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts">DataAwsccCodepipelinePipelineStagesActionsInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesActionsInputArtifacts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts">DataAwsccCodepipelinePipelineStagesActionsInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesActionsList <a name="DataAwsccCodepipelinePipelineStagesActionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.files">files</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts">DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.files"></a>

```typescript
public readonly files: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts">DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesActionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.actionTypeId">actionTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputArtifacts">outputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputVariables">outputVariables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.runOrder">runOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions">DataAwsccCodepipelinePipelineStagesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeId`<sup>Required</sup> <a name="actionTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.actionTypeId"></a>

```typescript
public readonly actionTypeId: DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference</a>

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList</a>

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `outputArtifacts`<sup>Required</sup> <a name="outputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputArtifacts"></a>

```typescript
public readonly outputArtifacts: DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList</a>

---

##### `outputVariables`<sup>Required</sup> <a name="outputVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputVariables"></a>

```typescript
public readonly outputVariables: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `runOrder`<sup>Required</sup> <a name="runOrder" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.runOrder"></a>

```typescript
public readonly runOrder: number;
```

- *Type:* number

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions">DataAwsccCodepipelinePipelineStagesActions</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions">DataAwsccCodepipelinePipelineStagesBeforeEntryConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesBeforeEntryConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions">DataAwsccCodepipelinePipelineStagesBeforeEntryConditions</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry">DataAwsccCodepipelinePipelineStagesBeforeEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesBeforeEntry;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry">DataAwsccCodepipelinePipelineStagesBeforeEntry</a>

---


### DataAwsccCodepipelinePipelineStagesBlockersList <a name="DataAwsccCodepipelinePipelineStagesBlockersList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesBlockersOutputReference <a name="DataAwsccCodepipelinePipelineStagesBlockersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers">DataAwsccCodepipelinePipelineStagesBlockers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesBlockers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers">DataAwsccCodepipelinePipelineStagesBlockers</a>

---


### DataAwsccCodepipelinePipelineStagesList <a name="DataAwsccCodepipelinePipelineStagesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions">DataAwsccCodepipelinePipelineStagesOnFailureConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnFailureConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions">DataAwsccCodepipelinePipelineStagesOnFailureConditions</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.retryConfiguration">retryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure">DataAwsccCodepipelinePipelineStagesOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccCodepipelinePipelineStagesOnFailureConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsList</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `retryConfiguration`<sup>Required</sup> <a name="retryConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.retryConfiguration"></a>

```typescript
public readonly retryConfiguration: DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnFailure;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure">DataAwsccCodepipelinePipelineStagesOnFailure</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.retryMode">retryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retryMode`<sup>Required</sup> <a name="retryMode" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.retryMode"></a>

```typescript
public readonly retryMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions">DataAwsccCodepipelinePipelineStagesOnSuccessConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.rules"></a>

```typescript
public readonly rules: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnSuccessConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions">DataAwsccCodepipelinePipelineStagesOnSuccessConditions</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.inputArtifacts">inputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.ruleTypeId">ruleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `inputArtifacts`<sup>Required</sup> <a name="inputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.inputArtifacts"></a>

```typescript
public readonly inputArtifacts: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `ruleTypeId`<sup>Required</sup> <a name="ruleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.ruleTypeId"></a>

```typescript
public readonly ruleTypeId: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess">DataAwsccCodepipelinePipelineStagesOnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStagesOnSuccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess">DataAwsccCodepipelinePipelineStagesOnSuccess</a>

---


### DataAwsccCodepipelinePipelineStagesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList">DataAwsccCodepipelinePipelineStagesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.beforeEntry">beforeEntry</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.blockers">blockers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList">DataAwsccCodepipelinePipelineStagesBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages">DataAwsccCodepipelinePipelineStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.actions"></a>

```typescript
public readonly actions: DataAwsccCodepipelinePipelineStagesActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList">DataAwsccCodepipelinePipelineStagesActionsList</a>

---

##### `beforeEntry`<sup>Required</sup> <a name="beforeEntry" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.beforeEntry"></a>

```typescript
public readonly beforeEntry: DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference</a>

---

##### `blockers`<sup>Required</sup> <a name="blockers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.blockers"></a>

```typescript
public readonly blockers: DataAwsccCodepipelinePipelineStagesBlockersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList">DataAwsccCodepipelinePipelineStagesBlockersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: DataAwsccCodepipelinePipelineStagesOnFailureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onSuccess"></a>

```typescript
public readonly onSuccess: DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineStages;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages">DataAwsccCodepipelinePipelineStages</a>

---


### DataAwsccCodepipelinePipelineTagsList <a name="DataAwsccCodepipelinePipelineTagsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineTagsOutputReference <a name="DataAwsccCodepipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags">DataAwsccCodepipelinePipelineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags">DataAwsccCodepipelinePipelineTags</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.push">push</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.sourceActionName">sourceActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration">DataAwsccCodepipelinePipelineTriggersGitConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.pullRequest"></a>

```typescript
public readonly pullRequest: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.push"></a>

```typescript
public readonly push: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList</a>

---

##### `sourceActionName`<sup>Required</sup> <a name="sourceActionName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.sourceActionName"></a>

```typescript
public readonly sourceActionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggersGitConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration">DataAwsccCodepipelinePipelineTriggersGitConfiguration</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.branches"></a>

```typescript
public readonly branches: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.filePaths">filePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush">DataAwsccCodepipelinePipelineTriggersGitConfigurationPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.branches"></a>

```typescript
public readonly branches: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference</a>

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggersGitConfigurationPush;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush">DataAwsccCodepipelinePipelineTriggersGitConfigurationPush</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.includes">includes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.includes"></a>

```typescript
public readonly includes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags</a>

---


### DataAwsccCodepipelinePipelineTriggersList <a name="DataAwsccCodepipelinePipelineTriggersList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineTriggersOutputReference <a name="DataAwsccCodepipelinePipelineTriggersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.gitConfiguration">gitConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers">DataAwsccCodepipelinePipelineTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitConfiguration`<sup>Required</sup> <a name="gitConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.gitConfiguration"></a>

```typescript
public readonly gitConfiguration: DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference</a>

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineTriggers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers">DataAwsccCodepipelinePipelineTriggers</a>

---


### DataAwsccCodepipelinePipelineVariablesList <a name="DataAwsccCodepipelinePipelineVariablesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccCodepipelinePipelineVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodepipelinePipelineVariablesOutputReference <a name="DataAwsccCodepipelinePipelineVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodepipelinePipeline } from '@cdktn/provider-awscc'

new dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables">DataAwsccCodepipelinePipelineVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodepipelinePipelineVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables">DataAwsccCodepipelinePipelineVariables</a>

---



