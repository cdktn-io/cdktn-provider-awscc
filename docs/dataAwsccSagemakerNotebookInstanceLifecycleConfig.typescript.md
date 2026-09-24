# `dataAwsccSagemakerNotebookInstanceLifecycleConfig` Submodule <a name="`dataAwsccSagemakerNotebookInstanceLifecycleConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfig <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig(scope: Construct, id: string, config: DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig">DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig">DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerNotebookInstanceLifecycleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerNotebookInstanceLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerNotebookInstanceLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn">notebookInstanceLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName">notebookInstanceLifecycleConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onCreate">onCreate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onStart">onStart</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList">DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `notebookInstanceLifecycleConfigArn`<sup>Required</sup> <a name="notebookInstanceLifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn"></a>

```typescript
public readonly notebookInstanceLifecycleConfigArn: string;
```

- *Type:* string

---

##### `notebookInstanceLifecycleConfigName`<sup>Required</sup> <a name="notebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName"></a>

```typescript
public readonly notebookInstanceLifecycleConfigName: string;
```

- *Type:* string

---

##### `onCreate`<sup>Required</sup> <a name="onCreate" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onCreate"></a>

```typescript
public readonly onCreate: DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList</a>

---

##### `onStart`<sup>Required</sup> <a name="onStart" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onStart"></a>

```typescript
public readonly onStart: DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList">DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerNotebookInstanceLifecycleConfigConfig: dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config#id DataAwsccSagemakerNotebookInstanceLifecycleConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate: dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate = { ... }
```


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart: dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart = { ... }
```


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTags <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerNotebookInstanceLifecycleConfigTags: dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate</a>

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart</a>

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerNotebookInstanceLifecycleConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags">DataAwsccSagemakerNotebookInstanceLifecycleConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerNotebookInstanceLifecycleConfigTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags">DataAwsccSagemakerNotebookInstanceLifecycleConfigTags</a>

---



