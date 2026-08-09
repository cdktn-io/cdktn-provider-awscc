# `dataAwsccSagemakerExperimentTrialComponent` Submodule <a name="`dataAwsccSagemakerExperimentTrialComponent` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerExperimentTrialComponent <a name="DataAwsccSagemakerExperimentTrialComponent" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_experiment_trial_component awscc_sagemaker_experiment_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent(scope: Construct, id: string, config: DataAwsccSagemakerExperimentTrialComponentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig">DataAwsccSagemakerExperimentTrialComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig">DataAwsccSagemakerExperimentTrialComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isConstruct"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerExperimentTrialComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerExperimentTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_experiment_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerExperimentTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.lineageGroupArn">lineageGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.metadataProperties">metadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference">DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference">DataAwsccSagemakerExperimentTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList">DataAwsccSagemakerExperimentTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.trialComponentName">trialComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `lineageGroupArn`<sup>Required</sup> <a name="lineageGroupArn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.lineageGroupArn"></a>

```typescript
public readonly lineageGroupArn: string;
```

- *Type:* string

---

##### `metadataProperties`<sup>Required</sup> <a name="metadataProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.metadataProperties"></a>

```typescript
public readonly metadataProperties: DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference">DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.status"></a>

```typescript
public readonly status: DataAwsccSagemakerExperimentTrialComponentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference">DataAwsccSagemakerExperimentTrialComponentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerExperimentTrialComponentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList">DataAwsccSagemakerExperimentTrialComponentTagsList</a>

---

##### `trialComponentName`<sup>Required</sup> <a name="trialComponentName" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.trialComponentName"></a>

```typescript
public readonly trialComponentName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerExperimentTrialComponentConfig <a name="DataAwsccSagemakerExperimentTrialComponentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

const dataAwsccSagemakerExperimentTrialComponentConfig: dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_experiment_trial_component#id DataAwsccSagemakerExperimentTrialComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerExperimentTrialComponentMetadataProperties <a name="DataAwsccSagemakerExperimentTrialComponentMetadataProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataProperties.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

const dataAwsccSagemakerExperimentTrialComponentMetadataProperties: dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataProperties = { ... }
```


### DataAwsccSagemakerExperimentTrialComponentStatus <a name="DataAwsccSagemakerExperimentTrialComponentStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatus.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

const dataAwsccSagemakerExperimentTrialComponentStatus: dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatus = { ... }
```


### DataAwsccSagemakerExperimentTrialComponentTags <a name="DataAwsccSagemakerExperimentTrialComponentTags" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

const dataAwsccSagemakerExperimentTrialComponentTags: dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference <a name="DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId">commitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy">generatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataProperties">DataAwsccSagemakerExperimentTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

---

##### `generatedBy`<sup>Required</sup> <a name="generatedBy" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```typescript
public readonly generatedBy: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerExperimentTrialComponentMetadataProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentMetadataProperties">DataAwsccSagemakerExperimentTrialComponentMetadataProperties</a>

---


### DataAwsccSagemakerExperimentTrialComponentStatusOutputReference <a name="DataAwsccSagemakerExperimentTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus">primaryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatus">DataAwsccSagemakerExperimentTrialComponentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `primaryStatus`<sup>Required</sup> <a name="primaryStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus"></a>

```typescript
public readonly primaryStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerExperimentTrialComponentStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentStatus">DataAwsccSagemakerExperimentTrialComponentStatus</a>

---


### DataAwsccSagemakerExperimentTrialComponentTagsList <a name="DataAwsccSagemakerExperimentTrialComponentTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerExperimentTrialComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerExperimentTrialComponentTagsOutputReference <a name="DataAwsccSagemakerExperimentTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerExperimentTrialComponent } from '@cdktn/provider-awscc'

new dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTags">DataAwsccSagemakerExperimentTrialComponentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerExperimentTrialComponentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerExperimentTrialComponent.DataAwsccSagemakerExperimentTrialComponentTags">DataAwsccSagemakerExperimentTrialComponentTags</a>

---



