# `dataAwsccImagebuilderImagePipeline` Submodule <a name="`dataAwsccImagebuilderImagePipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccImagebuilderImagePipeline <a name="DataAwsccImagebuilderImagePipeline" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline(scope: Construct, id: string, config: DataAwsccImagebuilderImagePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig">DataAwsccImagebuilderImagePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig">DataAwsccImagebuilderImagePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isConstruct"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformElement"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformDataSource"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccImagebuilderImagePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccImagebuilderImagePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccImagebuilderImagePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.containerRecipeArn">containerRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.distributionConfigurationArn">distributionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.enhancedImageMetadataEnabled">enhancedImageMetadataEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageRecipeArn">imageRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageTags">imageTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageTestsConfiguration">imageTestsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.infrastructureConfigurationArn">infrastructureConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference">DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference">DataAwsccImagebuilderImagePipelineScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.workflows">workflows</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList">DataAwsccImagebuilderImagePipelineWorkflowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `containerRecipeArn`<sup>Required</sup> <a name="containerRecipeArn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.containerRecipeArn"></a>

```typescript
public readonly containerRecipeArn: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributionConfigurationArn`<sup>Required</sup> <a name="distributionConfigurationArn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.distributionConfigurationArn"></a>

```typescript
public readonly distributionConfigurationArn: string;
```

- *Type:* string

---

##### `enhancedImageMetadataEnabled`<sup>Required</sup> <a name="enhancedImageMetadataEnabled" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.enhancedImageMetadataEnabled"></a>

```typescript
public readonly enhancedImageMetadataEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `imageRecipeArn`<sup>Required</sup> <a name="imageRecipeArn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageRecipeArn"></a>

```typescript
public readonly imageRecipeArn: string;
```

- *Type:* string

---

##### `imageScanningConfiguration`<sup>Required</sup> <a name="imageScanningConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference</a>

---

##### `imageTags`<sup>Required</sup> <a name="imageTags" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageTags"></a>

```typescript
public readonly imageTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `imageTestsConfiguration`<sup>Required</sup> <a name="imageTestsConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.imageTestsConfiguration"></a>

```typescript
public readonly imageTestsConfiguration: DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference</a>

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="infrastructureConfigurationArn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.infrastructureConfigurationArn"></a>

```typescript
public readonly infrastructureConfigurationArn: string;
```

- *Type:* string

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference">DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.schedule"></a>

```typescript
public readonly schedule: DataAwsccImagebuilderImagePipelineScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference">DataAwsccImagebuilderImagePipelineScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `workflows`<sup>Required</sup> <a name="workflows" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.workflows"></a>

```typescript
public readonly workflows: DataAwsccImagebuilderImagePipelineWorkflowsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList">DataAwsccImagebuilderImagePipelineWorkflowsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccImagebuilderImagePipelineConfig <a name="DataAwsccImagebuilderImagePipelineConfig" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineConfig: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_image_pipeline#id DataAwsccImagebuilderImagePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccImagebuilderImagePipelineImageScanningConfiguration <a name="DataAwsccImagebuilderImagePipelineImageScanningConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineImageScanningConfiguration: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration = { ... }
```


### DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration <a name="DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration = { ... }
```


### DataAwsccImagebuilderImagePipelineImageTestsConfiguration <a name="DataAwsccImagebuilderImagePipelineImageTestsConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineImageTestsConfiguration: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration = { ... }
```


### DataAwsccImagebuilderImagePipelineLoggingConfiguration <a name="DataAwsccImagebuilderImagePipelineLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineLoggingConfiguration: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration = { ... }
```


### DataAwsccImagebuilderImagePipelineSchedule <a name="DataAwsccImagebuilderImagePipelineSchedule" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineSchedule: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule = { ... }
```


### DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy <a name="DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy = { ... }
```


### DataAwsccImagebuilderImagePipelineWorkflows <a name="DataAwsccImagebuilderImagePipelineWorkflows" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineWorkflows: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows = { ... }
```


### DataAwsccImagebuilderImagePipelineWorkflowsParameters <a name="DataAwsccImagebuilderImagePipelineWorkflowsParameters" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

