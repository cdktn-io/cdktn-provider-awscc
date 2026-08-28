# `dataAwsccSagemakerModelQualityJobDefinition` Submodule <a name="`dataAwsccSagemakerModelQualityJobDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerModelQualityJobDefinition <a name="DataAwsccSagemakerModelQualityJobDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_quality_job_definition awscc_sagemaker_model_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition(scope: Construct, id: string, config: DataAwsccSagemakerModelQualityJobDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig">DataAwsccSagemakerModelQualityJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig">DataAwsccSagemakerModelQualityJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerModelQualityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isConstruct"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerModelQualityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerModelQualityJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerModelQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerModelQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.jobDefinitionArn">jobDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.jobResources">jobResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.modelQualityAppSpecification">modelQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.modelQualityBaselineConfig">modelQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.modelQualityJobInput">modelQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfig">modelQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList">DataAwsccSagemakerModelQualityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `jobDefinitionArn`<sup>Required</sup> <a name="jobDefinitionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.jobDefinitionArn"></a>

```typescript
public readonly jobDefinitionArn: string;
```

- *Type:* string

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

---

##### `jobResources`<sup>Required</sup> <a name="jobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.jobResources"></a>

```typescript
public readonly jobResources: DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `modelQualityAppSpecification`<sup>Required</sup> <a name="modelQualityAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.modelQualityAppSpecification"></a>

```typescript
public readonly modelQualityAppSpecification: DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference</a>

---

##### `modelQualityBaselineConfig`<sup>Required</sup> <a name="modelQualityBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.modelQualityBaselineConfig"></a>

```typescript
public readonly modelQualityBaselineConfig: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference</a>

---

##### `modelQualityJobInput`<sup>Required</sup> <a name="modelQualityJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.modelQualityJobInput"></a>

```typescript
public readonly modelQualityJobInput: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference</a>

---

##### `modelQualityJobOutputConfig`<sup>Required</sup> <a name="modelQualityJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfig"></a>

```typescript
public readonly modelQualityJobOutputConfig: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stoppingCondition`<sup>Required</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.stoppingCondition"></a>

```typescript
public readonly stoppingCondition: DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerModelQualityJobDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList">DataAwsccSagemakerModelQualityJobDefinitionTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerModelQualityJobDefinitionConfig <a name="DataAwsccSagemakerModelQualityJobDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionConfig: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_quality_job_definition#id DataAwsccSagemakerModelQualityJobDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerModelQualityJobDefinitionJobResources <a name="DataAwsccSagemakerModelQualityJobDefinitionJobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResources.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionJobResources: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResources = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig <a name="DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig <a name="DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionNetworkConfig: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig <a name="DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition <a name="DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionStoppingCondition: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition = { ... }
```


### DataAwsccSagemakerModelQualityJobDefinitionTags <a name="DataAwsccSagemakerModelQualityJobDefinitionTags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

const dataAwsccSagemakerModelQualityJobDefinitionTags: dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResources">DataAwsccSagemakerModelQualityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionJobResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionJobResources">DataAwsccSagemakerModelQualityJobDefinitionJobResources</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">postAnalyticsProcessorSourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemType">problemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">recordPreprocessorSourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification">DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environment"></a>

```typescript
public readonly environment: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `postAnalyticsProcessorSourceUri`<sup>Required</sup> <a name="postAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```typescript
public readonly postAnalyticsProcessorSourceUri: string;
```

- *Type:* string

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemType"></a>

```typescript
public readonly problemType: string;
```

- *Type:* string

---

##### `recordPreprocessorSourceUri`<sup>Required</sup> <a name="recordPreprocessorSourceUri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```typescript
public readonly recordPreprocessorSourceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification">DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobName">baseliningJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResource">constraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig">DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseliningJobName`<sup>Required</sup> <a name="baseliningJobName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobName"></a>

```typescript
public readonly baseliningJobName: string;
```

- *Type:* string

---

##### `constraintsResource`<sup>Required</sup> <a name="constraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```typescript
public readonly constraintsResource: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig">DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```typescript
public readonly header: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```typescript
public readonly line: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```typescript
public readonly json: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">dataCapturedDestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">datasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttribute">inferenceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute">probabilityThresholdAttribute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCapturedDestinationS3Uri`<sup>Required</sup> <a name="dataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```typescript
public readonly dataCapturedDestinationS3Uri: string;
```

- *Type:* string

---

##### `datasetFormat`<sup>Required</sup> <a name="datasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```typescript
public readonly datasetFormat: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffset"></a>

```typescript
public readonly endTimeOffset: string;
```

- *Type:* string

---

##### `inferenceAttribute`<sup>Required</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```typescript
public readonly inferenceAttribute: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```typescript
public readonly probabilityAttribute: string;
```

- *Type:* string

---

##### `probabilityThresholdAttribute`<sup>Required</sup> <a name="probabilityThresholdAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute"></a>

```typescript
public readonly probabilityThresholdAttribute: number;
```

- *Type:* number

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttribute">inferenceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute">probabilityThresholdAttribute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffset"></a>

```typescript
public readonly endTimeOffset: string;
```

- *Type:* string

---

##### `inferenceAttribute`<sup>Required</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```typescript
public readonly inferenceAttribute: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```typescript
public readonly probabilityAttribute: string;
```

- *Type:* string

---

##### `probabilityThresholdAttribute`<sup>Required</sup> <a name="probabilityThresholdAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute"></a>

```typescript
public readonly probabilityThresholdAttribute: number;
```

- *Type:* number

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```typescript
public readonly s3DataDistributionType: string;
```

- *Type:* string

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```typescript
public readonly s3InputMode: string;
```

- *Type:* string

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInput">batchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3Input">groundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchTransformInput`<sup>Required</sup> <a name="batchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInput"></a>

```typescript
public readonly batchTransformInput: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference</a>

---

##### `endpointInput`<sup>Required</sup> <a name="endpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference</a>

---

##### `groundTruthS3Input`<sup>Required</sup> <a name="groundTruthS3Input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3Input"></a>

```typescript
public readonly groundTruthS3Input: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Output`<sup>Required</sup> <a name="s3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```typescript
public readonly s3Output: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">localPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3UploadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```typescript
public readonly localPath: string;
```

- *Type:* string

---

##### `s3UploadMode`<sup>Required</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```typescript
public readonly s3UploadMode: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputs">monitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `monitoringOutputs`<sup>Required</sup> <a name="monitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```typescript
public readonly monitoringOutputs: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig">DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInterContainerTrafficEncryption`<sup>Required</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```typescript
public readonly enableInterContainerTrafficEncryption: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig">DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition">DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRuntimeInSeconds`<sup>Required</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```typescript
public readonly maxRuntimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition">DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition</a>

---


### DataAwsccSagemakerModelQualityJobDefinitionTagsList <a name="DataAwsccSagemakerModelQualityJobDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference <a name="DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerModelQualityJobDefinition } from '@cdktn/provider-awscc'

new dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTags">DataAwsccSagemakerModelQualityJobDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerModelQualityJobDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelQualityJobDefinition.DataAwsccSagemakerModelQualityJobDefinitionTags">DataAwsccSagemakerModelQualityJobDefinitionTags</a>

---



