# `dataAwsccSagemakerModelBiasJobDefinition` Submodule <a name="`dataAwsccSagemakerModelBiasJobDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerModelBiasJobDefinition <a name="DataAwsccSagemakerModelBiasJobDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_bias_job_definition awscc_sagemaker_model_bias_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition(scope: Construct, id: string, config: DataAwsccSagemakerModelBiasJobDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig">DataAwsccSagemakerModelBiasJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig">DataAwsccSagemakerModelBiasJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isConstruct"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerModelBiasJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerModelBiasJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_bias_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerModelBiasJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobDefinitionArn">jobDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobResources">jobResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasAppSpecification">modelBiasAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasBaselineConfig">modelBiasBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasJobInput">modelBiasJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfig">modelBiasJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList">DataAwsccSagemakerModelBiasJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `jobDefinitionArn`<sup>Required</sup> <a name="jobDefinitionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobDefinitionArn"></a>

```typescript
public readonly jobDefinitionArn: string;
```

- *Type:* string

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

---

##### `jobResources`<sup>Required</sup> <a name="jobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobResources"></a>

```typescript
public readonly jobResources: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference</a>

---

##### `modelBiasAppSpecification`<sup>Required</sup> <a name="modelBiasAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasAppSpecification"></a>

```typescript
public readonly modelBiasAppSpecification: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference</a>

---

##### `modelBiasBaselineConfig`<sup>Required</sup> <a name="modelBiasBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasBaselineConfig"></a>

```typescript
public readonly modelBiasBaselineConfig: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference</a>

---

##### `modelBiasJobInput`<sup>Required</sup> <a name="modelBiasJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasJobInput"></a>

```typescript
public readonly modelBiasJobInput: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference</a>

---

##### `modelBiasJobOutputConfig`<sup>Required</sup> <a name="modelBiasJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfig"></a>

```typescript
public readonly modelBiasJobOutputConfig: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stoppingCondition`<sup>Required</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.stoppingCondition"></a>

```typescript
public readonly stoppingCondition: DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerModelBiasJobDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList">DataAwsccSagemakerModelBiasJobDefinitionTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerModelBiasJobDefinitionConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionConfig: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_bias_job_definition#id DataAwsccSagemakerModelBiasJobDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerModelBiasJobDefinitionJobResources <a name="DataAwsccSagemakerModelBiasJobDefinitionJobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionJobResources: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionNetworkConfig: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition <a name="DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionStoppingCondition: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition = { ... }
```


### DataAwsccSagemakerModelBiasJobDefinitionTags <a name="DataAwsccSagemakerModelBiasJobDefinitionTags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelBiasJobDefinitionTags: dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources">DataAwsccSagemakerModelBiasJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionJobResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources">DataAwsccSagemakerModelBiasJobDefinitionJobResources</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUri">configUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification">DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configUri`<sup>Required</sup> <a name="configUri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUri"></a>

```typescript
public readonly configUri: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environment"></a>

```typescript
public readonly environment: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification">DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobName">baseliningJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResource">constraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseliningJobName`<sup>Required</sup> <a name="baseliningJobName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobName"></a>

```typescript
public readonly baseliningJobName: string;
```

- *Type:* string

---

##### `constraintsResource`<sup>Required</sup> <a name="constraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResource"></a>

```typescript
public readonly constraintsResource: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```typescript
public readonly header: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```typescript
public readonly line: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```typescript
public readonly json: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">dataCapturedDestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormat">datasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttribute">featuresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttribute">inferenceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute">probabilityThresholdAttribute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCapturedDestinationS3Uri`<sup>Required</sup> <a name="dataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```typescript
public readonly dataCapturedDestinationS3Uri: string;
```

- *Type:* string

---

##### `datasetFormat`<sup>Required</sup> <a name="datasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```typescript
public readonly datasetFormat: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffset"></a>

```typescript
public readonly endTimeOffset: string;
```

- *Type:* string

---

##### `featuresAttribute`<sup>Required</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttribute"></a>

```typescript
public readonly featuresAttribute: string;
```

- *Type:* string

---

##### `inferenceAttribute`<sup>Required</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```typescript
public readonly inferenceAttribute: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```typescript
public readonly probabilityAttribute: string;
```

- *Type:* string

---

##### `probabilityThresholdAttribute`<sup>Required</sup> <a name="probabilityThresholdAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute"></a>

```typescript
public readonly probabilityThresholdAttribute: number;
```

- *Type:* number

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttribute">featuresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttribute">inferenceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute">probabilityThresholdAttribute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffset"></a>

```typescript
public readonly endTimeOffset: string;
```

- *Type:* string

---

##### `featuresAttribute`<sup>Required</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttribute"></a>

```typescript
public readonly featuresAttribute: string;
```

- *Type:* string

---

##### `inferenceAttribute`<sup>Required</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```typescript
public readonly inferenceAttribute: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```typescript
public readonly probabilityAttribute: string;
```

- *Type:* string

---

##### `probabilityThresholdAttribute`<sup>Required</sup> <a name="probabilityThresholdAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute"></a>

```typescript
public readonly probabilityThresholdAttribute: number;
```

- *Type:* number

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInput">batchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3Input">groundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchTransformInput`<sup>Required</sup> <a name="batchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInput"></a>

```typescript
public readonly batchTransformInput: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference</a>

---

##### `endpointInput`<sup>Required</sup> <a name="endpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference</a>

---

##### `groundTruthS3Input`<sup>Required</sup> <a name="groundTruthS3Input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3Input"></a>

```typescript
public readonly groundTruthS3Input: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Output`<sup>Required</sup> <a name="s3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```typescript
public readonly s3Output: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3UploadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `s3UploadMode`<sup>Required</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```typescript
public readonly s3UploadMode: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputs">monitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `monitoringOutputs`<sup>Required</sup> <a name="monitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```typescript
public readonly monitoringOutputs: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInterContainerTrafficEncryption`<sup>Required</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```typescript
public readonly enableInterContainerTrafficEncryption: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition">DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRuntimeInSeconds`<sup>Required</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```typescript
public readonly maxRuntimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition">DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionTagsList <a name="DataAwsccSagemakerModelBiasJobDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelBiasJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags">DataAwsccSagemakerModelBiasJobDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelBiasJobDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags">DataAwsccSagemakerModelBiasJobDefinitionTags</a>

---



