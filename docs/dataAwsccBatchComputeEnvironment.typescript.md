# `dataAwsccBatchComputeEnvironment` Submodule <a name="`dataAwsccBatchComputeEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBatchComputeEnvironment <a name="DataAwsccBatchComputeEnvironment" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/batch_compute_environment awscc_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment(scope: Construct, id: string, config: DataAwsccBatchComputeEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig">DataAwsccBatchComputeEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig">DataAwsccBatchComputeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBatchComputeEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isConstruct"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformElement"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformDataSource"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBatchComputeEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBatchComputeEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeEnvironmentArn">computeEnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeResources">computeResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.ecsSettings">ecsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference">DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.eksConfiguration">eksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference">DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.replaceComputeEnvironment">replaceComputeEnvironment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.unmanagedvCpus">unmanagedvCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference">DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `computeEnvironmentArn`<sup>Required</sup> <a name="computeEnvironmentArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeEnvironmentArn"></a>

```typescript
public readonly computeEnvironmentArn: string;
```

- *Type:* string

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="computeEnvironmentName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeEnvironmentName"></a>

```typescript
public readonly computeEnvironmentName: string;
```

- *Type:* string

---

##### `computeResources`<sup>Required</sup> <a name="computeResources" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.computeResources"></a>

```typescript
public readonly computeResources: DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference</a>

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `ecsSettings`<sup>Required</sup> <a name="ecsSettings" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.ecsSettings"></a>

```typescript
public readonly ecsSettings: DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference">DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference</a>

---

##### `eksConfiguration`<sup>Required</sup> <a name="eksConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.eksConfiguration"></a>

```typescript
public readonly eksConfiguration: DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference">DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference</a>

---

##### `replaceComputeEnvironment`<sup>Required</sup> <a name="replaceComputeEnvironment" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.replaceComputeEnvironment"></a>

```typescript
public readonly replaceComputeEnvironment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unmanagedvCpus`<sup>Required</sup> <a name="unmanagedvCpus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.unmanagedvCpus"></a>

```typescript
public readonly unmanagedvCpus: number;
```

- *Type:* number

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference">DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBatchComputeEnvironmentComputeResources <a name="DataAwsccBatchComputeEnvironmentComputeResources" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResources: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration <a name="DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration = { ... }
```


### DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy <a name="DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy = { ... }
```


### DataAwsccBatchComputeEnvironmentConfig <a name="DataAwsccBatchComputeEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentConfig: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/batch_compute_environment#id DataAwsccBatchComputeEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBatchComputeEnvironmentEcsSettings <a name="DataAwsccBatchComputeEnvironmentEcsSettings" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettings.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentEcsSettings: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettings = { ... }
```


### DataAwsccBatchComputeEnvironmentEksConfiguration <a name="DataAwsccBatchComputeEnvironmentEksConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentEksConfiguration: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration = { ... }
```


### DataAwsccBatchComputeEnvironmentUpdatePolicy <a name="DataAwsccBatchComputeEnvironmentUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

const dataAwsccBatchComputeEnvironmentUpdatePolicy: dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList <a name="DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus">batchImageStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride">imageIdOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion">imageKubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration">DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchImageStatus`<sup>Required</sup> <a name="batchImageStatus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus"></a>

```typescript
public readonly batchImageStatus: string;
```

- *Type:* string

---

##### `imageIdOverride`<sup>Required</sup> <a name="imageIdOverride" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride"></a>

```typescript
public readonly imageIdOverride: string;
```

- *Type:* string

---

##### `imageKubernetesVersion`<sup>Required</sup> <a name="imageKubernetesVersion" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion"></a>

```typescript
public readonly imageKubernetesVersion: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration">DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType">userdataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a>

---

##### `userdataType`<sup>Required</sup> <a name="userdataType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType"></a>

```typescript
public readonly userdataType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get"></a>

```typescript
public get(index: number): DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes">targetInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType">userdataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `targetInstanceTypes`<sup>Required</sup> <a name="targetInstanceTypes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes"></a>

```typescript
public readonly targetInstanceTypes: string[];
```

- *Type:* string[]

---

##### `userdataType`<sup>Required</sup> <a name="userdataType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType"></a>

```typescript
public readonly userdataType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfter">scaleInAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInAfter`<sup>Required</sup> <a name="scaleInAfter" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.scaleInAfter"></a>

```typescript
public readonly scaleInAfter: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimization</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArn">reservationGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreference">reservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reservationGroupArn`<sup>Required</sup> <a name="reservationGroupArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationGroupArn"></a>

```typescript
public readonly reservationGroupArn: string;
```

- *Type:* string

---

##### `reservationPreference`<sup>Required</sup> <a name="reservationPreference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.reservationPreference"></a>

```typescript
public readonly reservationPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservations</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```typescript
public readonly allowedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorage">useLocalStorage</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useLocalStorage`<sup>Required</sup> <a name="useLocalStorage" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.useLocalStorage"></a>

```typescript
public readonly useLocalStorage: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionType">capacityOptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservations">capacityReservations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArn">ec2InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabled">fipsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagation">instanceMetadataTagsPropagation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfiguration">localStorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoring">monitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfiguration">storageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityOptionType`<sup>Required</sup> <a name="capacityOptionType" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityOptionType"></a>

```typescript
public readonly capacityOptionType: string;
```

- *Type:* string

---

##### `capacityReservations`<sup>Required</sup> <a name="capacityReservations" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.capacityReservations"></a>

