# `dataAwsccSagemakerAlgorithm` Submodule <a name="`dataAwsccSagemakerAlgorithm` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerAlgorithm <a name="DataAwsccSagemakerAlgorithm" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_algorithm awscc_sagemaker_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm(scope: Construct, id: string, config: DataAwsccSagemakerAlgorithmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig">DataAwsccSagemakerAlgorithmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig">DataAwsccSagemakerAlgorithmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmArn">algorithmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmDescription">algorithmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmName">algorithmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.certifyForMarketplace">certifyForMarketplace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.inferenceSpecification">inferenceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList">DataAwsccSagemakerAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.trainingSpecification">trainingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `algorithmArn`<sup>Required</sup> <a name="algorithmArn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmArn"></a>

```typescript
public readonly algorithmArn: string;
```

- *Type:* string

---

##### `algorithmDescription`<sup>Required</sup> <a name="algorithmDescription" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmDescription"></a>

```typescript
public readonly algorithmDescription: string;
```

- *Type:* string

---

##### `algorithmName`<sup>Required</sup> <a name="algorithmName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmName"></a>

```typescript
public readonly algorithmName: string;
```

- *Type:* string

---

##### `certifyForMarketplace`<sup>Required</sup> <a name="certifyForMarketplace" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.certifyForMarketplace"></a>

```typescript
public readonly certifyForMarketplace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `inferenceSpecification`<sup>Required</sup> <a name="inferenceSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.inferenceSpecification"></a>

```typescript
public readonly inferenceSpecification: DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerAlgorithmTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList">DataAwsccSagemakerAlgorithmTagsList</a>

---

##### `trainingSpecification`<sup>Required</sup> <a name="trainingSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.trainingSpecification"></a>

```typescript
public readonly trainingSpecification: DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerAlgorithmConfig <a name="DataAwsccSagemakerAlgorithmConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmConfig: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_algorithm#id DataAwsccSagemakerAlgorithm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerAlgorithmInferenceSpecification <a name="DataAwsccSagemakerAlgorithmInferenceSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmInferenceSpecification: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification = { ... }
```


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainers <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmInferenceSpecificationContainers: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers = { ... }
```


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput = { ... }
```


### DataAwsccSagemakerAlgorithmTags <a name="DataAwsccSagemakerAlgorithmTags" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTags: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecification: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics = { ... }
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

const dataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels: dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig">dataInputConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInputConfig`<sup>Required</sup> <a name="dataInputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig"></a>

```typescript
public readonly dataInputConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname">containerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion">frameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint">isCheckpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput">modelInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName">nearestModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers">DataAwsccSagemakerAlgorithmInferenceSpecificationContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerHostname`<sup>Required</sup> <a name="containerHostname" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname"></a>

```typescript
public readonly containerHostname: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment"></a>

```typescript
public readonly environment: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `frameworkVersion`<sup>Required</sup> <a name="frameworkVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion"></a>

```typescript
public readonly frameworkVersion: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `isCheckpoint`<sup>Required</sup> <a name="isCheckpoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint"></a>

```typescript
public readonly isCheckpoint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `modelInput`<sup>Required</sup> <a name="modelInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a>

---

##### `nearestModelName`<sup>Required</sup> <a name="nearestModelName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName"></a>

```typescript
public readonly nearestModelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmInferenceSpecificationContainers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers">DataAwsccSagemakerAlgorithmInferenceSpecificationContainers</a>

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes">supportedContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes">supportedRealtimeInferenceInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes">supportedResponseMimeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes">supportedTransformInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification">DataAwsccSagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.containers"></a>

```typescript
public readonly containers: DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList</a>

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes"></a>

```typescript
public readonly supportedContentTypes: string[];
```

- *Type:* string[]

---

##### `supportedRealtimeInferenceInstanceTypes`<sup>Required</sup> <a name="supportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes"></a>

