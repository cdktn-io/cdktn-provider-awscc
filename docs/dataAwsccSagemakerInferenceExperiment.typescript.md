# `dataAwsccSagemakerInferenceExperiment` Submodule <a name="`dataAwsccSagemakerInferenceExperiment` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerInferenceExperiment <a name="DataAwsccSagemakerInferenceExperiment" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment(scope: Construct, id: string, config: DataAwsccSagemakerInferenceExperimentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig">DataAwsccSagemakerInferenceExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig">DataAwsccSagemakerInferenceExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isConstruct"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerInferenceExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerInferenceExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_inference_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerInferenceExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.dataStorageConfig">dataStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference">DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.endpointMetadata">endpointMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference">DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.modelVariants">modelVariants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList">DataAwsccSagemakerInferenceExperimentModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference">DataAwsccSagemakerInferenceExperimentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.shadowModeConfig">shadowModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference">DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList">DataAwsccSagemakerInferenceExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `dataStorageConfig`<sup>Required</sup> <a name="dataStorageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.dataStorageConfig"></a>

```typescript
public readonly dataStorageConfig: DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference">DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `endpointMetadata`<sup>Required</sup> <a name="endpointMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.endpointMetadata"></a>

```typescript
public readonly endpointMetadata: DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference">DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference</a>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `modelVariants`<sup>Required</sup> <a name="modelVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.modelVariants"></a>

```typescript
public readonly modelVariants: DataAwsccSagemakerInferenceExperimentModelVariantsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList">DataAwsccSagemakerInferenceExperimentModelVariantsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.schedule"></a>

```typescript
public readonly schedule: DataAwsccSagemakerInferenceExperimentScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference">DataAwsccSagemakerInferenceExperimentScheduleOutputReference</a>

---

##### `shadowModeConfig`<sup>Required</sup> <a name="shadowModeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.shadowModeConfig"></a>

```typescript
public readonly shadowModeConfig: DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference">DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerInferenceExperimentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList">DataAwsccSagemakerInferenceExperimentTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperiment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerInferenceExperimentConfig <a name="DataAwsccSagemakerInferenceExperimentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentConfig: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_inference_experiment#id DataAwsccSagemakerInferenceExperiment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerInferenceExperimentDataStorageConfig <a name="DataAwsccSagemakerInferenceExperimentDataStorageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentDataStorageConfig: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig = { ... }
```


### DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType <a name="DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentDataStorageConfigContentType: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType = { ... }
```


### DataAwsccSagemakerInferenceExperimentEndpointMetadata <a name="DataAwsccSagemakerInferenceExperimentEndpointMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentEndpointMetadata: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata = { ... }
```


### DataAwsccSagemakerInferenceExperimentModelVariants <a name="DataAwsccSagemakerInferenceExperimentModelVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentModelVariants: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants = { ... }
```


### DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig <a name="DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig = { ... }
```


### DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig <a name="DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig = { ... }
```


### DataAwsccSagemakerInferenceExperimentSchedule <a name="DataAwsccSagemakerInferenceExperimentSchedule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentSchedule: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule = { ... }
```


### DataAwsccSagemakerInferenceExperimentShadowModeConfig <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentShadowModeConfig: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig = { ... }
```


### DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants = { ... }
```


### DataAwsccSagemakerInferenceExperimentTags <a name="DataAwsccSagemakerInferenceExperimentTags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

const dataAwsccSagemakerInferenceExperimentTags: dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference <a name="DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes">csvContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes">jsonContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType">DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvContentTypes`<sup>Required</sup> <a name="csvContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes"></a>

```typescript
public readonly csvContentTypes: string[];
```

- *Type:* string[]

---

##### `jsonContentTypes`<sup>Required</sup> <a name="jsonContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes"></a>

```typescript
public readonly jsonContentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType">DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType</a>

---


### DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference <a name="DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType">contentType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig">DataAwsccSagemakerInferenceExperimentDataStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType"></a>

```typescript
public readonly contentType: DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentDataStorageConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentDataStorageConfig">DataAwsccSagemakerInferenceExperimentDataStorageConfig</a>

---


### DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference <a name="DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName">endpointConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus">endpointStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata">DataAwsccSagemakerInferenceExperimentEndpointMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName"></a>

```typescript
public readonly endpointConfigName: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus"></a>

```typescript
public readonly endpointStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentEndpointMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentEndpointMetadata">DataAwsccSagemakerInferenceExperimentEndpointMetadata</a>

---


### DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference <a name="DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType">infrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig">realTimeInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType"></a>

```typescript
public readonly infrastructureType: string;
```

- *Type:* string

---

##### `realTimeInferenceConfig`<sup>Required</sup> <a name="realTimeInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig"></a>

```typescript
public readonly realTimeInferenceConfig: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

---


### DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference <a name="DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

---


### DataAwsccSagemakerInferenceExperimentModelVariantsList <a name="DataAwsccSagemakerInferenceExperimentModelVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference <a name="DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig">infrastructureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.variantName">variantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants">DataAwsccSagemakerInferenceExperimentModelVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureConfig`<sup>Required</sup> <a name="infrastructureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig"></a>

```typescript
public readonly infrastructureConfig: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a>

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentModelVariants;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentModelVariants">DataAwsccSagemakerInferenceExperimentModelVariants</a>

---


### DataAwsccSagemakerInferenceExperimentScheduleOutputReference <a name="DataAwsccSagemakerInferenceExperimentScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule">DataAwsccSagemakerInferenceExperimentSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentSchedule">DataAwsccSagemakerInferenceExperimentSchedule</a>

---


### DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants">shadowModelVariants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName">sourceModelVariantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig">DataAwsccSagemakerInferenceExperimentShadowModeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shadowModelVariants`<sup>Required</sup> <a name="shadowModelVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants"></a>

```typescript
public readonly shadowModelVariants: DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a>

---

##### `sourceModelVariantName`<sup>Required</sup> <a name="sourceModelVariantName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName"></a>

```typescript
public readonly sourceModelVariantName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentShadowModeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfig">DataAwsccSagemakerInferenceExperimentShadowModeConfig</a>

---


### DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference <a name="DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName">shadowModelVariantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants">DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `shadowModelVariantName`<sup>Required</sup> <a name="shadowModelVariantName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName"></a>

```typescript
public readonly shadowModelVariantName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants">DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>

---


### DataAwsccSagemakerInferenceExperimentTagsList <a name="DataAwsccSagemakerInferenceExperimentTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerInferenceExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerInferenceExperimentTagsOutputReference <a name="DataAwsccSagemakerInferenceExperimentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerInferenceExperiment } from '@cdktn/provider-awscc'

new dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags">DataAwsccSagemakerInferenceExperimentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerInferenceExperimentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceExperiment.DataAwsccSagemakerInferenceExperimentTags">DataAwsccSagemakerInferenceExperimentTags</a>

---



