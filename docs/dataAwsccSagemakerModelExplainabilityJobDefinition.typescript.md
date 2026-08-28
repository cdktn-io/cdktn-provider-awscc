# `dataAwsccSagemakerModelExplainabilityJobDefinition` Submodule <a name="`dataAwsccSagemakerModelExplainabilityJobDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerModelExplainabilityJobDefinition <a name="DataAwsccSagemakerModelExplainabilityJobDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_explainability_job_definition awscc_sagemaker_model_explainability_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition(scope: Construct, id: string, config: DataAwsccSagemakerModelExplainabilityJobDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerModelExplainabilityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isConstruct"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerModelExplainabilityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerModelExplainabilityJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerModelExplainabilityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_explainability_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerModelExplainabilityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobDefinitionArn">jobDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobResources">jobResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityAppSpecification">modelExplainabilityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityBaselineConfig">modelExplainabilityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobInput">modelExplainabilityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobOutputConfig">modelExplainabilityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList">DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `jobDefinitionArn`<sup>Required</sup> <a name="jobDefinitionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobDefinitionArn"></a>

```typescript
public readonly jobDefinitionArn: string;
```

- *Type:* string

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

---

##### `jobResources`<sup>Required</sup> <a name="jobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.jobResources"></a>

```typescript
public readonly jobResources: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference</a>

---

##### `modelExplainabilityAppSpecification`<sup>Required</sup> <a name="modelExplainabilityAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityAppSpecification"></a>

```typescript
public readonly modelExplainabilityAppSpecification: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference</a>

---

##### `modelExplainabilityBaselineConfig`<sup>Required</sup> <a name="modelExplainabilityBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityBaselineConfig"></a>

```typescript
public readonly modelExplainabilityBaselineConfig: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference</a>

---

##### `modelExplainabilityJobInput`<sup>Required</sup> <a name="modelExplainabilityJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobInput"></a>

```typescript
public readonly modelExplainabilityJobInput: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference</a>

---

##### `modelExplainabilityJobOutputConfig`<sup>Required</sup> <a name="modelExplainabilityJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.modelExplainabilityJobOutputConfig"></a>

```typescript
public readonly modelExplainabilityJobOutputConfig: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stoppingCondition`<sup>Required</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.stoppingCondition"></a>

```typescript
public readonly stoppingCondition: DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList">DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerModelExplainabilityJobDefinitionConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionConfig: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_explainability_job_definition#id DataAwsccSagemakerModelExplainabilityJobDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionJobResources: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition = { ... }
```


### DataAwsccSagemakerModelExplainabilityJobDefinitionTags <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionTags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelExplainabilityJobDefinitionTags: dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources">DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.configUri">configUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configUri`<sup>Required</sup> <a name="configUri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.configUri"></a>

```typescript
public readonly configUri: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.environment"></a>

```typescript
public readonly environment: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.baseliningJobName">baseliningJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.constraintsResource">constraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseliningJobName`<sup>Required</sup> <a name="baseliningJobName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.baseliningJobName"></a>

```typescript
public readonly baseliningJobName: string;
```

- *Type:* string

---

##### `constraintsResource`<sup>Required</sup> <a name="constraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.constraintsResource"></a>

```typescript
public readonly constraintsResource: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```typescript
public readonly header: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```typescript
public readonly line: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```typescript
public readonly json: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">dataCapturedDestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.datasetFormat">datasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.featuresAttribute">featuresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.inferenceAttribute">inferenceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCapturedDestinationS3Uri`<sup>Required</sup> <a name="dataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```typescript
public readonly dataCapturedDestinationS3Uri: string;
```

- *Type:* string

---

##### `datasetFormat`<sup>Required</sup> <a name="datasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```typescript
public readonly datasetFormat: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `featuresAttribute`<sup>Required</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.featuresAttribute"></a>

```typescript
public readonly featuresAttribute: string;
```

- *Type:* string

---

##### `inferenceAttribute`<sup>Required</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```typescript
public readonly inferenceAttribute: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```typescript
public readonly probabilityAttribute: string;
```

- *Type:* string

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.featuresAttribute">featuresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.inferenceAttribute">inferenceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `featuresAttribute`<sup>Required</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.featuresAttribute"></a>

```typescript
public readonly featuresAttribute: string;
```

- *Type:* string

---

##### `inferenceAttribute`<sup>Required</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```typescript
public readonly inferenceAttribute: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```typescript
public readonly probabilityAttribute: string;
```

- *Type:* string

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.batchTransformInput">batchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchTransformInput`<sup>Required</sup> <a name="batchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.batchTransformInput"></a>

```typescript
public readonly batchTransformInput: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference</a>

---

##### `endpointInput`<sup>Required</sup> <a name="endpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Output`<sup>Required</sup> <a name="s3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```typescript
public readonly s3Output: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3UploadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `s3UploadMode`<sup>Required</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```typescript
public readonly s3UploadMode: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.monitoringOutputs">monitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `monitoringOutputs`<sup>Required</sup> <a name="monitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```typescript
public readonly monitoringOutputs: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInterContainerTrafficEncryption`<sup>Required</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```typescript
public readonly enableInterContainerTrafficEncryption: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition">DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRuntimeInSeconds`<sup>Required</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```typescript
public readonly maxRuntimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition">DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition</a>

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference <a name="DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelExplainabilityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags">DataAwsccSagemakerModelExplainabilityJobDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelExplainabilityJobDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelExplainabilityJobDefinition.DataAwsccSagemakerModelExplainabilityJobDefinitionTags">DataAwsccSagemakerModelExplainabilityJobDefinitionTags</a>

---