const dataAwsccImagebuilderImagePipelineWorkflowsParameters: dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference <a name="DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">containerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerTags`<sup>Required</sup> <a name="containerTags" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---


### DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference <a name="DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration">ecrConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled">imageScanningEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration">DataAwsccImagebuilderImagePipelineImageScanningConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ecrConfiguration`<sup>Required</sup> <a name="ecrConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```typescript
public readonly ecrConfiguration: DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `imageScanningEnabled`<sup>Required</sup> <a name="imageScanningEnabled" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```typescript
public readonly imageScanningEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderImagePipelineImageScanningConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageScanningConfiguration">DataAwsccImagebuilderImagePipelineImageScanningConfiguration</a>

---


### DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference <a name="DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled">imageTestsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration">DataAwsccImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageTestsEnabled`<sup>Required</sup> <a name="imageTestsEnabled" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```typescript
public readonly imageTestsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeoutMinutes`<sup>Required</sup> <a name="timeoutMinutes" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderImagePipelineImageTestsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineImageTestsConfiguration">DataAwsccImagebuilderImagePipelineImageTestsConfiguration</a>

---


### DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference <a name="DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.imageLogGroupName">imageLogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.pipelineLogGroupName">pipelineLogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration">DataAwsccImagebuilderImagePipelineLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageLogGroupName`<sup>Required</sup> <a name="imageLogGroupName" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.imageLogGroupName"></a>

```typescript
public readonly imageLogGroupName: string;
```

- *Type:* string

---

##### `pipelineLogGroupName`<sup>Required</sup> <a name="pipelineLogGroupName" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.pipelineLogGroupName"></a>

```typescript
public readonly pipelineLogGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderImagePipelineLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineLoggingConfiguration">DataAwsccImagebuilderImagePipelineLoggingConfiguration</a>

---


### DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference <a name="DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.failureCount">failureCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy">DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureCount`<sup>Required</sup> <a name="failureCount" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.failureCount"></a>

```typescript
public readonly failureCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy">DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy</a>

---


### DataAwsccImagebuilderImagePipelineScheduleOutputReference <a name="DataAwsccImagebuilderImagePipelineScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.autoDisablePolicy">autoDisablePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference">DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition">pipelineExecutionStartCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule">DataAwsccImagebuilderImagePipelineSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoDisablePolicy`<sup>Required</sup> <a name="autoDisablePolicy" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.autoDisablePolicy"></a>

```typescript
public readonly autoDisablePolicy: DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference">DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference</a>

---

##### `pipelineExecutionStartCondition`<sup>Required</sup> <a name="pipelineExecutionStartCondition" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition"></a>

```typescript
public readonly pipelineExecutionStartCondition: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderImagePipelineSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineSchedule">DataAwsccImagebuilderImagePipelineSchedule</a>

---


### DataAwsccImagebuilderImagePipelineWorkflowsList <a name="DataAwsccImagebuilderImagePipelineWorkflowsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.get"></a>

```typescript
public get(index: number): DataAwsccImagebuilderImagePipelineWorkflowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccImagebuilderImagePipelineWorkflowsOutputReference <a name="DataAwsccImagebuilderImagePipelineWorkflowsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.onFailure">onFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.parallelGroup">parallelGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList">DataAwsccImagebuilderImagePipelineWorkflowsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.workflowArn">workflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows">DataAwsccImagebuilderImagePipelineWorkflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: string;
```

- *Type:* string

---

##### `parallelGroup`<sup>Required</sup> <a name="parallelGroup" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.parallelGroup"></a>

```typescript
public readonly parallelGroup: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataAwsccImagebuilderImagePipelineWorkflowsParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList">DataAwsccImagebuilderImagePipelineWorkflowsParametersList</a>

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderImagePipelineWorkflows;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflows">DataAwsccImagebuilderImagePipelineWorkflows</a>

---


### DataAwsccImagebuilderImagePipelineWorkflowsParametersList <a name="DataAwsccImagebuilderImagePipelineWorkflowsParametersList" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.get"></a>

```typescript
public get(index: number): DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference <a name="DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccImagebuilderImagePipeline } from '@cdktn/provider-awscc'

new dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters">DataAwsccImagebuilderImagePipelineWorkflowsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccImagebuilderImagePipelineWorkflowsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderImagePipeline.DataAwsccImagebuilderImagePipelineWorkflowsParameters">DataAwsccImagebuilderImagePipelineWorkflowsParameters</a>

---