```typescript
public readonly capacityReservations: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference</a>

---

##### `ec2InstanceProfileArn`<sup>Required</sup> <a name="ec2InstanceProfileArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.ec2InstanceProfileArn"></a>

```typescript
public readonly ec2InstanceProfileArn: string;
```

- *Type:* string

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.fipsEnabled"></a>

```typescript
public readonly fipsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `instanceMetadataTagsPropagation`<sup>Required</sup> <a name="instanceMetadataTagsPropagation" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceMetadataTagsPropagation"></a>

```typescript
public readonly instanceMetadataTagsPropagation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.instanceRequirements"></a>

```typescript
public readonly instanceRequirements: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference</a>

---

##### `localStorageConfiguration`<sup>Required</sup> <a name="localStorageConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.localStorageConfiguration"></a>

```typescript
public readonly localStorageConfiguration: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.monitoring"></a>

```typescript
public readonly monitoring: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference</a>

---

##### `storageConfiguration`<sup>Required</sup> <a name="storageConfiguration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.storageConfiguration"></a>

```typescript
public readonly storageConfiguration: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplate</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiB">storageSizeGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageSizeGiB`<sup>Required</sup> <a name="storageSizeGiB" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.storageSizeGiB"></a>

```typescript
public readonly storageSizeGiB: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimization">infrastructureOptimization</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplate">instanceLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureOptimization`<sup>Required</sup> <a name="infrastructureOptimization" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureOptimization"></a>

```typescript
public readonly infrastructureOptimization: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInfrastructureOptimizationOutputReference</a>

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.infrastructureRoleArn"></a>

```typescript
public readonly infrastructureRoleArn: string;
```

- *Type:* string

---

##### `instanceLaunchTemplate`<sup>Required</sup> <a name="instanceLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.instanceLaunchTemplate"></a>

```typescript
public readonly instanceLaunchTemplate: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderInstanceLaunchTemplateOutputReference</a>

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProvider</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage">bidPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTags">capacityTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus">desiredvCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration">ec2Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList">DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole">instanceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProvider">managedInstancesProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus">maxvCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus">minvCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup">placementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy">scalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole">spotIamFleetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion">updateToLatestImageVersion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources">DataAwsccBatchComputeEnvironmentComputeResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `bidPercentage`<sup>Required</sup> <a name="bidPercentage" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage"></a>

```typescript
public readonly bidPercentage: number;
```

- *Type:* number

---

##### `capacityTags`<sup>Required</sup> <a name="capacityTags" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.capacityTags"></a>

```typescript
public readonly capacityTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `desiredvCpus`<sup>Required</sup> <a name="desiredvCpus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus"></a>

```typescript
public readonly desiredvCpus: number;
```

- *Type:* number

---

##### `ec2Configuration`<sup>Required</sup> <a name="ec2Configuration" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration"></a>

```typescript
public readonly ec2Configuration: DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList">DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a>

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceRole`<sup>Required</sup> <a name="instanceRole" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole"></a>

```typescript
public readonly instanceRole: string;
```

- *Type:* string

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a>

---

##### `managedInstancesProvider`<sup>Required</sup> <a name="managedInstancesProvider" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.managedInstancesProvider"></a>

```typescript
public readonly managedInstancesProvider: DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesManagedInstancesProviderOutputReference</a>

---

##### `maxvCpus`<sup>Required</sup> <a name="maxvCpus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus"></a>

```typescript
public readonly maxvCpus: number;
```

- *Type:* number

---

##### `minvCpus`<sup>Required</sup> <a name="minvCpus" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus"></a>

```typescript
public readonly minvCpus: number;
```

- *Type:* number

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

---

##### `scalingPolicy`<sup>Required</sup> <a name="scalingPolicy" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `spotIamFleetRole`<sup>Required</sup> <a name="spotIamFleetRole" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole"></a>

```typescript
public readonly spotIamFleetRole: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateToLatestImageVersion`<sup>Required</sup> <a name="updateToLatestImageVersion" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion"></a>

```typescript
public readonly updateToLatestImageVersion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResources">DataAwsccBatchComputeEnvironmentComputeResources</a>

---


### DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference <a name="DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes">minScaleDownDelayMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy">DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minScaleDownDelayMinutes`<sup>Required</sup> <a name="minScaleDownDelayMinutes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes"></a>

```typescript
public readonly minScaleDownDelayMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy">DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---


### DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference <a name="DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.property.containerInsights">containerInsights</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettings">DataAwsccBatchComputeEnvironmentEcsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerInsights`<sup>Required</sup> <a name="containerInsights" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.property.containerInsights"></a>

```typescript
public readonly containerInsights: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentEcsSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEcsSettings">DataAwsccBatchComputeEnvironmentEcsSettings</a>

---


### DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference <a name="DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn">eksClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration">DataAwsccBatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eksClusterArn`<sup>Required</sup> <a name="eksClusterArn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn"></a>

```typescript
public readonly eksClusterArn: string;
```

- *Type:* string

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentEksConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentEksConfiguration">DataAwsccBatchComputeEnvironmentEksConfiguration</a>

---


### DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference <a name="DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccBatchComputeEnvironment } from '@cdktn/provider-awscc'

new dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes">jobExecutionTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate">terminateJobsOnUpdate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy">DataAwsccBatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobExecutionTimeoutMinutes`<sup>Required</sup> <a name="jobExecutionTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes"></a>

```typescript
public readonly jobExecutionTimeoutMinutes: number;
```

- *Type:* number

---

##### `terminateJobsOnUpdate`<sup>Required</sup> <a name="terminateJobsOnUpdate" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate"></a>

```typescript
public readonly terminateJobsOnUpdate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBatchComputeEnvironmentUpdatePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchComputeEnvironment.DataAwsccBatchComputeEnvironmentUpdatePolicy">DataAwsccBatchComputeEnvironmentUpdatePolicy</a>

---