```typescript
public readonly supportedRealtimeInferenceInstanceTypes: string[];
```

- *Type:* string[]

---

##### `supportedResponseMimeTypes`<sup>Required</sup> <a name="supportedResponseMimeTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes"></a>

```typescript
public readonly supportedResponseMimeTypes: string[];
```

- *Type:* string[]

---

##### `supportedTransformInstanceTypes`<sup>Required</sup> <a name="supportedTransformInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes"></a>

```typescript
public readonly supportedTransformInstanceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmInferenceSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification">DataAwsccSagemakerAlgorithmInferenceSpecification</a>

---


### DataAwsccSagemakerAlgorithmTagsList <a name="DataAwsccSagemakerAlgorithmTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerAlgorithmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerAlgorithmTagsOutputReference <a name="DataAwsccSagemakerAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags">DataAwsccSagemakerAlgorithmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags">DataAwsccSagemakerAlgorithmTags</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions">metricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters">supportedHyperParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes">supportedTrainingInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics">supportedTuningJobObjectiveMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining">supportsDistributedTraining</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels">trainingChannels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage">trainingImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest">trainingImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification">DataAwsccSagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDefinitions`<sup>Required</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions"></a>

```typescript
public readonly metricDefinitions: DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a>

---

##### `supportedHyperParameters`<sup>Required</sup> <a name="supportedHyperParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters"></a>

```typescript
public readonly supportedHyperParameters: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a>

---

##### `supportedTrainingInstanceTypes`<sup>Required</sup> <a name="supportedTrainingInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes"></a>

```typescript
public readonly supportedTrainingInstanceTypes: string[];
```

- *Type:* string[]

---

##### `supportedTuningJobObjectiveMetrics`<sup>Required</sup> <a name="supportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics"></a>

```typescript
public readonly supportedTuningJobObjectiveMetrics: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a>

---

##### `supportsDistributedTraining`<sup>Required</sup> <a name="supportsDistributedTraining" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining"></a>

```typescript
public readonly supportsDistributedTraining: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trainingChannels`<sup>Required</sup> <a name="trainingChannels" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels"></a>

```typescript
public readonly trainingChannels: DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a>

---

##### `trainingImage`<sup>Required</sup> <a name="trainingImage" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage"></a>

```typescript
public readonly trainingImage: string;
```

- *Type:* string

---

##### `trainingImageDigest`<sup>Required</sup> <a name="trainingImageDigest" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest"></a>

```typescript
public readonly trainingImageDigest: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification">DataAwsccSagemakerAlgorithmTrainingSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired">isRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable">isTunable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isTunable`<sup>Required</sup> <a name="isTunable" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable"></a>

```typescript
public readonly isTunable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range"></a>

```typescript
public readonly range: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification">categoricalParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification">continuousParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification">integerParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoricalParameterRangeSpecification`<sup>Required</sup> <a name="categoricalParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification"></a>

```typescript
public readonly categoricalParameterRangeSpecification: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a>

---

##### `continuousParameterRangeSpecification`<sup>Required</sup> <a name="continuousParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification"></a>

```typescript
public readonly continuousParameterRangeSpecification: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a>

---

##### `integerParameterRangeSpecification`<sup>Required</sup> <a name="integerParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification"></a>

```typescript
public readonly integerParameterRangeSpecification: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerAlgorithm } from '@cdktn/provider-awscc'

new dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired">isRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes">supportedCompressionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes">supportedContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes">supportedInputModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `supportedCompressionTypes`<sup>Required</sup> <a name="supportedCompressionTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes"></a>

```typescript
public readonly supportedCompressionTypes: string[];
```

- *Type:* string[]

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes"></a>

```typescript
public readonly supportedContentTypes: string[];
```

- *Type:* string[]

---

##### `supportedInputModes`<sup>Required</sup> <a name="supportedInputModes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes"></a>

```typescript
public readonly supportedInputModes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels</a>

---



